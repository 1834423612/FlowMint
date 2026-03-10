import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

interface Params {
    params: Promise<{ id: string }>
}

export async function GET(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const provider = await prisma.providerAccount.findUnique({
            where: { id: BigInt(id) },
        })

        if (!provider) {
            return jsonError("provider-not-found", 404)
        }

        return jsonOk(provider)
    } catch (error) {
        console.error("[api/providers/:id][GET]", error)
        return jsonError("failed-to-fetch-provider", 500)
    }
}

export async function PUT(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const body = (await request.json()) as {
            name?: string
            type?: "openai" | "anthropic" | "openrouter" | "azure" | "deepseek" | "ollama" | "custom"
            protocol?: "openai_compatible" | "anthropic_compatible"
            apiKey?: string
            baseUrl?: string
            defaultModel?: string
            isDefault?: boolean
        }

        const current = await prisma.providerAccount.findUnique({ where: { id: BigInt(id) } })
        if (!current) {
            return jsonError("provider-not-found", 404)
        }

        // If setting as default, unset other defaults for the same user
        if (body.isDefault === true) {
            await prisma.providerAccount.updateMany({
                where: { userId: current.userId, id: { not: current.id } },
                data: { isDefault: false },
            })
        }

        const updated = await prisma.providerAccount.update({
            where: { id: current.id },
            data: {
                name: body.name ?? current.name,
                type: body.type ?? current.type,
                protocol: body.protocol ?? current.protocol,
                encryptedApiKey: body.apiKey ?? current.encryptedApiKey,
                baseUrl: body.baseUrl !== undefined ? body.baseUrl : current.baseUrl,
                defaultModel: body.defaultModel !== undefined ? body.defaultModel : current.defaultModel,
                isDefault: body.isDefault ?? current.isDefault,
            },
        })

        return jsonOk(updated)
    } catch (error) {
        console.error("[api/providers/:id][PUT]", error)
        return jsonError("failed-to-update-provider", 500)
    }
}

export async function DELETE(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        
        const provider = await prisma.providerAccount.findUnique({
            where: { id: BigInt(id) },
        })
        
        if (!provider) {
            return jsonError("provider-not-found", 404)
        }
        
        await prisma.providerAccount.delete({ where: { id: BigInt(id) } })

        // If this was the default, make another one default
        if (provider.isDefault) {
            const nextDefault = await prisma.providerAccount.findFirst({
                where: { userId: provider.userId },
                orderBy: { updatedAt: "desc" },
            })
            if (nextDefault) {
                await prisma.providerAccount.update({
                    where: { id: nextDefault.id },
                    data: { isDefault: true },
                })
            }
        }

        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error("[api/providers/:id][DELETE]", error)
        return jsonError("failed-to-delete-provider", 500)
    }
}
