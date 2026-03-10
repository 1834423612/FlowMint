import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

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

        return NextResponse.json({ data: runs })
    } catch (error) {
        console.error("[api/executions][GET]", error)
        return NextResponse.json({ error: "failed-to-fetch-executions" }, { status: 500 })
    }
}
