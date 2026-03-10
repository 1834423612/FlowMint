import { normalizeRuntimeNodeType } from "./node-mapper"
import type {
    BrowserSession,
    NodeExecutionResult,
    RuntimeAssetEvent,
    RuntimeNodeEvent,
    RuntimeNodeType,
    WorkflowExecutionContext,
    WorkflowGraph,
    WorkflowRuntimeNode,
} from "./types"
import { createPlaywrightSession } from "@/lib/browser/playwright-runner"
import { createStagehandSession } from "@/lib/browser/stagehand-runner"
import { R2Storage } from "@/lib/storage/r2"
import type { AIProvider } from "./types"

export interface WorkflowRuntimeOptions {
    engine: "playwright" | "stagehand"
    aiProvider?: AIProvider | null
    onStepLog?: (message: string) => Promise<void>
    onNodeEvent?: (event: RuntimeNodeEvent) => Promise<void>
    onAsset?: (event: RuntimeAssetEvent) => Promise<void>
}

function readConfigValue<T>(node: WorkflowRuntimeNode, key: string, fallback: T): T {
    const value = node.data.config?.[key]
    return (value as T) ?? fallback
}

function evaluateCondition(expression: string, context: WorkflowExecutionContext): boolean {
    try {
        const result = new Function("variables", `return Boolean(${expression});`)(context.variables)
        return Boolean(result)
    } catch {
        return false
    }
}

export class WorkflowRuntime {
    private readonly storage = new R2Storage()

    async run(graph: WorkflowGraph, context: WorkflowExecutionContext, options: WorkflowRuntimeOptions): Promise<void> {
        const session = options.engine === "stagehand" ? await createStagehandSession() : await createPlaywrightSession()

        try {
            const incoming = new Map<string, number>()
            graph.nodes.forEach((node) => incoming.set(node.id, 0))
            graph.edges.forEach((edge) => incoming.set(edge.target, (incoming.get(edge.target) || 0) + 1))

            const queue = graph.nodes.filter((node) => (incoming.get(node.id) || 0) === 0)
            if (graph.nodes.length > 0 && queue.length === 0) {
                throw new Error("workflow has no executable start node")
            }

            const executed = new Set<string>()

            while (queue.length > 0) {
                const node = queue.shift() as WorkflowRuntimeNode
                if (executed.has(node.id)) {
                    continue
                }

                const result = await this.executeNode(node, session, context, options)
                if (result.status === "failed") {
                    throw new Error(result.error || `Node ${node.id} failed`)
                }

                executed.add(node.id)

                const outgoing = graph.edges.filter((edge) => edge.source === node.id)
                let selectedTargets = outgoing

                if (normalizeRuntimeNodeType(node.data.type || node.type) === "Condition") {
                    const expression = readConfigValue(node, "condition", "false")
                    const branch = evaluateCondition(String(expression), context)
                    selectedTargets = outgoing.filter((edge) => {
                        const handle = (edge.sourceHandle || "").toLowerCase()
                        if (!handle) return branch
                        if (branch) return ["true", "yes", "then"].includes(handle)
                        return ["false", "no", "else"].includes(handle)
                    })
                }

                for (const edge of selectedTargets) {
                    const remainingIncoming = (incoming.get(edge.target) || 0) - 1
                    incoming.set(edge.target, remainingIncoming)

                    const target = graph.nodes.find((candidate) => candidate.id === edge.target)
                    if (target && !executed.has(target.id) && remainingIncoming <= 0) {
                        queue.push(target)
                    }
                }
            }

            if (executed.size !== graph.nodes.length) {
                throw new Error("workflow execution incomplete, graph may contain invalid edges or cycles")
            }
        } finally {
            await session.close()
        }
    }

    private async executeNode(
        node: WorkflowRuntimeNode,
        session: BrowserSession,
        context: WorkflowExecutionContext,
        options: WorkflowRuntimeOptions
    ): Promise<NodeExecutionResult> {
        const normalizedType = normalizeRuntimeNodeType(node.data.type || node.type)
        const maxAttempts = Math.max(1, Number(readConfigValue(node, "retries", 0)) + 1)
        const input = { ...(node.data.config || {}) }

        let lastError = "unknown-runtime-error"
        for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
            const log = `[runtime] ${node.id}:${normalizedType}#${attempt}`
            context.logs.push(log)
            await options.onStepLog?.(log)
            await options.onNodeEvent?.({
                event: "started",
                nodeId: node.id,
                nodeType: normalizedType,
                attempt,
                input,
            })

            try {
                let output: unknown

                switch (normalizedType) {
                    case "OpenURL": {
                        const url = String(readConfigValue(node, "url", ""))
                        if (!url) throw new Error("url is required")
                        await session.open(url)
                        output = { url }
                        break
                    }
                    case "Click": {
                        const selector = String(readConfigValue(node, "selector", ""))
                        if (!selector) throw new Error("selector is required")
                        await session.click(selector)
                        output = { selector }
                        break
                    }
                    case "Type": {
                        const selector = String(readConfigValue(node, "selector", ""))
                        const text = String(readConfigValue(node, "text", ""))
                        if (!selector) throw new Error("selector is required")
                        await session.type(selector, text)
                        output = { selector, textLength: text.length }
                        break
                    }
                    case "Wait": {
                        const delay = Math.max(0, Number(readConfigValue(node, "delay", readConfigValue(node, "duration", 1000))))
                        await session.wait(delay)
                        output = { delay }
                        break
                    }
                    case "Extract": {
                        const selector = String(readConfigValue(node, "selector", ""))
                        const attribute = readConfigValue<string | undefined>(node, "attribute", undefined)
                        if (!selector) throw new Error("selector is required")
                        const value = await session.extract(selector, attribute)
                        context.variables[node.id] = value
                        output = { selector, attribute, value }
                        break
                    }
                    case "Screenshot": {
                        const buffer = await session.screenshot()
                        const key = `runs/${context.runId.toString()}/${node.id}-${Date.now()}.png`
                        const stored = await this.storage.putBuffer(key, buffer, "image/png")
                        context.variables[`${node.id}_screenshot`] = stored.publicUrl || stored.key
                        await options.onAsset?.({
                            nodeId: node.id,
                            nodeType: normalizedType,
                            key: stored.key,
                            publicUrl: stored.publicUrl,
                        })
                        output = stored
                        break
                    }
                    case "Condition": {
                        output = { evaluated: true }
                        break
                    }
                    case "AIPlan": {
                        const provider = options.aiProvider
                        if (!provider) {
                            throw new Error("AI provider is not configured")
                        }
                        const prompt = String(readConfigValue(node, "prompt", ""))
                        const plan = await provider.plan(prompt, { variables: context.variables })
                        context.variables[`${node.id}_plan`] = plan
                        output = plan
                        break
                    }
                    default:
                        throw new Error(`Unsupported node type: ${normalizedType as RuntimeNodeType}`)
                }

                await options.onNodeEvent?.({
                    event: "success",
                    nodeId: node.id,
                    nodeType: normalizedType,
                    attempt,
                    input,
                    output,
                })
                return { status: "success", attempts: attempt, output }
            } catch (error) {
                lastError = error instanceof Error ? error.message : "unknown-runtime-error"
                context.logs.push(`[runtime-error] ${node.id}:${normalizedType}#${attempt} ${lastError}`)

                if (attempt >= maxAttempts) {
                    await options.onNodeEvent?.({
                        event: "failed",
                        nodeId: node.id,
                        nodeType: normalizedType,
                        attempt,
                        input,
                        error: lastError,
                    })
                    return { status: "failed", attempts: attempt, error: lastError }
                }

                await new Promise((resolve) => setTimeout(resolve, 300 * attempt))
            }
        }

        return { status: "failed", attempts: maxAttempts, error: lastError }
    }
}
