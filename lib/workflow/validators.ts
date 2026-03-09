import type { Edge } from "@xyflow/react"
import type { WorkflowNode } from "@/stores/workflow-store"
import { getNodeDefinition, type NodeCategory } from "@/types/workflow"

export type ValidationSeverity = "error" | "warning"

export interface ValidationResult {
  isValid: boolean
  errors: ValidationMessage[]
  warnings: ValidationMessage[]
}

export interface ValidationMessage {
  code: string
  message: string
  messageKey: string // i18n key
  nodeId?: string
  edgeId?: string
  severity: ValidationSeverity
}

// Connection rules: which categories can connect to which
const connectionRules: Record<NodeCategory, NodeCategory[]> = {
  trigger: ["browser", "page", "data", "flow", "ai"],
  browser: ["browser", "page", "data", "flow", "ai"],
  page: ["browser", "page", "data", "flow", "ai"],
  data: ["browser", "page", "data", "flow", "ai"],
  flow: ["browser", "page", "data", "flow", "ai"],
  ai: ["browser", "page", "data", "flow", "ai"],
}

// Nodes that can only be at the start (no inputs)
const startOnlyNodes = ["manual_trigger", "schedule_trigger", "webhook_trigger"]

/**
 * Check if a connection between two nodes is valid
 */
export function isValidConnection(
  sourceNode: WorkflowNode,
  targetNode: WorkflowNode
): { valid: boolean; reason?: string; reasonKey?: string } {
  const sourceDef = getNodeDefinition(sourceNode.data.type)
  const targetDef = getNodeDefinition(targetNode.data.type)

  if (!sourceDef || !targetDef) {
    return { valid: false, reason: "Unknown node type", reasonKey: "validation.unknownNodeType" }
  }

  // Check if source can have outputs
  if (sourceDef.outputs === 0) {
    return { valid: false, reason: "Source node has no outputs", reasonKey: "validation.noOutputs" }
  }

  // Check if target can have inputs
  if (targetDef.inputs === 0) {
    return { valid: false, reason: "Target node has no inputs", reasonKey: "validation.noInputs" }
  }

  // Trigger nodes cannot be targets
  if (startOnlyNodes.includes(targetNode.data.type)) {
    return { valid: false, reason: "Trigger nodes cannot receive connections", reasonKey: "validation.triggerNoInput" }
  }

  // Check category connection rules
  const allowedTargets = connectionRules[sourceDef.category]
  if (!allowedTargets.includes(targetDef.category)) {
    return {
      valid: false,
      reason: `Cannot connect ${sourceDef.category} to ${targetDef.category}`,
      reasonKey: "validation.invalidCategoryConnection",
    }
  }

  // No self-connections
  if (sourceNode.id === targetNode.id) {
    return { valid: false, reason: "Cannot connect node to itself", reasonKey: "validation.selfConnection" }
  }

  return { valid: true }
}

/**
 * Validate entire workflow graph
 */
export function validateWorkflow(nodes: WorkflowNode[], edges: Edge[]): ValidationResult {
  const errors: ValidationMessage[] = []
  const warnings: ValidationMessage[] = []

  // Check for empty workflow
  if (nodes.length === 0) {
    warnings.push({
      code: "EMPTY_WORKFLOW",
      message: "Workflow has no nodes",
      messageKey: "validation.emptyWorkflow",
      severity: "warning",
    })
    return { isValid: true, errors, warnings }
  }

  // Check for trigger node
  const triggerNodes = nodes.filter((n) => startOnlyNodes.includes(n.data.type))
  if (triggerNodes.length === 0) {
    errors.push({
      code: "NO_TRIGGER",
      message: "Workflow must have at least one trigger node",
      messageKey: "validation.noTrigger",
      severity: "error",
    })
  } else if (triggerNodes.length > 1) {
    warnings.push({
      code: "MULTIPLE_TRIGGERS",
      message: "Workflow has multiple trigger nodes",
      messageKey: "validation.multipleTriggers",
      severity: "warning",
    })
  }

  // Check for orphan nodes (no connections)
  const connectedNodeIds = new Set<string>()
  edges.forEach((edge) => {
    connectedNodeIds.add(edge.source)
    connectedNodeIds.add(edge.target)
  })

  nodes.forEach((node) => {
    // Trigger nodes don't need incoming connections
    if (startOnlyNodes.includes(node.data.type)) {
      if (!edges.some((e) => e.source === node.id)) {
        warnings.push({
          code: "ORPHAN_TRIGGER",
          message: `Trigger node "${node.data.label}" has no outgoing connections`,
          messageKey: "validation.orphanTrigger",
          nodeId: node.id,
          severity: "warning",
        })
      }
    } else if (!connectedNodeIds.has(node.id)) {
      warnings.push({
        code: "ORPHAN_NODE",
        message: `Node "${node.data.label}" is not connected`,
        messageKey: "validation.orphanNode",
        nodeId: node.id,
        severity: "warning",
      })
    }
  })

  // Check for cycles (simple DFS)
  const hasCycle = detectCycle(nodes, edges)
  if (hasCycle) {
    errors.push({
      code: "CYCLE_DETECTED",
      message: "Workflow contains a cycle which may cause infinite loops",
      messageKey: "validation.cycleDetected",
      severity: "error",
    })
  }

  // Validate required node configurations
  nodes.forEach((node) => {
    const configValidation = validateNodeConfig(node)
    if (!configValidation.isValid) {
      errors.push(...configValidation.errors)
    }
    warnings.push(...configValidation.warnings)
  })

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Detect cycles in the workflow graph using DFS
 */
function detectCycle(nodes: WorkflowNode[], edges: Edge[]): boolean {
  const adjacencyList = new Map<string, string[]>()
  nodes.forEach((node) => adjacencyList.set(node.id, []))
  edges.forEach((edge) => {
    const targets = adjacencyList.get(edge.source)
    if (targets) targets.push(edge.target)
  })

  const visited = new Set<string>()
  const recursionStack = new Set<string>()

  function dfs(nodeId: string): boolean {
    visited.add(nodeId)
    recursionStack.add(nodeId)

    const neighbors = adjacencyList.get(nodeId) || []
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true
      } else if (recursionStack.has(neighbor)) {
        return true
      }
    }

    recursionStack.delete(nodeId)
    return false
  }

  for (const node of nodes) {
    if (!visited.has(node.id)) {
      if (dfs(node.id)) return true
    }
  }

  return false
}

/**
 * Validate node configuration based on node type
 */
function validateNodeConfig(node: WorkflowNode): ValidationResult {
  const errors: ValidationMessage[] = []
  const warnings: ValidationMessage[] = []
  const config = node.data.config || {}

  const hasText = (value: unknown) => typeof value === "string" && value.trim().length > 0
  const getNumber = (value: unknown) => (typeof value === "number" ? value : Number.NaN)

  // Type-specific validations
  switch (node.data.type) {
    case "navigate":
      if (!hasText(config.url)) {
        errors.push({
          code: "MISSING_URL",
          message: `Navigate node "${node.data.label}" requires a URL`,
          messageKey: "validation.missingUrl",
          nodeId: node.id,
          severity: "error",
        })
      }
      break

    case "click":
    case "type":
      if (!hasText(config.selector)) {
        warnings.push({
          code: "MISSING_SELECTOR",
          message: `Node "${node.data.label}" has no selector configured`,
          messageKey: "validation.missingSelector",
          nodeId: node.id,
          severity: "warning",
        })
      }

      if (node.data.type === "type" && !hasText(config.text) && !hasText(config.variable)) {
        warnings.push({
          code: "MISSING_TEXT",
          message: `Type node "${node.data.label}" has no text or variable configured`,
          messageKey: "validation.missingText",
          nodeId: node.id,
          severity: "warning",
        })
      }
      break

    case "llm_chat":
      if (!hasText(config.prompt) && !hasText(config.promptVariable)) {
        warnings.push({
          code: "MISSING_PROMPT",
          message: `LLM Chat node "${node.data.label}" has no prompt configured`,
          messageKey: "validation.missingPrompt",
          nodeId: node.id,
          severity: "warning",
        })
      }
      break

    case "condition":
      if (!hasText(config.condition)) {
        errors.push({
          code: "MISSING_CONDITION",
          message: `Condition node "${node.data.label}" requires a condition expression`,
          messageKey: "validation.missingCondition",
          nodeId: node.id,
          severity: "error",
        })
      }
      break

    case "delay":
      if (getNumber(config.duration) <= 0) {
        warnings.push({
          code: "INVALID_DELAY",
          message: `Delay node "${node.data.label}" has invalid duration`,
          messageKey: "validation.invalidDelay",
          nodeId: node.id,
          severity: "warning",
        })
      }
      break

    case "http_request":
      if (!hasText(config.url)) {
        errors.push({
          code: "MISSING_URL",
          message: `HTTP Request node "${node.data.label}" requires a URL`,
          messageKey: "validation.missingUrl",
          nodeId: node.id,
          severity: "error",
        })
      }
      break
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}
