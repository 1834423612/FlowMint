import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

export async function GET() {
    try {
        const workflows = await prisma.workflow.findMany({
            include: {
                versions: {
                    orderBy: { versionNo: "desc" },
                    take: 1,
                },
            },
            orderBy: { updatedAt: "desc" },
            take: 100,
        })
        return jsonOk(workflows)
    } catch (error) {
        console.error("[api/workflows][GET]", error)
        return jsonError("failed-to-fetch-workflows", 500)
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

        if (!body.ownerUserId || !body.name || !body.slug) {
            return jsonError("ownerUserId-name-slug-required", 400)
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

        return jsonOk(workflow, { status: 201 })
    } catch (error) {
        console.error("[api/workflows][POST]", error)
        return jsonError("failed-to-create-workflow", 500)
    }
}
