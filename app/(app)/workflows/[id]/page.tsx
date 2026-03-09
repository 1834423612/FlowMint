"use client"

import { ReactFlowProvider } from "@xyflow/react"
import { WorkflowCanvas } from "@/components/editor/workflow-canvas"

interface WorkflowEditorPageProps {
  params: Promise<{ id: string }>
}

export default async function WorkflowEditorPage({ params }: WorkflowEditorPageProps) {
  const { id } = await params
  
  const workflowName = id === "new" ? "New Workflow" : `Workflow ${id}`

  return (
    <ReactFlowProvider>
      <WorkflowCanvas workflowName={workflowName} />
    </ReactFlowProvider>
  )
}
