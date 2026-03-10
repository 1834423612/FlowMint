import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

export async function GET() {
    try {
        const workflows = await prisma.workflow.findMany({
            orderBy: { updatedAt: "desc" },
            take: 100,
        })
        return NextResponse.json({ data: workflows })
    } catch (error) {
        console.error("[api/workflows][GET]", error)
        return NextResponse.json({ error: "failed-to-fetch-workflows" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as {
            ownerUserId: string
            name: string
            slug: string
            graph?: unknown
        }

        const workflow = await prisma.workflow.create({
            data: {
                ownerUserId: BigInt(body.ownerUserId),
                name: body.name,
                slug: body.slug,
            },
        })

        await prisma.workflowVersion.create({
            data: {
                workflowId: workflow.id,
                versionNo: 1,
                graph: body.graph || { nodes: [], edges: [] },
            },
        })

        return NextResponse.json({ data: workflow }, { status: 201 })
    } catch (error) {
        console.error("[api/workflows][POST]", error)
        return NextResponse.json({ error: "failed-to-create-workflow" }, { status: 500 })
    }
}
