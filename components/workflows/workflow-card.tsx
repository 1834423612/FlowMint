"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type WorkflowStatus = "draft" | "active" | "paused" | "archived"

export interface Workflow {
  id: string
  name: string
  description?: string
  status: WorkflowStatus
  lastRun?: string
  nodeCount: number
  createdAt: string
  updatedAt: string
}

const statusConfig: Record<WorkflowStatus, { variant: "secondary" | "success" | "warning" | "outline"; icon: string }> = {
  draft: { variant: "secondary", icon: "lucide:file-edit" },
  active: { variant: "success", icon: "lucide:circle-dot" },
  paused: { variant: "warning", icon: "lucide:pause-circle" },
  archived: { variant: "outline", icon: "lucide:archive" },
}

interface WorkflowCardProps {
  workflow: Workflow
  onRun?: (id: string) => void
  onDelete?: (id: string) => void
}

export function WorkflowCard({ workflow, onRun, onDelete }: WorkflowCardProps) {
  const t = useTranslations("workflows")

  return (
    <Card className="group flex flex-col transition-colors hover:border-primary/50">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Link
              href={`/workflows/${workflow.id}`}
              className="block truncate font-semibold hover:text-primary"
            >
              {workflow.name}
            </Link>
            {workflow.description && (
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {workflow.description}
              </p>
            )}
          </div>
          <Badge variant={statusConfig[workflow.status].variant}>
            <Icon
              icon={statusConfig[workflow.status].icon}
              className="mr-1 h-3 w-3"
            />
            {t(`status.${workflow.status}`)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-2">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon icon="lucide:git-commit" className="h-3 w-3" />
            <span>{workflow.nodeCount} nodes</span>
          </div>
          {workflow.lastRun && (
            <div className="flex items-center gap-1">
              <Icon icon="lucide:clock" className="h-3 w-3" />
              <span>{workflow.lastRun}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2 border-t border-border pt-3">
        <Button
          variant="default"
          size="sm"
          className="flex-1"
          onClick={() => onRun?.(workflow.id)}
        >
          <Icon icon="lucide:play" className="mr-1 h-3 w-3" />
          {t("actions.run")}
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/workflows/${workflow.id}`}>
            <Icon icon="lucide:edit" className="h-3 w-3" />
            <span className="sr-only">{t("actions.edit")}</span>
          </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Icon icon="lucide:more-horizontal" className="h-3 w-3" />
              <span className="sr-only">More actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Icon icon="lucide:copy" className="mr-2 h-4 w-4" />
              {t("actions.duplicate")}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon icon="lucide:download" className="mr-2 h-4 w-4" />
              {t("actions.export")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive-foreground"
              onClick={() => onDelete?.(workflow.id)}
            >
              <Icon icon="lucide:trash-2" className="mr-2 h-4 w-4" />
              {t("actions.delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
