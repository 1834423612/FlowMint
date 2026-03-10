import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

interface Params {
    params: Promise<{ id: string }>
}

export async function GET(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const run = await prisma.workflowRun.findUnique({
            where: { id: BigInt(id) },
            include: {
                workflow: true,
                steps: {
                    orderBy: { createdAt: "asc" },
                },
                assets: true,
            },
        })

        if (!run) {
            return jsonError("execution-not-found", 404)
        }

        return jsonOk(run)
    } catch (error) {
        console.error("[api/executions/:id][GET]", error)
        return jsonError("failed-to-fetch-execution", 500)
    }
}
