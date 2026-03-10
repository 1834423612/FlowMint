"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useExecutionsStore, type ExecutionStatus } from "@/stores/executions-store"

const statusConfig: Record<ExecutionStatus, { variant: "success" | "destructive" | "warning" | "secondary" | "outline"; icon: string }> = {
  success: { variant: "success", icon: "lucide:check-circle" },
  failed: { variant: "destructive", icon: "lucide:x-circle" },
  running: { variant: "warning", icon: "lucide:loader-2" },
  queued: { variant: "secondary", icon: "lucide:clock" },
  cancelled: { variant: "outline", icon: "lucide:ban" },
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

function formatDuration(startedAt?: string, finishedAt?: string): string | undefined {
  if (!startedAt || !finishedAt) return undefined
  const start = new Date(startedAt)
  const end = new Date(finishedAt)
  const diffMs = end.getTime() - start.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  
  if (diffSecs < 60) return `${diffSecs}s`
  const mins = Math.floor(diffSecs / 60)
  const secs = diffSecs % 60
  return `${mins}m ${secs}s`
}

export function RecentExecutions() {
  const t = useTranslations("dashboard")
  const tExec = useTranslations("executions.status")
  
  const { executions } = useExecutionsStore()
  
  // Get the 5 most recent executions
  const recentExecutions = executions.slice(0, 5)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">{t("recentExecutions")}</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/executions">
            {t("viewAll")}
            <Icon icon="lucide:arrow-right" className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        {recentExecutions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Icon icon="lucide:inbox" className="mb-2 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{t("noRecentExecutions")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentExecutions.map((execution) => {
              const statusKey = execution.status === "queued" ? "pending" : execution.status
              return (
                <div
                  key={execution.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      icon={statusConfig[execution.status].icon}
                      className={cn(
                        "h-4 w-4",
                        execution.status === "running" && "animate-spin",
                        execution.status === "success" && "text-green-500",
                        execution.status === "failed" && "text-destructive"
                      )}
                    />
                    <div>
                      <p className="text-sm font-medium">{execution.workflowName}</p>
                      <p className="text-xs text-muted-foreground">
                        {execution.startedAt ? formatRelativeTime(execution.startedAt) : "-"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {execution.finishedAt && (
                      <span className="text-xs text-muted-foreground">
                        {formatDuration(execution.startedAt, execution.finishedAt)}
                      </span>
                    )}
                    <Badge variant={statusConfig[execution.status].variant}>
                      {tExec(statusKey)}
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
