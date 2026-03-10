import { NextRequest } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"
import { OpenAICompatibleProvider } from "@/lib/providers/openai-compatible"

interface Params {
    params: Promise<{ id: string }>
}

export async function POST(_: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const provider = await prisma.providerAccount.findUnique({
            where: { id: BigInt(id) },
        })

        if (!provider) {
            return jsonError("provider-not-found", 404)
        }

        // Create a provider client and test connection
        const client = new OpenAICompatibleProvider(provider.name, {
            apiKey: provider.encryptedApiKey,
            baseUrl: provider.baseUrl ?? undefined,
            model: provider.defaultModel ?? undefined,
        })

        try {
            // Try to list models or do a minimal API call
            const result = await client.test()
            return jsonOk({ success: true, models: result.models })
        } catch (testError) {
            const errorMessage = testError instanceof Error ? testError.message : "Connection test failed"
            return jsonOk({ success: false, error: errorMessage })
        }
    } catch (error) {
        console.error("[api/providers/:id/test][POST]", error)
        return jsonError("test-failed", 500)
    }
}
