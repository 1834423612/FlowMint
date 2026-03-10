import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { Icon } from "@iconify/react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WorkflowCard, type Workflow } from "@/components/workflows/workflow-card"
import { EmptyState } from "@/components/ui/empty-state"

export async function generateMetadata() {
  const t = await getTranslations("workflows")
  return {
    title: t("title"),
  }
}

const mockWorkflows: Workflow[] = [
  {
    id: "1",
    name: "电商数据抓取",
    description: "自动抓取电商平台的产品信息、价格和评论数据",
    status: "active",
    lastRun: "2 分钟前",
    nodeCount: 12,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20",
  },
  {
    id: "2",
    name: "社交媒体监控",
    description: "监控社交媒体上的品牌提及和用户反馈",
    status: "active",
    lastRun: "5 分钟前",
    nodeCount: 8,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18",
  },
  {
    id: "3",
    name: "竞品价格监控",
    description: "定期检查竞争对手的产品定价变化",
    status: "paused",
    lastRun: "1 小时前",
    nodeCount: 6,
    createdAt: "2024-01-08",
    updatedAt: "2024-01-15",
  },
  {
    id: "4",
    name: "新闻聚合",
    description: "从多个新闻源收集和整理行业相关新闻",
    status: "active",
    nodeCount: 10,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-12",
  },
  {
    id: "5",
    name: "表单自动填写",
    description: "自动填写重复性的在线表单和申请",
    status: "draft",
    nodeCount: 4,
    createdAt: "2024-01-02",
    updatedAt: "2024-01-05",
  },
  {
    id: "6",
    name: "数据备份流程",
    description: "定期从 Web 应用导出和备份关键数据",
    status: "archived",
    lastRun: "3 天前",
    nodeCount: 7,
    createdAt: "2023-12-20",
    updatedAt: "2024-01-01",
  },
]

export default async function WorkflowsPage() {
  const t = await getTranslations("workflows")

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
            <Button asChild>
              <Link href="/workflows/new">
                <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
                {t("create")}
              </Link>
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
            />
          </div>
        </div>

        {mockWorkflows.length === 0 ? (
          <EmptyState
            icon="lucide:git-branch"
            title={t("empty")}
            description={t("emptyDescription")}
          >
            <Button asChild>
              <Link href="/workflows/new">
                <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
                {t("create")}
              </Link>
            </Button>
          </EmptyState>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
