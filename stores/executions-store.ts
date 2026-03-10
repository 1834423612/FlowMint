import { create } from "zustand"

export type ExecutionStatus = "queued" | "running" | "success" | "failed" | "cancelled"
export type TriggerType = "manual" | "schedule" | "webhook"

export interface ExecutionStep {
  id: string
  nodeId: string
  nodeType: string
  nodeLabel: string
  status: ExecutionStatus
  input?: Record<string, unknown>
  output?: Record<string, unknown>
  errorMessage?: string
  startedAt?: string
  finishedAt?: string
}

export interface ExecutionLog {
  timestamp: string
  level: "info" | "warn" | "error"
  message: string
  nodeId?: string
}

export interface ExecutionAsset {
  id: string
  type: string
  objectKey: string
  publicUrl?: string
  createdAt: string
}

export interface ExecutionData {
  id: string
  workflowId: string
  workflowName: string
  status: ExecutionStatus
  triggerType: TriggerType
  steps: ExecutionStep[]
  logs: ExecutionLog[]
  assets: ExecutionAsset[]
  startedAt?: string
  finishedAt?: string
  errorMessage?: string
  createdAt: string
}

interface ExecutionsState {
  executions: ExecutionData[]
  currentExecution: ExecutionData | null
  isLoading: boolean
  error: string | null
  pollingInterval: NodeJS.Timeout | null

  // Actions
  fetchExecutions: () => Promise<void>
  fetchExecution: (id: string) => Promise<ExecutionData | null>
  getExecution: (id: string) => ExecutionData | undefined
  deleteExecution: (id: string) => Promise<void>
  
  // Polling for running executions
  startPolling: () => void
  stopPolling: () => void
  
  // Stats
  getStats: () => {
    total: number
    success: number
    failed: number
    running: number
    successRate: number
  }
}

function mapExecutionFromApi(e: Record<string, unknown>): ExecutionData {
  const workflow = e.workflow as { id?: string | number; name?: string } | null
  const steps = (e.steps as Array<Record<string, unknown>> | null) || []
  const logs = (e.logs as string[] | null) || []
  const assets = (e.assets as Array<Record<string, unknown>> | null) || []
  
  return {
    id: String(e.id),
    workflowId: String(e.workflowId || workflow?.id || ""),
    workflowName: workflow?.name ? String(workflow.name) : "未知工作流",
    status: (e.status as ExecutionStatus) || "queued",
    triggerType: (e.triggerType as TriggerType) || "manual",
    steps: steps.map((s) => ({
      id: String(s.id),
      nodeId: String(s.nodeId || ""),
      nodeType: String(s.nodeType || "unknown"),
      nodeLabel: String(s.nodeId || ""),
      status: (s.status as ExecutionStatus) || "queued",
      input: s.input as Record<string, unknown> | undefined,
      output: s.output as Record<string, unknown> | undefined,
      errorMessage: s.errorMessage ? String(s.errorMessage) : undefined,
      startedAt: s.startedAt ? String(s.startedAt) : undefined,
      finishedAt: s.finishedAt ? String(s.finishedAt) : undefined,
    })),
    logs: logs.map((msg, i) => ({
      timestamp: new Date(Date.now() - (logs.length - i) * 1000).toISOString(),
      level: "info" as const,
      message: String(msg),
    })),
    assets: assets.map((a) => ({
      id: String(a.id || ""),
      type: String(a.type || "screenshot"),
      objectKey: String(a.objectKey || ""),
      publicUrl: a.publicUrl ? String(a.publicUrl) : undefined,
      createdAt: String(a.createdAt || new Date().toISOString()),
    })),
    startedAt: e.startedAt ? String(e.startedAt) : undefined,
    finishedAt: e.finishedAt ? String(e.finishedAt) : undefined,
    errorMessage: e.errorMessage ? String(e.errorMessage) : undefined,
    createdAt: String(e.createdAt || new Date().toISOString()),
  }
}

export const useExecutionsStore = create<ExecutionsState>()((set, get) => ({
  executions: [],
  currentExecution: null,
  isLoading: false,
  error: null,
  pollingInterval: null,

  fetchExecutions: async () => {
    set({ isLoading: true, error: null })

    try {
      const response = await fetch("/api/executions")
      
      if (!response.ok) {
        throw new Error("Failed to fetch executions")
      }

      const data = await response.json()
      const executions = (data.data || []).map(mapExecutionFromApi)

      set({ executions, isLoading: false })
    } catch (error) {
      console.error("[executions-store] fetchExecutions error:", error)
      set({ 
        error: error instanceof Error ? error.message : "Failed to fetch executions",
        isLoading: false 
      })
    }
  },

  fetchExecution: async (id) => {
    try {
      const response = await fetch(`/api/executions/${id}`)
      
      if (!response.ok) {
        throw new Error("Failed to fetch execution")
      }

      const data = await response.json()
      const execution = mapExecutionFromApi(data.data)

      // Update in store
      set((state) => ({
        executions: state.executions.some((e) => e.id === id)
          ? state.executions.map((e) => (e.id === id ? execution : e))
          : [execution, ...state.executions],
        currentExecution: execution,
      }))

      return execution
    } catch (error) {
      console.error("[executions-store] fetchExecution error:", error)
      return null
    }
  },

  getExecution: (id) => {
    return get().executions.find((e) => e.id === id)
  },

  deleteExecution: async (id) => {
    try {
      const response = await fetch(`/api/executions/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete execution")
      }

      set((state) => ({
        executions: state.executions.filter((e) => e.id !== id),
        currentExecution: state.currentExecution?.id === id ? null : state.currentExecution,
      }))
    } catch (error) {
      console.error("[executions-store] deleteExecution error:", error)
    }
  },

  startPolling: () => {
    const existing = get().pollingInterval
    if (existing) return

    const interval = setInterval(() => {
      const hasRunning = get().executions.some((e) => 
        e.status === "running" || e.status === "queued"
      )
      
      if (hasRunning) {
        get().fetchExecutions()
      }
    }, 3000)

    set({ pollingInterval: interval })
  },

  stopPolling: () => {
    const interval = get().pollingInterval
    if (interval) {
      clearInterval(interval)
      set({ pollingInterval: null })
    }
  },

  getStats: () => {
    const executions = get().executions
    const total = executions.length
    const success = executions.filter((e) => e.status === "success").length
    const failed = executions.filter((e) => e.status === "failed").length
    const running = executions.filter((e) => e.status === "running" || e.status === "queued").length
    const successRate = total > 0 ? Math.round((success / total) * 100) : 0

    return { total, success, failed, running, successRate }
  },
}))
