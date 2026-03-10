import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

interface Params {
    params: Promise<{ id: string }>
}

export async function GET(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const workflow = await prisma.workflow.findUnique({
            where: { id: BigInt(id) },
            include: {
                versions: {
                    orderBy: { versionNo: "desc" },
                    take: 1,
                },
            },
        })

        if (!workflow) {
            return NextResponse.json({ error: "workflow-not-found" }, { status: 404 })
        }

        return NextResponse.json({ data: workflow })
    } catch (error) {
        console.error("[api/workflows/:id][GET]", error)
        return NextResponse.json({ error: "failed-to-fetch-workflow" }, { status: 500 })
    }
}

export async function PUT(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const body = (await request.json()) as {
            name?: string
            status?: "draft" | "active" | "paused" | "archived"
            graph?: unknown
            changelog?: string
            createdBy?: string
        }

        const current = await prisma.workflow.findUnique({ where: { id: BigInt(id) } })
        if (!current) {
            return NextResponse.json({ error: "workflow-not-found" }, { status: 404 })
        }

        const updated = await prisma.workflow.update({
            where: { id: current.id },
            data: {
                name: body.name ?? current.name,
                status: body.status ?? current.status,
                latestVersionNo: current.latestVersionNo + (body.graph ? 1 : 0),
            },
        })

        if (body.graph) {
            await prisma.workflowVersion.create({
                data: {
                    workflowId: current.id,
                    versionNo: updated.latestVersionNo,
                    graph: body.graph,
                    changelog: body.changelog,
                    createdBy: body.createdBy ? BigInt(body.createdBy) : null,
                },
            })
        }

        return NextResponse.json({ data: updated })
    } catch (error) {
        console.error("[api/workflows/:id][PUT]", error)
        return NextResponse.json({ error: "failed-to-update-workflow" }, { status: 500 })
    }
}

export async function DELETE(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        await prisma.workflow.delete({ where: { id: BigInt(id) } })
        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error("[api/workflows/:id][DELETE]", error)
        return NextResponse.json({ error: "failed-to-delete-workflow" }, { status: 500 })
    }
}
