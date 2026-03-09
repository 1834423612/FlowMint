import { create } from "zustand"
import {
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react"

export interface WorkflowNode extends Node {
  data: {
    label: string
    type: string
    config?: Record<string, unknown>
  }
}

interface WorkflowState {
  nodes: WorkflowNode[]
  edges: Edge[]
  selectedNodeId: string | null
  
  onNodesChange: OnNodesChange<WorkflowNode>
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
  
  addNode: (node: WorkflowNode) => void
  updateNodeData: (nodeId: string, data: Partial<WorkflowNode["data"]>) => void
  deleteNode: (nodeId: string) => void
  
  setSelectedNodeId: (nodeId: string | null) => void
  
  clearWorkflow: () => void
  loadWorkflow: (nodes: WorkflowNode[], edges: Edge[]) => void
}

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes) as WorkflowNode[],
    })
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
        },
        get().edges
      ),
    })
  },

  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    })
  },

  updateNodeData: (nodeId, data) => {
    set({
      nodes: get().nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...data } }
          : node
      ),
    })
  },

  deleteNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
      selectedNodeId: get().selectedNodeId === nodeId ? null : get().selectedNodeId,
    })
  },

  setSelectedNodeId: (nodeId) => {
    set({ selectedNodeId: nodeId })
  },

  clearWorkflow: () => {
    set({ nodes: [], edges: [], selectedNodeId: null })
  },

  loadWorkflow: (nodes, edges) => {
    set({ nodes, edges, selectedNodeId: null })
  },
}))
