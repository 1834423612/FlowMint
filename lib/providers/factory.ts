import { prisma } from "@/lib/db/prisma"
import { OpenAICompatibleProvider } from "./openai-compatible"
import type { AIProviderClient } from "./types"

export async function getDefaultAIProvider(userId: bigint): Promise<AIProviderClient | null> {
    const provider = await prisma.providerAccount.findFirst({
        where: { userId, isDefault: true },
        orderBy: { updatedAt: "desc" },
    })

    if (!provider) {
        return null
    }

    // Placeholder decryption path for MVP; replace with KMS-backed implementation.
    const apiKey = provider.encryptedApiKey
    if (!apiKey) {
        return null
    }

    return new OpenAICompatibleProvider(provider.name, {
        apiKey,
        baseUrl: provider.baseUrl ?? undefined,
        model: provider.defaultModel ?? undefined,
    })
}
