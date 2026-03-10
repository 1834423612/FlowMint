"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { RecentExecutions } from "@/components/dashboard/recent-executions"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { useWorkflowsStore } from "@/stores/workflows-store"
import { useExecutionsStore } from "@/stores/executions-store"
import { useAuthStore } from "@/stores/auth-store"

export default function DashboardPage() {
  const t = useTranslations("dashboard")
  const { user } = useAuthStore()
  const { workflows, fetchWorkflows } = useWorkflowsStore()
  const { executions, getStats, fetchExecutions } = useExecutionsStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetchWorkflows()
    fetchExecutions()
  }, [fetchWorkflows, fetchExecutions])

  // Auto-refresh when there are running executions
  useEffect(() => {
    const hasRunning = executions.some((e) => e.status === "running")
    if (hasRunning) {
      const interval = setInterval(() => {
        fetchExecutions()
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [executions, fetchExecutions])

  const stats = getStats()
  const activeWorkflows = workflows.filter((w) => w.status === "active").length

  if (!mounted) {
    return (
      <div className="flex flex-col">
        <Header title={t("title")} />
        <div className="flex flex-1 items-center justify-center">
          <Icon icon="lucide:loader-2" className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <Header title={t("title")} />
      
      <div className="flex-1 space-y-6 p-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {t("welcome")}{user?.displayName ? `, ${user.displayName}` : ""}
          </h2>
          <p className="text-muted-foreground">{t("overview")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title={t("totalWorkflows")}
            value={workflows.length}
            icon="lucide:git-branch"
          />
          <StatCard
            title={t("activeWorkflows")}
            value={activeWorkflows}
            icon="lucide:play-circle"
          />
          <StatCard
            title={t("totalExecutions")}
            value={stats.total}
            icon="lucide:activity"
          />
          <StatCard
            title={t("successRate")}
            value={stats.total > 0 ? `${stats.successRate}%` : "-"}
            icon="lucide:check-circle-2"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentExecutions />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  )
}
