import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

export async function GET(request: NextRequest) {
    try {
        const userId = request.nextUrl.searchParams.get("userId")
        if (!userId) {
            return jsonError("userId-required", 400)
        }

        const providers = await prisma.providerAccount.findMany({
            where: { userId: BigInt(userId) },
            orderBy: { updatedAt: "desc" },
        })

        return jsonOk(providers)
    } catch (error) {
        console.error("[api/providers][GET]", error)
        return jsonError("failed-to-fetch-providers", 500)
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as {
            userId: string
            name: string
            type: "openai" | "anthropic" | "openrouter" | "azure" | "deepseek" | "ollama" | "custom"
            protocol?: "openai_compatible" | "anthropic_compatible"
            apiKey: string
            baseUrl?: string
            defaultModel?: string
            isDefault?: boolean
        }

        if (!body.userId || !body.name || !body.type || !body.apiKey) {
            return jsonError("userId-name-type-apiKey-required", 400)
        }

        const provider = await prisma.providerAccount.create({
            data: {
                userId: BigInt(body.userId),
                name: body.name,
                type: body.type,
                protocol: body.protocol || "openai_compatible",
                encryptedApiKey: body.apiKey,
                baseUrl: body.baseUrl,
                defaultModel: body.defaultModel,
                isDefault: body.isDefault ?? false,
            },
        })

        return jsonOk(provider, { status: 201 })
    } catch (error) {
        console.error("[api/providers][POST]", error)
        return jsonError("failed-to-create-provider", 500)
    }
}
