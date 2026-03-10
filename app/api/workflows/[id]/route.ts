import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

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
            return jsonError("workflow-not-found", 404)
        }

        return jsonOk(workflow)
    } catch (error) {
        console.error("[api/workflows/:id][GET]", error)
        return jsonError("failed-to-fetch-workflow", 500)
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
            return jsonError("workflow-not-found", 404)
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

        return jsonOk(updated)
    } catch (error) {
        console.error("[api/workflows/:id][PUT]", error)
        return jsonError("failed-to-update-workflow", 500)
    }
}

export async function DELETE(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        await prisma.workflow.delete({ where: { id: BigInt(id) } })
        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error("[api/workflows/:id][DELETE]", error)
        return jsonError("failed-to-delete-workflow", 500)
    }
}
