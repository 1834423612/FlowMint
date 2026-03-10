"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ExecutionStatus = "success" | "failed" | "running" | "pending"

interface Execution {
  id: string
  workflowName: string
  status: ExecutionStatus
  startedAt: string
  duration?: string
}

const mockExecutions: Execution[] = [
  { id: "1", workflowName: "电商数据抓取", status: "success", startedAt: "2 分钟前", duration: "45s" },
  { id: "2", workflowName: "社交媒体监控", status: "running", startedAt: "5 分钟前" },
  { id: "3", workflowName: "竞品价格监控", status: "failed", startedAt: "15 分钟前", duration: "12s" },
  { id: "4", workflowName: "新闻聚合", status: "success", startedAt: "1 小时前", duration: "2m 30s" },
  { id: "5", workflowName: "表单自动填写", status: "success", startedAt: "2 小时前", duration: "1m 15s" },
]

const statusConfig: Record<ExecutionStatus, { variant: "success" | "destructive" | "warning" | "secondary"; icon: string }> = {
  success: { variant: "success", icon: "lucide:check-circle" },
  failed: { variant: "destructive", icon: "lucide:x-circle" },
  running: { variant: "warning", icon: "lucide:loader-2" },
  pending: { variant: "secondary", icon: "lucide:clock" },
}

export function RecentExecutions() {
  const t = useTranslations("dashboard")
  const tExec = useTranslations("executions.status")

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
        {mockExecutions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Icon icon="lucide:inbox" className="mb-2 h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{t("noRecentExecutions")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {mockExecutions.map((execution) => (
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
                      execution.status === "success" && "text-success",
                      execution.status === "failed" && "text-destructive-foreground"
                    )}
                  />
                  <div>
                    <p className="text-sm font-medium">{execution.workflowName}</p>
                    <p className="text-xs text-muted-foreground">{execution.startedAt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {execution.duration && (
                    <span className="text-xs text-muted-foreground">{execution.duration}</span>
                  )}
                  <Badge variant={statusConfig[execution.status].variant}>
                    {tExec(execution.status)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
