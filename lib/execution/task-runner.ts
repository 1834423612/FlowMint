import { prisma } from "@/lib/db/prisma"
import { Prisma } from "@/generated/prisma"
import { WorkflowRuntime } from "@/lib/runtime/workflow-runtime"
import type { WorkflowGraph } from "@/lib/runtime/types"
import { getDefaultAIProvider } from "@/lib/providers/factory"

function toBigInt(input: string): bigint {
    return BigInt(input)
}

function parseGraph(raw: unknown): WorkflowGraph {
    if (typeof raw !== "object" || raw === null) {
        throw new Error("workflow graph is invalid")
    }

    const graph = raw as { nodes?: unknown; edges?: unknown }
    if (!Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) {
        throw new Error("workflow graph nodes/edges are required")
    }

    return {
        nodes: graph.nodes as WorkflowGraph["nodes"],
        edges: graph.edges as WorkflowGraph["edges"],
    }
}

function toInputJson(value: unknown): Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput | undefined {
    if (typeof value === "undefined") {
        return undefined
    }

    return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue
}

function coerceEngine(engine?: string): "playwright" | "stagehand" {
    return engine === "stagehand" ? "stagehand" : "playwright"
}

export interface RunWorkflowInput {
    workflowId: string
    triggerType?: string
    engine?: "playwright" | "stagehand"
    createdBy?: string
    graph?: unknown
}

export async function enqueueAndRunWorkflow(input: RunWorkflowInput) {
    const workflowId = toBigInt(input.workflowId)
    const engine = coerceEngine(input.engine)

    const workflow = await prisma.workflow.findUnique({ where: { id: workflowId } })
    if (!workflow) {
        throw new Error("workflow not found")
    }

    const latestVersion = await prisma.workflowVersion.findFirst({
        where: { workflowId },
        orderBy: { versionNo: "desc" },
    })

    if (!latestVersion && !input.graph) {
        throw new Error("workflow has no version")
    }

    let versionToRun = latestVersion
    if (input.graph) {
        const nextVersionNo = (latestVersion?.versionNo || 0) + 1
        versionToRun = await prisma.workflowVersion.create({
            data: {
                workflowId,
                versionNo: nextVersionNo,
                graph: toInputJson(parseGraph(input.graph)) as Prisma.InputJsonValue,
                changelog: "auto snapshot before manual run",
                createdBy: input.createdBy ? toBigInt(input.createdBy) : null,
            },
        })

        await prisma.workflow.update({
            where: { id: workflowId },
            data: { latestVersionNo: nextVersionNo },
        })
    }

    if (!versionToRun) {
        throw new Error("workflow has no runnable version")
    }

    const graph = parseGraph(versionToRun.graph)

    const run = await prisma.workflowRun.create({
        data: {
            workflowId,
            workflowVersionId: versionToRun.id,
            triggerType: input.triggerType || "manual",
            status: "queued",
            createdBy: input.createdBy ? toBigInt(input.createdBy) : null,
            metadata: {
                engine,
                versionNo: versionToRun.versionNo,
                startedBy: input.createdBy || null,
            },
        },
    })

    const runtime = new WorkflowRuntime()
    const stepMap = new Map<string, bigint>()
    const logs: string[] = []

    await prisma.workflowRun.update({
        where: { id: run.id },
        data: {
            status: "running",
            startedAt: new Date(),
        },
    })

    try {
        const aiProvider = workflow.ownerUserId ? await getDefaultAIProvider(workflow.ownerUserId) : null

        await runtime.run(
            graph,
            {
                runId: run.id,
                workflowId,
                variables: {},
                logs: [],
                metadata: {},
            },
            {
                engine,
                aiProvider: aiProvider
                    ? {
                        plan: async (prompt, data) => {
                            const output = await aiProvider.plan({ instruction: prompt, context: data })
                            return output.plan
                        },
                    }
                    : null,
                onStepLog: async (message) => {
                    console.log(`[run:${run.id.toString()}] ${message}`)
                    logs.push(message)
                    await prisma.workflowRun.update({
                        where: { id: run.id },
                        data: { logs },
                    })
                },
                onNodeEvent: async (event) => {
                    const now = new Date()
                    const existingStepId = stepMap.get(event.nodeId)

                    if (event.event === "started") {
                        if (!existingStepId) {
                            const created = await prisma.workflowRunStep.create({
                                data: {
                                    workflowRunId: run.id,
                                    nodeId: event.nodeId,
                                    nodeType: event.nodeType,
                                    status: "running",
                                    attempts: event.attempt,
                                    input: toInputJson(event.input),
                                    startedAt: now,
                                },
                            })
                            stepMap.set(event.nodeId, created.id)
                        } else {
                            await prisma.workflowRunStep.update({
                                where: { id: existingStepId },
                                data: {
                                    status: "running",
                                    attempts: event.attempt,
                                    input: toInputJson(event.input),
                                    errorMessage: null,
                                    finishedAt: null,
                                },
                            })
                        }
                        return
                    }

                    const stepId = existingStepId
                    if (!stepId) {
                        return
                    }

                    if (event.event === "success") {
                        await prisma.workflowRunStep.update({
                            where: { id: stepId },
                            data: {
                                status: "success",
                                attempts: event.attempt,
                                output: toInputJson(event.output),
                                finishedAt: now,
                            },
                        })
                        return
                    }

                    await prisma.workflowRunStep.update({
                        where: { id: stepId },
                        data: {
                            status: "failed",
                            attempts: event.attempt,
                            errorMessage: event.error,
                            finishedAt: now,
                        },
                    })
                },
                onAsset: async (asset) => {
                    await prisma.asset.create({
                        data: {
                            workflowRunId: run.id,
                            type: "screenshot",
                            bucket: process.env.R2_BUCKET || "r2",
                            objectKey: asset.key,
                            publicUrl: asset.publicUrl,
                            metadata: {
                                nodeId: asset.nodeId,
                                nodeType: asset.nodeType,
                            },
                        },
                    })
                },
            }
        )

        await prisma.workflowRun.update({
            where: { id: run.id },
            data: {
                status: "success",
                finishedAt: new Date(),
                logs,
                metadata: {
                    engine,
                    versionNo: versionToRun.versionNo,
                    stepCount: stepMap.size,
                },
            },
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "workflow-run-failed"
        await prisma.workflowRun.update({
            where: { id: run.id },
            data: {
                status: "failed",
                finishedAt: new Date(),
                errorMessage,
                logs,
                metadata: {
                    engine,
                    versionNo: versionToRun.versionNo,
                    stepCount: stepMap.size,
                },
            },
        })
    }

    return prisma.workflowRun.findUnique({ where: { id: run.id } })
}
