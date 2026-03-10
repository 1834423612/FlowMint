import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

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
            return NextResponse.json({ error: "execution-not-found" }, { status: 404 })
        }

        return NextResponse.json({ data: run })
    } catch (error) {
        console.error("[api/executions/:id][GET]", error)
        return NextResponse.json({ error: "failed-to-fetch-execution" }, { status: 500 })
    }
}
