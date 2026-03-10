import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Node, Edge } from "@xyflow/react"

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

export interface ExecutionData {
  id: string
  workflowId: string
  workflowName: string
  status: ExecutionStatus
  triggerType: TriggerType
  steps: ExecutionStep[]
  logs: ExecutionLog[]
  startedAt?: string
  finishedAt?: string
  errorMessage?: string
  createdAt: string
}

interface ExecutionsState {
  executions: ExecutionData[]
  currentExecution: ExecutionData | null
  isLoading: boolean

  // Actions
  fetchExecutions: () => Promise<void>
  getExecution: (id: string) => ExecutionData | undefined
  
  // Execution operations
  startExecution: (
    workflowId: string,
    workflowName: string,
    graph: { nodes: Node[]; edges: Edge[] },
    triggerType?: TriggerType
  ) => Promise<ExecutionData>
  simulateExecution: (
    executionId: string,
    graph: { nodes: Node[]; edges: Edge[] }
  ) => Promise<void>
  updateExecutionStatus: (id: string, status: ExecutionStatus, errorMessage?: string) => void
  updateStepStatus: (
    executionId: string,
    nodeId: string,
    status: ExecutionStatus,
    output?: Record<string, unknown>,
    errorMessage?: string
  ) => void
  addLog: (executionId: string, log: Omit<ExecutionLog, "timestamp">) => void
  cancelExecution: (id: string) => void
  deleteExecution: (id: string) => void
  
  // Stats
  getStats: () => {
    total: number
    success: number
    failed: number
    running: number
    successRate: number
  }
}

export const useExecutionsStore = create<ExecutionsState>()(
  persist(
    (set, get) => ({
      executions: [],
      currentExecution: null,
      isLoading: false,

      fetchExecutions: async () => {
        set({ isLoading: true })
        await new Promise((resolve) => setTimeout(resolve, 300))
        set({ isLoading: false })
      },

      getExecution: (id) => {
        return get().executions.find((e) => e.id === id)
      },

      startExecution: async (workflowId, workflowName, graph, triggerType = "manual") => {
        const executionId = `exec_${Date.now()}`
        
        // Create steps from nodes
        const steps: ExecutionStep[] = graph.nodes.map((node) => ({
          id: `step_${node.id}_${Date.now()}`,
          nodeId: node.id,
          nodeType: node.data?.type as string || node.type || "unknown",
          nodeLabel: node.data?.label as string || node.id,
          status: "queued" as ExecutionStatus,
        }))

        const execution: ExecutionData = {
          id: executionId,
          workflowId,
          workflowName,
          status: "running",
          triggerType,
          steps,
          logs: [
            {
              timestamp: new Date().toISOString(),
              level: "info",
              message: `开始执行工作流: ${workflowName}`,
            },
          ],
          startedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        }

        set((state) => ({
          executions: [execution, ...state.executions],
          currentExecution: execution,
        }))

        // Simulate execution of each step
        setTimeout(() => {
          get().simulateExecution(executionId, graph)
        }, 500)

        return execution
      },

      // Internal method to simulate execution
      simulateExecution: async (executionId: string, graph: { nodes: Node[]; edges: Edge[] }) => {
        const execution = get().executions.find((e) => e.id === executionId)
        if (!execution || execution.status === "cancelled") return

        const { nodes } = graph
        
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          const currentExec = get().executions.find((e) => e.id === executionId)
          if (!currentExec || currentExec.status === "cancelled") break

          // Update step to running
          get().updateStepStatus(executionId, node.id, "running")
          get().addLog(executionId, {
            level: "info",
            message: `正在执行节点: ${node.data?.label || node.id}`,
            nodeId: node.id,
          })

          // Simulate step execution time
          await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 1200))

          // Random failure (10% chance) for demo
          const shouldFail = Math.random() < 0.1

          if (shouldFail) {
            get().updateStepStatus(
              executionId,
              node.id,
              "failed",
              undefined,
              "模拟执行失败: 网络超时"
            )
            get().addLog(executionId, {
              level: "error",
              message: `节点执行失败: ${node.data?.label || node.id}`,
              nodeId: node.id,
            })
            get().updateExecutionStatus(executionId, "failed", "节点执行失败")
            return
          }

          // Step succeeded
          get().updateStepStatus(executionId, node.id, "success", {
            result: `节点 ${node.data?.label} 执行成功`,
            timestamp: new Date().toISOString(),
          })
          get().addLog(executionId, {
            level: "info",
            message: `节点执行成功: ${node.data?.label || node.id}`,
            nodeId: node.id,
          })
        }

        // All steps completed
        get().updateExecutionStatus(executionId, "success")
        get().addLog(executionId, {
          level: "info",
          message: "工作流执行完成",
        })
      },

      updateExecutionStatus: (id, status, errorMessage) => {
        set((state) => ({
          executions: state.executions.map((e) =>
            e.id === id
              ? {
                  ...e,
                  status,
                  errorMessage,
                  finishedAt: ["success", "failed", "cancelled"].includes(status)
                    ? new Date().toISOString()
                    : e.finishedAt,
                }
              : e
          ),
          currentExecution:
            state.currentExecution?.id === id
              ? {
                  ...state.currentExecution,
                  status,
                  errorMessage,
                  finishedAt: ["success", "failed", "cancelled"].includes(status)
                    ? new Date().toISOString()
                    : state.currentExecution.finishedAt,
                }
              : state.currentExecution,
        }))
      },

      updateStepStatus: (executionId, nodeId, status, output, errorMessage) => {
        set((state) => ({
          executions: state.executions.map((e) =>
            e.id === executionId
              ? {
                  ...e,
                  steps: e.steps.map((s) =>
                    s.nodeId === nodeId
                      ? {
                          ...s,
                          status,
                          output,
                          errorMessage,
                          startedAt: status === "running" ? new Date().toISOString() : s.startedAt,
                          finishedAt: ["success", "failed"].includes(status)
                            ? new Date().toISOString()
                            : s.finishedAt,
                        }
                      : s
                  ),
                }
              : e
          ),
        }))
      },

      addLog: (executionId, log) => {
        const logEntry: ExecutionLog = {
          ...log,
          timestamp: new Date().toISOString(),
        }
        set((state) => ({
          executions: state.executions.map((e) =>
            e.id === executionId
              ? { ...e, logs: [...e.logs, logEntry] }
              : e
          ),
        }))
      },

      cancelExecution: (id) => {
        get().updateExecutionStatus(id, "cancelled")
        get().addLog(id, {
          level: "warn",
          message: "执行已被用户取消",
        })
      },

      deleteExecution: (id) => {
        set((state) => ({
          executions: state.executions.filter((e) => e.id !== id),
          currentExecution: state.currentExecution?.id === id ? null : state.currentExecution,
        }))
      },

      getStats: () => {
        const executions = get().executions
        const total = executions.length
        const success = executions.filter((e) => e.status === "success").length
        const failed = executions.filter((e) => e.status === "failed").length
        const running = executions.filter((e) => e.status === "running").length
        const successRate = total > 0 ? Math.round((success / total) * 100) : 0

        return { total, success, failed, running, successRate }
      },
    }),
    {
      name: "flowmint-executions",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        executions: state.executions.slice(0, 100), // Keep last 100 executions
      }),
    }
  )
)


