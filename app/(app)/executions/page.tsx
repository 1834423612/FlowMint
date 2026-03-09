import { getTranslations } from "next-intl/server"
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
import { EmptyState } from "@/components/ui/empty-state"
import { cn } from "@/lib/utils"

export async function generateMetadata() {
  const t = await getTranslations("executions")
  return {
    title: t("title"),
  }
}

type ExecutionStatus = "pending" | "running" | "success" | "failed" | "cancelled"

interface Execution {
  id: string
  workflowId: string
  workflowName: string
  status: ExecutionStatus
  startedAt: string
  duration?: string
  trigger: string
}

const mockExecutions: Execution[] = [
  {
    id: "exec-1",
    workflowId: "1",
    workflowName: "电商数据抓取",
    status: "success",
    startedAt: "2024-01-20 15:30:45",
    duration: "45s",
    trigger: "Manual",
  },
  {
    id: "exec-2",
    workflowId: "2",
    workflowName: "社交媒体监控",
    status: "running",
    startedAt: "2024-01-20 15:28:00",
    trigger: "Schedule",
  },
  {
    id: "exec-3",
    workflowId: "3",
    workflowName: "竞品价格监控",
    status: "failed",
    startedAt: "2024-01-20 15:15:30",
    duration: "12s",
    trigger: "Schedule",
  },
  {
    id: "exec-4",
    workflowId: "1",
    workflowName: "电商数据抓取",
    status: "success",
    startedAt: "2024-01-20 14:30:00",
    duration: "52s",
    trigger: "Manual",
  },
  {
    id: "exec-5",
    workflowId: "4",
    workflowName: "新闻聚合",
    status: "success",
    startedAt: "2024-01-20 14:00:00",
    duration: "2m 30s",
    trigger: "Webhook",
  },
  {
    id: "exec-6",
    workflowId: "5",
    workflowName: "表单自动填写",
    status: "cancelled",
    startedAt: "2024-01-20 13:45:00",
    duration: "5s",
    trigger: "Manual",
  },
]

const statusConfig: Record<
  ExecutionStatus,
  { variant: "success" | "destructive" | "warning" | "secondary" | "outline"; icon: string }
> = {
  success: { variant: "success", icon: "lucide:check-circle" },
  failed: { variant: "destructive", icon: "lucide:x-circle" },
  running: { variant: "warning", icon: "lucide:loader-2" },
  pending: { variant: "secondary", icon: "lucide:clock" },
  cancelled: { variant: "outline", icon: "lucide:ban" },
}

export default async function ExecutionsPage() {
  const t = await getTranslations("executions")

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
            <Input type="search" placeholder={t("search")} className="pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="success">{t("status.success")}</SelectItem>
              <SelectItem value="failed">{t("status.failed")}</SelectItem>
              <SelectItem value="running">{t("status.running")}</SelectItem>
              <SelectItem value="pending">{t("status.pending")}</SelectItem>
              <SelectItem value="cancelled">{t("status.cancelled")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {mockExecutions.length === 0 ? (
          <EmptyState
            icon="lucide:history"
            title={t("empty")}
            description={t("emptyDescription")}
          />
        ) : (
          <div className="rounded-lg border border-border">
            <div className="grid grid-cols-[1fr_120px_180px_100px_100px_80px] gap-4 border-b border-border bg-muted/50 px-4 py-3 text-sm font-medium text-muted-foreground">
              <div>{t("columns.workflow")}</div>
              <div>{t("columns.status")}</div>
              <div>{t("columns.startedAt")}</div>
              <div>{t("columns.duration")}</div>
              <div>{t("columns.trigger")}</div>
              <div></div>
            </div>
            <div className="divide-y divide-border">
              {mockExecutions.map((execution) => (
                <div
                  key={execution.id}
                  className="grid grid-cols-[1fr_120px_180px_100px_100px_80px] items-center gap-4 px-4 py-3 hover:bg-accent/50"
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
                      {t(`status.${execution.status}`)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{execution.startedAt}</div>
                  <div className="text-sm">{execution.duration || "-"}</div>
                  <div className="text-sm text-muted-foreground">{execution.trigger}</div>
                  <div>
                    <Button variant="ghost" size="icon">
                      <Icon icon="lucide:external-link" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
