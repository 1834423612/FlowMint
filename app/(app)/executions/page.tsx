"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Header } from "@/components/layout/header"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { EmptyState } from "@/components/ui/empty-state"
import { cn } from "@/lib/utils"
import { useExecutionsStore, type ExecutionStatus, type ExecutionData } from "@/stores/executions-store"

const statusConfig: Record<
  ExecutionStatus,
  { variant: "success" | "destructive" | "warning" | "secondary" | "outline"; icon: string }
> = {
  success: { variant: "success", icon: "lucide:check-circle" },
  failed: { variant: "destructive", icon: "lucide:x-circle" },
  running: { variant: "warning", icon: "lucide:loader-2" },
  queued: { variant: "secondary", icon: "lucide:clock" },
  cancelled: { variant: "outline", icon: "lucide:ban" },
}

export default function ExecutionsPage() {
  const t = useTranslations("executions")
  const tCommon = useTranslations("common")
  
  const { executions, isLoading, fetchExecutions, deleteExecution, startPolling, stopPolling } = useExecutionsStore()
  
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedExecution, setSelectedExecution] = useState<ExecutionData | null>(null)

  useEffect(() => {
    fetchExecutions()
    startPolling()
    return () => stopPolling()
  }, [fetchExecutions, startPolling, stopPolling])

  const filteredExecutions = executions.filter((execution) => {
    const matchesSearch = execution.workflowName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || execution.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const formatDuration = (startedAt?: string, finishedAt?: string): string => {
    if (!startedAt) return "-"
    const start = new Date(startedAt)
    const end = finishedAt ? new Date(finishedAt) : new Date()
    const diffMs = end.getTime() - start.getTime()
    const diffSecs = Math.floor(diffMs / 1000)
    
    if (diffSecs < 60) return `${diffSecs}s`
    const mins = Math.floor(diffSecs / 60)
    const secs = diffSecs % 60
    return `${mins}m ${secs}s`
  }

  const formatTime = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <div className="flex flex-col">
      <Header title={t("title")} />

      <div className="flex-1 space-y-6 p-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder={t("filters.statusPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("filters.allStatuses")}</SelectItem>
              <SelectItem value="success">{t("status.success")}</SelectItem>
              <SelectItem value="failed">{t("status.failed")}</SelectItem>
              <SelectItem value="running">{t("status.running")}</SelectItem>
              <SelectItem value="queued">{t("status.pending")}</SelectItem>
              <SelectItem value="cancelled">{t("status.cancelled")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Icon icon="lucide:loader-2" className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : filteredExecutions.length === 0 ? (
          <EmptyState
            icon="lucide:history"
            title={searchQuery || statusFilter !== "all" ? tCommon("noData") : t("empty")}
            description={searchQuery || statusFilter !== "all" ? undefined : t("emptyDescription")}
          />
        ) : (
          <div className="rounded-lg border border-border">
            <div className="grid grid-cols-[1fr_120px_180px_100px_100px_120px] gap-4 border-b border-border bg-muted/50 px-4 py-3 text-sm font-medium text-muted-foreground">
              <div>{t("columns.workflow")}</div>
              <div>{t("columns.status")}</div>
              <div>{t("columns.startedAt")}</div>
              <div>{t("columns.duration")}</div>
              <div>{t("columns.trigger")}</div>
              <div>{tCommon("actions")}</div>
            </div>
            <div className="divide-y divide-border">
              {filteredExecutions.map((execution) => (
                <div
                  key={execution.id}
                  className="grid grid-cols-[1fr_120px_180px_100px_100px_120px] items-center gap-4 px-4 py-3 hover:bg-accent/50"
                >
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:workflow" className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{execution.workflowName}</span>
                  </div>
                  <div>
                    <Badge variant={statusConfig[execution.status].variant}>
                      <Icon
                        icon={statusConfig[execution.status].icon}
                        className={cn(
                          "mr-1 h-3 w-3",
                          execution.status === "running" && "animate-spin"
                        )}
                      />
                      {t(`status.${execution.status === "queued" ? "pending" : execution.status}`)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {execution.startedAt ? formatTime(execution.startedAt) : "-"}
                  </div>
                  <div className="text-sm">
                    {formatDuration(execution.startedAt, execution.finishedAt)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`triggers.${execution.triggerType}`)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setSelectedExecution(execution)}
                    >
                      <Icon icon="lucide:external-link" className="h-4 w-4" />
                    </Button>
                    {execution.status !== "running" && execution.status !== "queued" && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => deleteExecution(execution.id)}
                      >
                        <Icon icon="lucide:trash-2" className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Execution Details Dialog */}
      <Dialog open={selectedExecution !== null} onOpenChange={(open) => !open && setSelectedExecution(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {t("details.title")}
              {selectedExecution && (
                <Badge variant={statusConfig[selectedExecution.status].variant}>
                  {t(`status.${selectedExecution.status === "queued" ? "pending" : selectedExecution.status}`)}
                </Badge>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedExecution?.workflowName} - {selectedExecution?.startedAt ? formatTime(selectedExecution.startedAt) : ""}
            </DialogDescription>
          </DialogHeader>
          
          {selectedExecution && (
            <div className="flex-1 overflow-auto space-y-4">
              {/* Steps */}
              <div>
                <h4 className="text-sm font-medium mb-2">{t("details.logs")}</h4>
                <div className="rounded-md border border-border divide-y divide-border">
                  {selectedExecution.steps.map((step) => (
                    <div key={step.id} className="flex items-center gap-3 px-3 py-2">
                      <Icon
                        icon={
                          step.status === "success"
                            ? "lucide:check-circle"
                            : step.status === "failed"
                            ? "lucide:x-circle"
                            : step.status === "running"
                            ? "lucide:loader-2"
                            : "lucide:circle"
                        }
                        className={cn(
                          "h-4 w-4",
                          step.status === "success" && "text-green-500",
                          step.status === "failed" && "text-destructive",
                          step.status === "running" && "text-yellow-500 animate-spin",
                          step.status === "queued" && "text-muted-foreground"
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{step.nodeLabel}</div>
                        <div className="text-xs text-muted-foreground">{step.nodeType}</div>
                      </div>
                      {step.errorMessage && (
                        <div className="text-xs text-destructive max-w-[200px] truncate">
                          {step.errorMessage}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Logs */}
              <div>
                <h4 className="text-sm font-medium mb-2">{t("details.logs")}</h4>
                <div className="rounded-md bg-muted/50 p-3 max-h-[200px] overflow-auto">
                  <div className="font-mono text-xs space-y-1">
                    {selectedExecution.logs.map((log, index) => (
                      <div 
                        key={index} 
                        className={cn(
                          "flex gap-2",
                          log.level === "error" && "text-destructive",
                          log.level === "warn" && "text-yellow-500"
                        )}
                      >
                        <span className="text-muted-foreground">
                          {new Date(log.timestamp).toLocaleTimeString("zh-CN")}
                        </span>
                        <span>[{log.level.toUpperCase()}]</span>
                        <span>{log.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {selectedExecution.errorMessage && (
                <div>
                  <h4 className="text-sm font-medium mb-2">{t("details.error")}</h4>
                  <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {selectedExecution.errorMessage}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
