import type { RuntimeNodeType } from "./types"

const mapByNormalizedType: Record<string, RuntimeNodeType> = {
    manualtrigger: "Noop",
    scheduletrigger: "Noop",
    webhooktrigger: "Noop",
    openbrowser: "Noop",
    closebrowser: "Noop",
    newtab: "Noop",
    closetab: "Noop",
    openurl: "OpenURL",
    navigate: "OpenURL",
    click: "Click",
    type: "Type",
    wait: "Wait",
    waitfor: "Wait",
    delay: "Wait",
    extract: "Extract",
    extracttext: "Extract",
    extractdata: "Extract",
    screenshot: "Screenshot",
    condition: "Condition",
    loop: "Noop",
    parallel: "Noop",
    subworkflow: "Noop",
    setvariable: "Noop",
    transform: "Noop",
    filter: "Noop",
    aggregate: "Noop",
    httprequest: "Noop",
    aiplan: "AIPlan",
    llmchat: "AIPlan",
}

export function normalizeRuntimeNodeType(rawType: string): RuntimeNodeType {
    const key = rawType.replace(/[_\-\s]/g, "").toLowerCase()
    return mapByNormalizedType[key] ?? "Noop"
}
