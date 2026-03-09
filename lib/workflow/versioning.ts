import type { Edge } from "@xyflow/react"
import type { WorkflowNode } from "@/stores/workflow-store"

export type WorkflowStatus = "draft" | "published" | "archived"

export interface WorkflowVersion {
  id: string
  workflowId: string
  version: number
  status: WorkflowStatus
  nodes: WorkflowNode[]
  edges: Edge[]
  metadata: WorkflowMetadata
  createdAt: Date
  createdBy: string
  changelog?: string
}

export interface WorkflowMetadata {
  name: string
  description?: string
  tags?: string[]
  trigger: TriggerConfig
  variables?: WorkflowVariable[]
  settings?: WorkflowSettings
}

export interface TriggerConfig {
  type: "manual" | "schedule" | "webhook" | "api"
  config?: Record<string, unknown>
}

export interface WorkflowVariable {
  name: string
  type: "string" | "number" | "boolean" | "object" | "array"
  defaultValue?: unknown
  description?: string
}

export interface WorkflowSettings {
  timeout?: number // Max execution time in ms
  retryPolicy?: RetryPolicy
  concurrency?: number // Max concurrent executions
  logging?: LoggingLevel
}

export interface RetryPolicy {
  maxRetries: number
  retryDelay: number // ms
  backoffMultiplier?: number
}

export type LoggingLevel = "none" | "minimal" | "standard" | "verbose"

export interface WorkflowDiff {
  addedNodes: WorkflowNode[]
  removedNodes: WorkflowNode[]
  modifiedNodes: { old: WorkflowNode; new: WorkflowNode }[]
  addedEdges: Edge[]
  removedEdges: Edge[]
  metadataChanges: Partial<WorkflowMetadata>
}

/**
 * Generate a new version number
 */
export function generateNextVersion(currentVersion: number): number {
  return currentVersion + 1
}

/**
 * Create a new workflow version snapshot
 */
export function createVersionSnapshot(
  workflowId: string,
  version: number,
  nodes: WorkflowNode[],
  edges: Edge[],
  metadata: WorkflowMetadata,
  userId: string,
  changelog?: string
): WorkflowVersion {
  return {
    id: `wv_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    workflowId,
    version,
    status: "draft",
    nodes: JSON.parse(JSON.stringify(nodes)), // Deep clone
    edges: JSON.parse(JSON.stringify(edges)),
    metadata: JSON.parse(JSON.stringify(metadata)),
    createdAt: new Date(),
    createdBy: userId,
    changelog,
  }
}

/**
 * Compare two workflow versions and return the diff
 */
export function compareVersions(
  oldVersion: WorkflowVersion,
  newVersion: WorkflowVersion
): WorkflowDiff {
  const oldNodeIds = new Set(oldVersion.nodes.map((n) => n.id))
  const newNodeIds = new Set(newVersion.nodes.map((n) => n.id))

  const addedNodes = newVersion.nodes.filter((n) => !oldNodeIds.has(n.id))
  const removedNodes = oldVersion.nodes.filter((n) => !newNodeIds.has(n.id))

  const modifiedNodes: { old: WorkflowNode; new: WorkflowNode }[] = []
  newVersion.nodes.forEach((newNode) => {
    if (oldNodeIds.has(newNode.id)) {
      const oldNode = oldVersion.nodes.find((n) => n.id === newNode.id)!
      if (JSON.stringify(oldNode) !== JSON.stringify(newNode)) {
        modifiedNodes.push({ old: oldNode, new: newNode })
      }
    }
  })

  const oldEdgeIds = new Set(oldVersion.edges.map((e) => e.id))
  const newEdgeIds = new Set(newVersion.edges.map((e) => e.id))

  const addedEdges = newVersion.edges.filter((e) => !oldEdgeIds.has(e.id))
  const removedEdges = oldVersion.edges.filter((e) => !newEdgeIds.has(e.id))

  // Compare metadata
  const metadataChanges: Partial<WorkflowMetadata> = {}
  if (oldVersion.metadata.name !== newVersion.metadata.name) {
    metadataChanges.name = newVersion.metadata.name
  }
  if (oldVersion.metadata.description !== newVersion.metadata.description) {
    metadataChanges.description = newVersion.metadata.description
  }
  // Add more metadata comparisons as needed

  return {
    addedNodes,
    removedNodes,
    modifiedNodes,
    addedEdges,
    removedEdges,
    metadataChanges,
  }
}

/**
 * Check if workflow has unsaved changes compared to last version
 */
export function hasUnsavedChanges(
  currentNodes: WorkflowNode[],
  currentEdges: Edge[],
  lastSavedVersion: WorkflowVersion | null
): boolean {
  if (!lastSavedVersion) {
    return currentNodes.length > 0 || currentEdges.length > 0
  }

  const currentNodesStr = JSON.stringify(
    currentNodes.map((n) => ({ id: n.id, type: n.type, data: n.data, position: n.position }))
  )
  const savedNodesStr = JSON.stringify(
    lastSavedVersion.nodes.map((n) => ({ id: n.id, type: n.type, data: n.data, position: n.position }))
  )

  const currentEdgesStr = JSON.stringify(
    currentEdges.map((e) => ({ id: e.id, source: e.source, target: e.target }))
  )
  const savedEdgesStr = JSON.stringify(
    lastSavedVersion.edges.map((e) => ({ id: e.id, source: e.source, target: e.target }))
  )

  return currentNodesStr !== savedNodesStr || currentEdgesStr !== savedEdgesStr
}

/**
 * Serialize workflow for storage
 */
export function serializeWorkflow(
  nodes: WorkflowNode[],
  edges: Edge[],
  metadata: WorkflowMetadata
): string {
  return JSON.stringify({
    nodes,
    edges,
    metadata,
    serializedAt: new Date().toISOString(),
    schemaVersion: "1.0",
  })
}

/**
 * Deserialize workflow from storage
 */
export function deserializeWorkflow(data: string): {
  nodes: WorkflowNode[]
  edges: Edge[]
  metadata: WorkflowMetadata
} | null {
  try {
    const parsed = JSON.parse(data)
    return {
      nodes: parsed.nodes || [],
      edges: parsed.edges || [],
      metadata: parsed.metadata || { name: "Untitled", trigger: { type: "manual" } },
    }
  } catch {
    console.error("Failed to deserialize workflow")
    return null
  }
}

/**
 * Generate a unique workflow ID
 */
export function generateWorkflowId(): string {
  return `wf_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

/**
 * Format version for display
 */
export function formatVersion(version: number): string {
  return `v${version}`
}

/**
 * Get status badge color
 */
export function getStatusColor(status: WorkflowStatus): string {
  switch (status) {
    case "draft":
      return "text-yellow-500"
    case "published":
      return "text-green-500"
    case "archived":
      return "text-muted-foreground"
  }
}
