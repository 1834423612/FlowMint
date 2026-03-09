"use client"

import { useCallback, useRef, useMemo } from "react"
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useReactFlow,
  type NodeTypes,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { useWorkflowStore, type WorkflowNode } from "@/stores/workflow-store"
import { CustomNode } from "./custom-node"
import { NodeLibrary } from "./node-library"
import { NodeInspector } from "./node-inspector"
import { EditorToolbar } from "./editor-toolbar"
import { getNodeDefinition } from "@/types/workflow"

const nodeTypes: NodeTypes = {
  custom: CustomNode,
}

let nodeId = 0
const getNodeId = () => `node_${++nodeId}`

interface WorkflowCanvasProps {
  workflowName: string
}

export function WorkflowCanvas({ workflowName }: WorkflowCanvasProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const { screenToFlowPosition, zoomIn, zoomOut, fitView } = useReactFlow()

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
    saveVersion,
    validate,
  } = useWorkflowStore()

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

  const handleSave = useCallback(() => {
    const validationResult = validate()
    if (!validationResult.isValid) {
      console.warn("Workflow validation failed:", validationResult.errors)
      // Could show a toast notification here
    }
    const version = saveVersion("current-user", "Manual save")
    console.log("Saved workflow version:", version)
  }, [validate, saveVersion])

  const handleRun = useCallback(() => {
    const validationResult = validate()
    if (!validationResult.isValid) {
      console.error("Cannot run workflow with errors:", validationResult.errors)
      return
    }
    console.log("Running workflow with validation:", validationResult)
  }, [validate])

  return (
    <div className="flex h-screen flex-col">
      <EditorToolbar
        workflowName={workflowName}
        isDirty={isDirty}
        hasErrors={validation ? validation.errors.length > 0 : false}
        hasWarnings={validation ? validation.warnings.length > 0 : false}
        version={currentVersion}
        onSave={handleSave}
        onRun={handleRun}
        onZoomIn={() => zoomIn()}
        onZoomOut={() => zoomOut()}
        onFitView={() => fitView()}
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
