export interface ProviderCredentials {
    apiKey: string
    baseUrl?: string
    model?: string
}

export interface PlanInput {
    instruction: string
    context?: Record<string, unknown>
}

export interface PlanOutput {
    provider: string
    model: string
    plan: Record<string, unknown>
}

export interface AIProviderClient {
    name: string
    plan(input: PlanInput): Promise<PlanOutput>
}
