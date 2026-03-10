import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

export async function GET(request: NextRequest) {
    try {
        const userId = request.nextUrl.searchParams.get("userId")
        if (!userId) {
            return NextResponse.json({ error: "userId-required" }, { status: 400 })
        }

        const providers = await prisma.providerAccount.findMany({
            where: { userId: BigInt(userId) },
            orderBy: { updatedAt: "desc" },
        })

        return NextResponse.json({ data: providers })
    } catch (error) {
        console.error("[api/providers][GET]", error)
        return NextResponse.json({ error: "failed-to-fetch-providers" }, { status: 500 })
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

        return NextResponse.json({ data: provider }, { status: 201 })
    } catch (error) {
        console.error("[api/providers][POST]", error)
        return NextResponse.json({ error: "failed-to-create-provider" }, { status: 500 })
    }
}
