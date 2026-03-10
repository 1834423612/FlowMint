import { create } from "zustand"
import type { Node, Edge } from "@xyflow/react"
import { useAuthStore } from "./auth-store"

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
  versions: Map<string, WorkflowVersion[]>
  isLoading: boolean
  error: string | null

  // Actions
  fetchWorkflows: () => Promise<void>
  createWorkflow: (data: { name: string; description?: string }) => Promise<WorkflowData | null>
  updateWorkflow: (id: string, data: Partial<{ name: string; status: WorkflowStatus }>) => Promise<void>
  deleteWorkflow: (id: string) => Promise<void>
  getWorkflow: (id: string) => WorkflowData | undefined
  fetchWorkflowDetail: (id: string) => Promise<WorkflowData | null>
  
  // Graph operations
  saveWorkflowGraph: (id: string, graph: WorkflowGraph, changelog?: string) => Promise<void>
  
  // Status operations
  setWorkflowStatus: (id: string, status: WorkflowStatus) => Promise<void>
  
  // Version operations
  getVersions: (workflowId: string) => WorkflowVersion[]
  
  // Run workflow
  runWorkflow: (id: string, graph?: WorkflowGraph) => Promise<{ runId: string } | null>
}

function generateSlug(name: string): string {
  return `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now()}`
}

function parseGraph(raw: unknown): WorkflowGraph {
  if (!raw || typeof raw !== "object") {
    return { nodes: [], edges: [] }
  }
  const g = raw as { nodes?: unknown[]; edges?: unknown[] }
  return {
    nodes: (g.nodes || []) as Node[],
    edges: (g.edges || []) as Edge[],
  }
}

function mapWorkflowFromApi(w: Record<string, unknown>): WorkflowData {
  const versions = w.versions as Array<{ graph?: unknown }> | undefined
  const latestGraph = versions?.[0]?.graph ? parseGraph(versions[0].graph) : { nodes: [], edges: [] }
  
  return {
    id: String(w.id),
    name: String(w.name || ""),
    slug: String(w.slug || ""),
    status: (w.status as WorkflowStatus) || "draft",
    nodeCount: latestGraph.nodes.length,
    graph: latestGraph,
    latestVersionNo: Number(w.latestVersionNo) || 1,
    createdAt: String(w.createdAt || new Date().toISOString()),
    updatedAt: String(w.updatedAt || new Date().toISOString()),
  }
}

export const useWorkflowsStore = create<WorkflowsState>()((set, get) => ({
  workflows: [],
  versions: new Map(),
  isLoading: false,
  error: null,

  fetchWorkflows: async () => {
    set({ isLoading: true, error: null })

    try {
      const response = await fetch("/api/workflows")
      
      if (!response.ok) {
        throw new Error("Failed to fetch workflows")
      }

      const data = await response.json()
      const workflows = (data.data || []).map(mapWorkflowFromApi)

      set({ workflows, isLoading: false })
    } catch (error) {
      console.error("[workflows-store] fetchWorkflows error:", error)
      set({ 
        error: error instanceof Error ? error.message : "Failed to fetch workflows",
        isLoading: false 
      })
    }
  },

  createWorkflow: async (data) => {
    const user = useAuthStore.getState().user
    if (!user) return null

    try {
      const slug = generateSlug(data.name)
      const response = await fetch("/api/workflows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ownerUserId: user.id,
          name: data.name,
          slug,
          graph: { nodes: [], edges: [] },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create workflow")
      }

      const result = await response.json()
      const newWorkflow = mapWorkflowFromApi(result.data)

      set((state) => ({
        workflows: [newWorkflow, ...state.workflows],
      }))

      return newWorkflow
    } catch (error) {
      console.error("[workflows-store] createWorkflow error:", error)
      return null
    }
  },

  updateWorkflow: async (id, data) => {
    try {
      const response = await fetch(`/api/workflows/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to update workflow")
      }

      const result = await response.json()
      const updated = mapWorkflowFromApi(result.data)

      set((state) => ({
        workflows: state.workflows.map((w) => (w.id === id ? { ...w, ...updated } : w)),
      }))
    } catch (error) {
      console.error("[workflows-store] updateWorkflow error:", error)
    }
  },

  deleteWorkflow: async (id) => {
    try {
      const response = await fetch(`/api/workflows/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete workflow")
      }

      set((state) => ({
        workflows: state.workflows.filter((w) => w.id !== id),
      }))
    } catch (error) {
      console.error("[workflows-store] deleteWorkflow error:", error)
    }
  },

  getWorkflow: (id) => {
    return get().workflows.find((w) => w.id === id)
  },

  fetchWorkflowDetail: async (id) => {
    try {
      const response = await fetch(`/api/workflows/${id}`)
      
      if (!response.ok) {
        throw new Error("Failed to fetch workflow")
      }

      const data = await response.json()
      const workflow = mapWorkflowFromApi(data.data)

      // Update in store
      set((state) => ({
        workflows: state.workflows.some((w) => w.id === id)
          ? state.workflows.map((w) => (w.id === id ? workflow : w))
          : [...state.workflows, workflow],
      }))

      return workflow
    } catch (error) {
      console.error("[workflows-store] fetchWorkflowDetail error:", error)
      return null
    }
  },

  saveWorkflowGraph: async (id, graph, changelog) => {
    const user = useAuthStore.getState().user

    try {
      const response = await fetch(`/api/workflows/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          graph,
          changelog,
          createdBy: user?.id,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save workflow")
      }

      const result = await response.json()
      const updated = mapWorkflowFromApi(result.data)

      set((state) => ({
        workflows: state.workflows.map((w) =>
          w.id === id
            ? {
                ...w,
                ...updated,
                graph,
                nodeCount: graph.nodes.length,
              }
            : w
        ),
      }))
    } catch (error) {
      console.error("[workflows-store] saveWorkflowGraph error:", error)
      throw error
    }
  },

  setWorkflowStatus: async (id, status) => {
    try {
      const response = await fetch(`/api/workflows/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error("Failed to update workflow status")
      }

      set((state) => ({
        workflows: state.workflows.map((w) =>
          w.id === id ? { ...w, status, updatedAt: new Date().toISOString() } : w
        ),
      }))
    } catch (error) {
      console.error("[workflows-store] setWorkflowStatus error:", error)
    }
  },

  getVersions: (workflowId) => {
    return get().versions.get(workflowId) || []
  },

  runWorkflow: async (id, graph) => {
    const user = useAuthStore.getState().user

    try {
      const body: Record<string, unknown> = {
        triggerType: "manual",
        engine: "playwright",
      }
      
      if (user) {
        body.createdBy = user.id
      }
      
      if (graph) {
        body.graph = graph
      }

      const response = await fetch(`/api/workflows/${id}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        throw new Error("Failed to run workflow")
      }

      const result = await response.json()
      const runId = String(result.data?.id || "")

      // Update last run time
      set((state) => ({
        workflows: state.workflows.map((w) =>
          w.id === id ? { ...w, lastRunAt: new Date().toISOString() } : w
        ),
      }))

      return { runId }
    } catch (error) {
      console.error("[workflows-store] runWorkflow error:", error)
      return null
    }
  },
}))
