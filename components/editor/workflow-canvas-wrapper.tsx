"use client"

import { useCallback, useRef, useMemo, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useReactFlow,
  type NodeTypes,
  type Node,
  type Edge,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { useWorkflowStore, type WorkflowNode } from "@/stores/workflow-store"
import { useWorkflowsStore } from "@/stores/workflows-store"
import { CustomNode } from "./custom-node"
import { NodeLibrary } from "./node-library"
import { NodeInspector } from "./node-inspector"
import { EditorToolbar } from "./editor-toolbar"
import { getNodeDefinition } from "@/types/workflow"

const nodeTypes: NodeTypes = {
  custom: CustomNode,
}

let nodeIdCounter = Date.now()
const getNodeId = () => `node_${++nodeIdCounter}`

interface WorkflowCanvasWrapperProps {
  workflowId: string
  workflowName: string
  initialGraph: {
    nodes: Node[]
    edges: Edge[]
  }
}

export function WorkflowCanvasWrapper({ 
  workflowId, 
  workflowName: initialWorkflowName, 
  initialGraph 
}: WorkflowCanvasWrapperProps) {
  const router = useRouter()
  const t = useTranslations("editor")
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const { screenToFlowPosition, zoomIn, zoomOut, fitView } = useReactFlow()
  
  const { saveWorkflowGraph, updateWorkflow, runWorkflow } = useWorkflowsStore()
  
  const [workflowName, setWorkflowName] = useState(initialWorkflowName)
  const [isSaving, setIsSaving] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const {
    nodes,
    edges,
    selectedNodeId,
    isDirty,
    validation,
    currentVersion,
    onNodesChange,
    onEdgesChange,
    onConnect,
    isValidConnection,
    addNode,
    setSelectedNodeId,
    validate,
    loadWorkflow,
    initializeWorkflow,
  } = useWorkflowStore()

  // Initialize the workflow store with the loaded data
  useEffect(() => {
    initializeWorkflow(workflowId)
    if (initialGraph.nodes.length > 0 || initialGraph.edges.length > 0) {
      loadWorkflow(
        initialGraph.nodes as WorkflowNode[],
        initialGraph.edges,
        { name: initialWorkflowName, trigger: { type: "manual" } }
      )
    }
  }, [workflowId, initialWorkflowName, initialGraph, initializeWorkflow, loadWorkflow])

  const selectedNode = useMemo(
    () => nodes.find((n) => n.id === selectedNodeId) || null,
    [nodes, selectedNodeId]
  )

  const onDragStart = useCallback(
    (event: React.DragEvent, nodeType: string, label: string) => {
      event.dataTransfer.setData("application/reactflow/type", nodeType)
      event.dataTransfer.setData("application/reactflow/label", label)
      event.dataTransfer.effectAllowed = "move"
    },
    []
  )

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const type = event.dataTransfer.getData("application/reactflow/type")
      const label = event.dataTransfer.getData("application/reactflow/label")

      if (!type || !reactFlowWrapper.current) {
        return
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const newNode: WorkflowNode = {
        id: getNodeId(),
        type: "custom",
        position,
        data: {
          label,
          type,
          config: {},
        },
      }

      addNode(newNode)
    },
    [screenToFlowPosition, addNode]
  )

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: WorkflowNode) => {
      setSelectedNodeId(node.id)
    },
    [setSelectedNodeId]
  )

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null)
  }, [setSelectedNodeId])

  const handleSave = useCallback(async () => {
    setIsSaving(true)
    
    // Validate before saving
    const validationResult = validate()
    
    // Save to the workflows store
    await saveWorkflowGraph(
      workflowId, 
      { nodes, edges },
      validationResult.isValid ? "保存成功" : "保存（包含验证错误）"
    )
    
    // Update workflow name if changed
    if (workflowName !== initialWorkflowName) {
      updateWorkflow(workflowId, { name: workflowName })
    }
    
    setIsSaving(false)
  }, [workflowId, workflowName, initialWorkflowName, nodes, edges, validate, saveWorkflowGraph, updateWorkflow])

  const handleRun = useCallback(async () => {
    validate()
    
    if (nodes.length === 0) {
      alert(t("hasErrors"))
      return
    }
    
    setIsRunning(true)
    
    try {
      // Run workflow with current graph (API will auto-save as new version)
      const result = await runWorkflow(workflowId, { nodes, edges })
      
      if (result) {
        // Navigate to executions page
        router.push("/executions")
      }
    } catch (error) {
      console.error("Failed to run workflow:", error)
    } finally {
      setIsRunning(false)
    }
  }, [workflowId, nodes, edges, validate, runWorkflow, router, t])

  return (
    <div className="flex h-screen flex-col">
      <EditorToolbar
        workflowName={workflowName}
        onWorkflowNameChange={setWorkflowName}
        isDirty={isDirty}
        hasErrors={validation ? validation.errors.length > 0 : false}
        hasWarnings={validation ? validation.warnings.length > 0 : false}
        version={currentVersion}
        onSave={handleSave}
        onRun={handleRun}
        onZoomIn={() => zoomIn()}
        onZoomOut={() => zoomOut()}
        onFitView={() => fitView()}
        isSaving={isSaving}
        isRunning={isRunning}
      />

      <div className="flex flex-1 overflow-hidden">
        <NodeLibrary onDragStart={onDragStart} />

        <div ref={reactFlowWrapper} className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            isValidConnection={isValidConnection}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            fitView
            snapToGrid
            snapGrid={[16, 16]}
            defaultEdgeOptions={{
              type: "smoothstep",
              animated: true,
            }}
            proOptions={{ hideAttribution: true }}
            className="bg-background"
          >
            <Background gap={16} size={1} className="!bg-background" color="hsl(var(--border))" />
            <Controls className="!bg-card !border-border [&>button]:!bg-card [&>button]:!border-border [&>button]:!text-foreground [&>button:hover]:!bg-accent" />
            <MiniMap
              className="!bg-card !border-border"
              nodeColor={(node) => {
                const def = getNodeDefinition((node as WorkflowNode).data.type)
                return def?.color || "#888"
              }}
              maskColor="rgba(0, 0, 0, 0.8)"
            />
          </ReactFlow>
        </div>

        <NodeInspector node={selectedNode} />
      </div>
    </div>
  )
}
