"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WorkflowCard } from "@/components/workflows/workflow-card"
import { EmptyState } from "@/components/ui/empty-state"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useWorkflowsStore } from "@/stores/workflows-store"
import { useExecutionsStore } from "@/stores/executions-store"

export default function WorkflowsPage() {
  const t = useTranslations("workflows")
  const tCommon = useTranslations("common")
  const router = useRouter()
  
  const { 
    workflows, 
    isLoading, 
    fetchWorkflows, 
    createWorkflow, 
    deleteWorkflow,
    setWorkflowStatus 
  } = useWorkflowsStore()
  
  const { startExecution } = useExecutionsStore()
  
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newWorkflowName, setNewWorkflowName] = useState("")
  const [newWorkflowDescription, setNewWorkflowDescription] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    fetchWorkflows()
  }, [fetchWorkflows])

  const filteredWorkflows = workflows.filter((workflow) =>
    workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workflow.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateWorkflow = async () => {
    if (!newWorkflowName.trim()) return
    
    setIsCreating(true)
    const workflow = await createWorkflow({
      name: newWorkflowName,
      description: newWorkflowDescription || undefined,
    })
    setIsCreating(false)
    setIsCreateDialogOpen(false)
    setNewWorkflowName("")
    setNewWorkflowDescription("")
    
    // Navigate to the new workflow editor
    router.push(`/workflows/${workflow.id}`)
  }

  const handleRunWorkflow = async (id: string) => {
    const workflow = workflows.find((w) => w.id === id)
    if (!workflow || workflow.graph.nodes.length === 0) {
      return
    }
    
    // Start execution
    await startExecution(
      workflow.id,
      workflow.name,
      workflow.graph,
      "manual"
    )
    
    // Update last run time
    setWorkflowStatus(id, workflow.status)
    
    // Navigate to executions page
    router.push("/executions")
  }

  const handleDeleteWorkflow = (id: string) => {
    deleteWorkflow(id)
  }

  // Convert WorkflowData to the format expected by WorkflowCard
  const workflowsForCard = filteredWorkflows.map((w) => ({
    id: w.id,
    name: w.name,
    description: w.description,
    status: w.status,
    nodeCount: w.nodeCount,
    createdAt: w.createdAt,
    updatedAt: w.updatedAt,
    lastRun: w.lastRunAt ? formatRelativeTime(w.lastRunAt) : undefined,
  }))

  return (
    <div className="flex flex-col">
      <Header title={t("title")} />

      <div className="flex-1 space-y-6 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
            <p className="text-muted-foreground">{t("subtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Icon icon="lucide:upload" className="mr-2 h-4 w-4" />
              {t("import")}
            </Button>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
              {t("create")}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Icon
              icon="lucide:search"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder={t("search")}
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Icon icon="lucide:loader-2" className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : workflowsForCard.length === 0 ? (
          <EmptyState
            icon="lucide:git-branch"
            title={searchQuery ? tCommon("noData") : t("empty")}
            description={searchQuery ? undefined : t("emptyDescription")}
          >
            {!searchQuery && (
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
                {t("create")}
              </Button>
            )}
          </EmptyState>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflowsForCard.map((workflow) => (
              <WorkflowCard 
                key={workflow.id} 
                workflow={workflow} 
                onRun={handleRunWorkflow}
                onDelete={handleDeleteWorkflow}
              />
            ))}
          </div>
        )}
      </div>

      {/* Create Workflow Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("create")}</DialogTitle>
            <DialogDescription>
              {t("emptyDescription")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">{tCommon("name")}</Label>
              <Input
                id="name"
                placeholder={t("search").replace("...", "")}
                value={newWorkflowName}
                onChange={(e) => setNewWorkflowName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">{tCommon("description")}</Label>
              <Textarea
                id="description"
                placeholder={t("subtitle")}
                value={newWorkflowDescription}
                onChange={(e) => setNewWorkflowDescription(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              {tCommon("cancel")}
            </Button>
            <Button onClick={handleCreateWorkflow} disabled={!newWorkflowName.trim() || isCreating}>
              {isCreating ? (
                <>
                  <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
                  {tCommon("loading")}
                </>
              ) : (
                <>
                  <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
                  {tCommon("create")}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return "刚刚"
  if (diffMins < 60) return `${diffMins} 分钟前`
  if (diffHours < 24) return `${diffHours} 小时前`
  return `${diffDays} 天前`
}
