export type NodeCategory = "trigger" | "browser" | "page" | "data" | "flow" | "ai"

export interface NodeDefinition {
  type: string
  category: NodeCategory
  labelKey: string
  icon: string
  color: string
  inputs?: number
  outputs?: number
}

export const nodeDefinitions: NodeDefinition[] = [
  // Triggers
  { type: "manual_trigger", category: "trigger", labelKey: "trigger.manual", icon: "lucide:hand", color: "#10b981", inputs: 0, outputs: 1 },
  { type: "schedule_trigger", category: "trigger", labelKey: "trigger.schedule", icon: "lucide:calendar-clock", color: "#10b981", inputs: 0, outputs: 1 },
  { type: "webhook_trigger", category: "trigger", labelKey: "trigger.webhook", icon: "lucide:webhook", color: "#10b981", inputs: 0, outputs: 1 },
  
  // Browser
  { type: "open_browser", category: "browser", labelKey: "browser.openBrowser", icon: "lucide:chrome", color: "#3b82f6", inputs: 1, outputs: 1 },
  { type: "close_browser", category: "browser", labelKey: "browser.closeBrowser", icon: "lucide:x-circle", color: "#3b82f6", inputs: 1, outputs: 1 },
  { type: "new_tab", category: "browser", labelKey: "browser.newTab", icon: "lucide:plus-square", color: "#3b82f6", inputs: 1, outputs: 1 },
  { type: "close_tab", category: "browser", labelKey: "browser.closeTab", icon: "lucide:x-square", color: "#3b82f6", inputs: 1, outputs: 1 },
  { type: "navigate", category: "browser", labelKey: "browser.navigate", icon: "lucide:compass", color: "#3b82f6", inputs: 1, outputs: 1 },
  
  // Page Actions
  { type: "click", category: "page", labelKey: "page.click", icon: "lucide:mouse-pointer-click", color: "#8b5cf6", inputs: 1, outputs: 1 },
  { type: "type", category: "page", labelKey: "page.type", icon: "lucide:keyboard", color: "#8b5cf6", inputs: 1, outputs: 1 },
  { type: "scroll", category: "page", labelKey: "page.scroll", icon: "lucide:arrow-down-up", color: "#8b5cf6", inputs: 1, outputs: 1 },
  { type: "screenshot", category: "page", labelKey: "page.screenshot", icon: "lucide:camera", color: "#8b5cf6", inputs: 1, outputs: 1 },
  { type: "wait_for", category: "page", labelKey: "page.waitFor", icon: "lucide:hourglass", color: "#8b5cf6", inputs: 1, outputs: 1 },
  { type: "extract_text", category: "page", labelKey: "page.extractText", icon: "lucide:file-text", color: "#8b5cf6", inputs: 1, outputs: 1 },
  { type: "extract_data", category: "page", labelKey: "page.extractData", icon: "lucide:table", color: "#8b5cf6", inputs: 1, outputs: 1 },
  
  // Data Processing
  { type: "set_variable", category: "data", labelKey: "data.setVariable", icon: "lucide:variable", color: "#f59e0b", inputs: 1, outputs: 1 },
  { type: "transform", category: "data", labelKey: "data.transform", icon: "lucide:shuffle", color: "#f59e0b", inputs: 1, outputs: 1 },
  { type: "filter", category: "data", labelKey: "data.filter", icon: "lucide:filter", color: "#f59e0b", inputs: 1, outputs: 1 },
  { type: "aggregate", category: "data", labelKey: "data.aggregate", icon: "lucide:layers", color: "#f59e0b", inputs: 1, outputs: 1 },
  { type: "http_request", category: "data", labelKey: "data.httpRequest", icon: "lucide:globe", color: "#f59e0b", inputs: 1, outputs: 1 },
  
  // Flow Control
  { type: "condition", category: "flow", labelKey: "flow.condition", icon: "lucide:git-branch", color: "#ec4899", inputs: 1, outputs: 2 },
  { type: "loop", category: "flow", labelKey: "flow.loop", icon: "lucide:repeat", color: "#ec4899", inputs: 1, outputs: 1 },
  { type: "delay", category: "flow", labelKey: "flow.delay", icon: "lucide:timer", color: "#ec4899", inputs: 1, outputs: 1 },
  { type: "parallel", category: "flow", labelKey: "flow.parallel", icon: "lucide:git-fork", color: "#ec4899", inputs: 1, outputs: 2 },
  { type: "sub_workflow", category: "flow", labelKey: "flow.subWorkflow", icon: "lucide:workflow", color: "#ec4899", inputs: 1, outputs: 1 },
  
  // AI Capabilities
  { type: "llm_chat", category: "ai", labelKey: "ai.llmChat", icon: "lucide:bot", color: "#06b6d4", inputs: 1, outputs: 1 },
  { type: "text_classify", category: "ai", labelKey: "ai.textClassify", icon: "lucide:tags", color: "#06b6d4", inputs: 1, outputs: 1 },
  { type: "entity_extract", category: "ai", labelKey: "ai.entityExtract", icon: "lucide:scan-text", color: "#06b6d4", inputs: 1, outputs: 1 },
  { type: "sentiment", category: "ai", labelKey: "ai.sentiment", icon: "lucide:smile", color: "#06b6d4", inputs: 1, outputs: 1 },
]

export const categoryColors: Record<NodeCategory, string> = {
  trigger: "#10b981",
  browser: "#3b82f6",
  page: "#8b5cf6",
  data: "#f59e0b",
  flow: "#ec4899",
  ai: "#06b6d4",
}

export function getNodeDefinition(type: string): NodeDefinition | undefined {
  return nodeDefinitions.find((def) => def.type === type)
}

export function getNodesByCategory(category: NodeCategory): NodeDefinition[] {
  return nodeDefinitions.filter((def) => def.category === category)
}
