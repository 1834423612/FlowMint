import { create } from "zustand"
import {
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type Connection,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react"
import { isValidConnection, validateWorkflow, type ValidationResult } from "@/lib/workflow/validators"
import {
  type WorkflowVersion,
  type WorkflowMetadata,
  type WorkflowStatus,
  createVersionSnapshot,
  hasUnsavedChanges,
  generateNextVersion,
} from "@/lib/workflow/versioning"

export interface WorkflowNode extends Node {
  data: {
    label: string
    type: string
    config?: Record<string, unknown>
  }
}

interface WorkflowState {
  // Core state
  workflowId: string | null
  nodes: WorkflowNode[]
  edges: Edge[]
  selectedNodeId: string | null
  
  // Metadata
  metadata: WorkflowMetadata
  
  // Versioning
  currentVersion: number
  status: WorkflowStatus
  versions: WorkflowVersion[]
  lastSavedVersion: WorkflowVersion | null
  isDirty: boolean
  
  // Validation
  validation: ValidationResult | null
  
  // Actions
  onNodesChange: OnNodesChange<WorkflowNode>
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
  isValidConnection: (connection: Connection) => boolean
  
  addNode: (node: WorkflowNode) => void
  updateNodeData: (nodeId: string, data: Partial<WorkflowNode["data"]>) => void
  deleteNode: (nodeId: string) => void
  
  setSelectedNodeId: (nodeId: string | null) => void
  
  // Metadata actions
  updateMetadata: (metadata: Partial<WorkflowMetadata>) => void
  
  // Versioning actions
  saveVersion: (userId: string, changelog?: string) => WorkflowVersion
  publishVersion: () => void
  revertToVersion: (versionId: string) => void
  
  // Validation actions
  validate: () => ValidationResult
  
  // Workflow actions
  clearWorkflow: () => void
  loadWorkflow: (nodes: WorkflowNode[], edges: Edge[], metadata?: WorkflowMetadata) => void
  initializeWorkflow: (workflowId: string) => void
}

const defaultMetadata: WorkflowMetadata = {
  name: "Untitled Workflow",
  trigger: { type: "manual" },
}

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  // Initial state
  workflowId: null,
  nodes: [],
  edges: [],
  selectedNodeId: null,
  metadata: { ...defaultMetadata },
  currentVersion: 0,
  status: "draft",
  versions: [],
  lastSavedVersion: null,
  isDirty: false,
  validation: null,

  onNodesChange: (changes) => {
    const newNodes = applyNodeChanges(changes, get().nodes) as WorkflowNode[]
    set({
      nodes: newNodes,
      isDirty: hasUnsavedChanges(newNodes, get().edges, get().lastSavedVersion),
    })
  },

  onEdgesChange: (changes) => {
    const newEdges = applyEdgeChanges(changes, get().edges)
    set({
      edges: newEdges,
      isDirty: hasUnsavedChanges(get().nodes, newEdges, get().lastSavedVersion),
    })
  },

  onConnect: (connection) => {
    // Validate connection before adding
    const { nodes } = get()
    const sourceNode = nodes.find((n) => n.id === connection.source)
    const targetNode = nodes.find((n) => n.id === connection.target)

    if (sourceNode && targetNode) {
      const validation = isValidConnection(sourceNode, targetNode)
      if (!validation.valid) {
        console.warn("Invalid connection:", validation.reason)
        return
      }
    }

    const newEdges = addEdge(
      {
        ...connection,
        id: `edge_${Date.now()}`,
        type: "smoothstep",
        animated: true,
      },
      get().edges
    )
    set({
      edges: newEdges,
      isDirty: hasUnsavedChanges(get().nodes, newEdges, get().lastSavedVersion),
    })
  },

  isValidConnection: (connection) => {
    const { nodes } = get()
    const sourceNode = nodes.find((n) => n.id === connection.source)
    const targetNode = nodes.find((n) => n.id === connection.target)

    if (!sourceNode || !targetNode) return false

    const validation = isValidConnection(sourceNode, targetNode)
    return validation.valid
  },

  addNode: (node) => {
    const newNodes = [...get().nodes, node]
    set({
      nodes: newNodes,
      isDirty: hasUnsavedChanges(newNodes, get().edges, get().lastSavedVersion),
    })
  },

  updateNodeData: (nodeId, data) => {
    const newNodes = get().nodes.map((node) =>
      node.id === nodeId
        ? { ...node, data: { ...node.data, ...data } }
        : node
    )
    set({
      nodes: newNodes,
      isDirty: hasUnsavedChanges(newNodes, get().edges, get().lastSavedVersion),
    })
  },

  deleteNode: (nodeId) => {
    const newNodes = get().nodes.filter((node) => node.id !== nodeId)
    const newEdges = get().edges.filter(
      (edge) => edge.source !== nodeId && edge.target !== nodeId
    )
    set({
      nodes: newNodes,
      edges: newEdges,
      selectedNodeId: get().selectedNodeId === nodeId ? null : get().selectedNodeId,
      isDirty: hasUnsavedChanges(newNodes, newEdges, get().lastSavedVersion),
    })
  },

  setSelectedNodeId: (nodeId) => {
    set({ selectedNodeId: nodeId })
  },

  updateMetadata: (metadata) => {
    set({
      metadata: { ...get().metadata, ...metadata },
      isDirty: true,
    })
  },

  saveVersion: (userId, changelog) => {
    const { workflowId, nodes, edges, metadata, currentVersion, versions } = get()
    const newVersion = generateNextVersion(currentVersion)

    const versionSnapshot = createVersionSnapshot(
      workflowId || `wf_${Date.now()}`,
      newVersion,
      nodes,
      edges,
      metadata,
      userId,
      changelog
    )

    set({
      currentVersion: newVersion,
      versions: [...versions, versionSnapshot],
      lastSavedVersion: versionSnapshot,
      isDirty: false,
    })

    return versionSnapshot
  },

  publishVersion: () => {
    const { lastSavedVersion } = get()
    if (lastSavedVersion) {
      set({
        status: "published",
        versions: get().versions.map((v) =>
          v.id === lastSavedVersion.id ? { ...v, status: "published" as const } : v
        ),
      })
    }
  },

  revertToVersion: (versionId) => {
    const version = get().versions.find((v) => v.id === versionId)
    if (version) {
      set({
        nodes: JSON.parse(JSON.stringify(version.nodes)),
        edges: JSON.parse(JSON.stringify(version.edges)),
        metadata: JSON.parse(JSON.stringify(version.metadata)),
        isDirty: true,
      })
    }
  },

  validate: () => {
    const { nodes, edges } = get()
    const result = validateWorkflow(nodes, edges)
    set({ validation: result })
    return result
  },

  clearWorkflow: () => {
    set({
      workflowId: null,
      nodes: [],
      edges: [],
      selectedNodeId: null,
      metadata: { ...defaultMetadata },
      currentVersion: 0,
      status: "draft",
      versions: [],
      lastSavedVersion: null,
      isDirty: false,
      validation: null,
    })
  },

  loadWorkflow: (nodes, edges, metadata) => {
    set({
      nodes,
      edges,
      selectedNodeId: null,
      metadata: metadata || { ...defaultMetadata },
      isDirty: false,
    })
  },

  initializeWorkflow: (workflowId) => {
    set({
      workflowId,
      nodes: [],
      edges: [],
      selectedNodeId: null,
      metadata: { ...defaultMetadata },
      currentVersion: 0,
      status: "draft",
      versions: [],
      lastSavedVersion: null,
      isDirty: false,
      validation: null,
    })
  },
}))
