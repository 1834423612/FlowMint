export type RuntimeNodeType =
    | "OpenURL"
    | "Click"
    | "Type"
    | "Wait"
    | "Extract"
    | "Screenshot"
    | "Condition"
    | "AIPlan"

export type WorkflowRunState = "queued" | "running" | "success" | "failed" | "cancelled"

export interface WorkflowRuntimeNode {
    id: string
    type: string
    data: {
        type?: string
        label?: string
        config?: Record<string, unknown>
    }
}

export interface WorkflowRuntimeEdge {
    id?: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
}

export interface WorkflowGraph {
    nodes: WorkflowRuntimeNode[]
    edges: WorkflowRuntimeEdge[]
}

export interface WorkflowExecutionContext {
    runId: bigint
    workflowId: bigint
    variables: Record<string, unknown>
    logs: string[]
    metadata: Record<string, unknown>
}

export interface NodeExecutionResult {
    status: WorkflowRunState
    output?: unknown
    error?: string
}

export interface BrowserSession {
    open: (url: string) => Promise<void>
    click: (selector: string) => Promise<void>
    type: (selector: string, value: string) => Promise<void>
    wait: (ms: number) => Promise<void>
    extract: (selector: string, attribute?: string) => Promise<string | null>
    screenshot: () => Promise<Buffer>
    close: () => Promise<void>
}

export interface AIProvider {
    plan: (prompt: string, input?: Record<string, unknown>) => Promise<Record<string, unknown>>
}
