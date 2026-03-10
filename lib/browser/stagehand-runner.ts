import { createPlaywrightSession } from "./playwright-runner"
import type { BrowserSession } from "@/lib/runtime/types"

function dynamicImport(moduleName: string): Promise<unknown> {
    // Avoid hard dependency lock so Stagehand remains optional in MVP deployments.
    return new Function("m", "return import(m)")(moduleName) as Promise<unknown>
}

export async function createStagehandSession(): Promise<BrowserSession> {
    try {
        await dynamicImport("@browserbasehq/stagehand")
        return createPlaywrightSession()
    } catch {
        console.warn("[stagehand] package not found, fallback to Playwright session")
        return createPlaywrightSession()
    }
}
