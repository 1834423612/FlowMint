import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Node, Edge } from "@xyflow/react"

export type WorkflowStatus = "draft" | "active" | "paused" | "archived"

export interface WorkflowGraph {
  nodes: Node[]
  edges: Edge[]
}

export interface WorkflowData {
  id: string
  name: string
  description?: string
  slug: string
  status: WorkflowStatus
  nodeCount: number
  graph: WorkflowGraph
  latestVersionNo: number
  createdAt: string
  updatedAt: string
  lastRunAt?: string
}

export interface WorkflowVersion {
  id: string
  workflowId: string
  versionNo: number
  graph: WorkflowGraph
  changelog?: string
  createdAt: string
}

interface WorkflowsState {
  workflows: WorkflowData[]
  versions: WorkflowVersion[]
  isLoading: boolean

  // Actions
  fetchWorkflows: () => Promise<void>
  createWorkflow: (data: { name: string; description?: string }) => Promise<WorkflowData>
  updateWorkflow: (id: string, data: Partial<WorkflowData>) => void
  deleteWorkflow: (id: string) => void
  getWorkflow: (id: string) => WorkflowData | undefined
  
  // Graph operations
  saveWorkflowGraph: (id: string, graph: WorkflowGraph, changelog?: string) => Promise<void>
  getWorkflowGraph: (id: string) => WorkflowGraph | undefined
  
  // Status operations
  setWorkflowStatus: (id: string, status: WorkflowStatus) => void
  
  // Version operations
  getVersions: (workflowId: string) => WorkflowVersion[]
  revertToVersion: (workflowId: string, versionNo: number) => void
}

function generateSlug(name: string): string {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now()}`
}

export const useWorkflowsStore = create<WorkflowsState>()(
  persist(
    (set, get) => ({
      workflows: [],
      versions: [],
      isLoading: false,

      fetchWorkflows: async () => {
        set({ isLoading: true })
        await new Promise((resolve) => setTimeout(resolve, 300))
        set({ isLoading: false })
      },

      createWorkflow: async (data) => {
        const newWorkflow: WorkflowData = {
          id: `wf_${Date.now()}`,
          name: data.name,
          description: data.description,
          slug: generateSlug(data.name),
          status: "draft",
          nodeCount: 0,
          graph: { nodes: [], edges: [] },
          latestVersionNo: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        // Create initial version
        const initialVersion: WorkflowVersion = {
          id: `ver_${Date.now()}`,
          workflowId: newWorkflow.id,
          versionNo: 1,
          graph: { nodes: [], edges: [] },
          changelog: "初始版本",
          createdAt: new Date().toISOString(),
        }

        set((state) => ({
          workflows: [newWorkflow, ...state.workflows],
          versions: [...state.versions, initialVersion],
        }))

        return newWorkflow
      },

      updateWorkflow: (id, data) => {
        set((state) => ({
          workflows: state.workflows.map((w) =>
            w.id === id
              ? {
                  ...w,
                  ...data,
                  updatedAt: new Date().toISOString(),
                }
              : w
          ),
        }))
      },

      deleteWorkflow: (id) => {
        set((state) => ({
          workflows: state.workflows.filter((w) => w.id !== id),
          versions: state.versions.filter((v) => v.workflowId !== id),
        }))
      },

      getWorkflow: (id) => {
        return get().workflows.find((w) => w.id === id)
      },

      saveWorkflowGraph: async (id, graph, changelog) => {
        const workflow = get().workflows.find((w) => w.id === id)
        if (!workflow) return

        const newVersionNo = workflow.latestVersionNo + 1
        const newVersion: WorkflowVersion = {
          id: `ver_${Date.now()}`,
          workflowId: id,
          versionNo: newVersionNo,
          graph,
          changelog,
          createdAt: new Date().toISOString(),
        }

        set((state) => ({
          workflows: state.workflows.map((w) =>
            w.id === id
              ? {
                  ...w,
                  graph,
                  nodeCount: graph.nodes.length,
                  latestVersionNo: newVersionNo,
                  updatedAt: new Date().toISOString(),
                }
              : w
          ),
          versions: [...state.versions, newVersion],
        }))
      },

      getWorkflowGraph: (id) => {
        const workflow = get().workflows.find((w) => w.id === id)
        return workflow?.graph
      },

      setWorkflowStatus: (id, status) => {
        set((state) => ({
          workflows: state.workflows.map((w) =>
            w.id === id
              ? {
                  ...w,
                  status,
                  updatedAt: new Date().toISOString(),
                }
              : w
          ),
        }))
      },

      getVersions: (workflowId) => {
        return get().versions
          .filter((v) => v.workflowId === workflowId)
          .sort((a, b) => b.versionNo - a.versionNo)
      },

      revertToVersion: (workflowId, versionNo) => {
        const version = get().versions.find(
          (v) => v.workflowId === workflowId && v.versionNo === versionNo
        )
        if (!version) return

        set((state) => ({
          workflows: state.workflows.map((w) =>
            w.id === workflowId
              ? {
                  ...w,
                  graph: JSON.parse(JSON.stringify(version.graph)),
                  nodeCount: version.graph.nodes.length,
                  updatedAt: new Date().toISOString(),
                }
              : w
          ),
        }))
      },
    }),
    {
      name: "flowmint-workflows",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        workflows: state.workflows,
        versions: state.versions,
      }),
    }
  )
)
