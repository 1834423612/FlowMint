import type { RuntimeNodeType } from "./types"

const mapByNormalizedType: Record<string, RuntimeNodeType> = {
    openurl: "OpenURL",
    navigate: "OpenURL",
    click: "Click",
    type: "Type",
    wait: "Wait",
    waitfor: "Wait",
    extract: "Extract",
    extracttext: "Extract",
    extractdata: "Extract",
    screenshot: "Screenshot",
    condition: "Condition",
    aiplan: "AIPlan",
    llmchat: "AIPlan",
}

export function normalizeRuntimeNodeType(rawType: string): RuntimeNodeType {
    const key = rawType.replace(/[_\-\s]/g, "").toLowerCase()
    return mapByNormalizedType[key] ?? "OpenURL"
}
