import { ReactFlowProvider } from "@xyflow/react"
import { getTranslations } from "next-intl/server"
import { WorkflowCanvas } from "@/components/editor/workflow-canvas"

interface WorkflowEditorPageProps {
  params: Promise<{ id: string }>
}

export default async function WorkflowEditorPage({ params }: WorkflowEditorPageProps) {
  const { id } = await params
  const t = await getTranslations("editor")

  const workflowName = id === "new" ? t("newWorkflowName") : `${t("workflowNamePrefix")} ${id}`

  return (
    <ReactFlowProvider>
      <WorkflowCanvas workflowName={workflowName} />
    </ReactFlowProvider>
  )
}
