import { NextRequest, NextResponse } from "next/server"
import { enqueueAndRunWorkflow } from "@/lib/execution/task-runner"

interface Params {
    params: Promise<{ id: string }>
}

export async function POST(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const body = (await request.json().catch(() => ({}))) as {
            triggerType?: string
            engine?: "playwright" | "stagehand"
            createdBy?: string
        }

        const run = await enqueueAndRunWorkflow({
            workflowId: id,
            triggerType: body.triggerType,
            engine: body.engine,
            createdBy: body.createdBy,
        })

        return NextResponse.json({ data: run }, { status: 202 })
    } catch (error) {
        console.error("[api/workflows/:id/run][POST]", error)
        return NextResponse.json({ error: "failed-to-run-workflow" }, { status: 500 })
    }
}
