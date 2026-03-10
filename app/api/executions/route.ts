import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

export async function GET() {
    try {
        const runs = await prisma.workflowRun.findMany({
            include: {
                workflow: {
                    select: { id: true, name: true },
                },
            },
            orderBy: { createdAt: "desc" },
            take: 100,
        })

        return jsonOk(runs)
    } catch (error) {
        console.error("[api/executions][GET]", error)
        return jsonError("failed-to-fetch-executions", 500)
    }
}
