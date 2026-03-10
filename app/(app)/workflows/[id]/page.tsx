"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import { ReactFlowProvider } from "@xyflow/react"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { WorkflowCanvasWrapper } from "@/components/editor/workflow-canvas-wrapper"
import { useWorkflowsStore } from "@/stores/workflows-store"

interface WorkflowEditorPageProps {
  params: Promise<{ id: string }>
}

export default function WorkflowEditorPage({ params }: WorkflowEditorPageProps) {
  const { id } = use(params)
  const t = useTranslations("editor")
  const router = useRouter()
  
  const { workflows, getWorkflow, createWorkflow } = useWorkflowsStore()
  const [isLoading, setIsLoading] = useState(true)
  const [workflowData, setWorkflowData] = useState<{
    id: string
    name: string
    graph: { nodes: any[]; edges: any[] }
  } | null>(null)

  useEffect(() => {
    const loadWorkflow = async () => {
      setIsLoading(true)
      
      if (id === "new") {
        // Create a new workflow
        const newWorkflow = await createWorkflow({
          name: t("newWorkflowName"),
        })
        setWorkflowData({
          id: newWorkflow.id,
          name: newWorkflow.name,
          graph: newWorkflow.graph,
        })
        // Update URL to reflect the new ID
        router.replace(`/workflows/${newWorkflow.id}`)
      } else {
        // Load existing workflow
        const workflow = getWorkflow(id)
        if (workflow) {
          setWorkflowData({
            id: workflow.id,
            name: workflow.name,
            graph: workflow.graph,
          })
        } else {
          // Workflow not found, redirect to workflows list
          router.push("/workflows")
          return
        }
      }
      
      setIsLoading(false)
    }
    
    loadWorkflow()
  }, [id, getWorkflow, createWorkflow, router, t])

  if (isLoading || !workflowData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Icon icon="lucide:loader-2" className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <ReactFlowProvider>
      <WorkflowCanvasWrapper 
        workflowId={workflowData.id}
        workflowName={workflowData.name}
        initialGraph={workflowData.graph}
      />
    </ReactFlowProvider>
  )
}
