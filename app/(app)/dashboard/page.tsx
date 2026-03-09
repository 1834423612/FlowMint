import { getTranslations } from "next-intl/server"
import { Header } from "@/components/layout/header"
import { StatCard } from "@/components/dashboard/stat-card"
import { RecentExecutions } from "@/components/dashboard/recent-executions"
import { QuickActions } from "@/components/dashboard/quick-actions"

export async function generateMetadata() {
  const t = await getTranslations("dashboard")
  return {
    title: t("title"),
  }
}

export default async function DashboardPage() {
  const t = await getTranslations("dashboard")

  return (
    <div className="flex flex-col">
      <Header title={t("title")} />
      
      <div className="flex-1 space-y-6 p-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t("welcome")}</h2>
          <p className="text-muted-foreground">{t("overview")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title={t("totalWorkflows")}
            value={12}
            icon="lucide:git-branch"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title={t("activeWorkflows")}
            value={8}
            icon="lucide:play-circle"
            trend={{ value: 5, isPositive: true }}
          />
          <StatCard
            title={t("totalExecutions")}
            value={1248}
            icon="lucide:activity"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title={t("successRate")}
            value="94.2%"
            icon="lucide:check-circle-2"
            trend={{ value: 2.1, isPositive: true }}
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
