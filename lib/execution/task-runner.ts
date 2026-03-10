import { prisma } from "@/lib/db/prisma"
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

export interface RunWorkflowInput {
    workflowId: string
    triggerType?: string
    engine?: "playwright" | "stagehand"
    createdBy?: string
}

export async function enqueueAndRunWorkflow(input: RunWorkflowInput) {
    const workflowId = toBigInt(input.workflowId)

    const workflow = await prisma.workflow.findUnique({ where: { id: workflowId } })
    if (!workflow) {
        throw new Error("workflow not found")
    }

    const version = await prisma.workflowVersion.findFirst({
        where: { workflowId },
        orderBy: { versionNo: "desc" },
    })

    if (!version) {
        throw new Error("workflow has no version")
    }

    const run = await prisma.workflowRun.create({
        data: {
            workflowId,
            workflowVersionId: version.id,
            triggerType: input.triggerType || "manual",
            status: "queued",
            createdBy: input.createdBy ? toBigInt(input.createdBy) : null,
            metadata: {
                engine: input.engine || "playwright",
            },
        },
    })

    const runtime = new WorkflowRuntime()

    await prisma.workflowRun.update({
        where: { id: run.id },
        data: {
            status: "running",
            startedAt: new Date(),
        },
    })

    try {
        const graph = parseGraph(version.graph)
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
                engine: input.engine || "playwright",
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
                },
            }
        )

        await prisma.workflowRun.update({
            where: { id: run.id },
            data: {
                status: "success",
                finishedAt: new Date(),
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
            },
        })
    }

    return prisma.workflowRun.findUnique({ where: { id: run.id } })
}
