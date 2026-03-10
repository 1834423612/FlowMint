import type { AIProviderClient, PlanInput, PlanOutput, ProviderCredentials } from "./types"

export class OpenAICompatibleProvider implements AIProviderClient {
    readonly name: string
    private readonly creds: ProviderCredentials

    constructor(name: string, creds: ProviderCredentials) {
        this.name = name
        this.creds = creds
    }

    async plan(input: PlanInput): Promise<PlanOutput> {
        const model = this.creds.model || "gpt-4o-mini"
        const baseUrl = (this.creds.baseUrl || "https://api.openai.com/v1").replace(/\/$/, "")

        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.creds.apiKey}`,
            },
            body: JSON.stringify({
                model,
                response_format: { type: "json_object" },
                messages: [
                    {
                        role: "system",
                        content:
                            "You are a browser automation planner. Return strict JSON with keys: action, reasoning, params.",
                    },
                    {
                        role: "user",
                        content: JSON.stringify({ instruction: input.instruction, context: input.context || {} }),
                    },
                ],
            }),
        })

        if (!response.ok) {
            const text = await response.text()
            throw new Error(`AI provider request failed: ${response.status} ${text}`)
        }

        const data = (await response.json()) as {
            choices?: Array<{ message?: { content?: string } }>
        }
        const content = data.choices?.[0]?.message?.content

        if (!content) {
            throw new Error("AI provider returned empty plan")
        }

        let parsed: Record<string, unknown>
        try {
            parsed = JSON.parse(content)
        } catch {
            parsed = { action: "raw", reasoning: "non-json-response", params: { raw: content } }
        }

        return {
            provider: this.name,
            model,
            plan: parsed,
        }
    }
}
