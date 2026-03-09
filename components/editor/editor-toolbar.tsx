"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface EditorToolbarProps {
  workflowName: string
  onSave: () => void
  onRun: () => void
  onZoomIn: () => void
  onZoomOut: () => void
  onFitView: () => void
}

export function EditorToolbar({
  workflowName,
  onSave,
  onRun,
  onZoomIn,
  onZoomOut,
  onFitView,
}: EditorToolbarProps) {
  const t = useTranslations("editor")
  const tCommon = useTranslations("common")

  return (
    <div className="flex h-12 items-center justify-between border-b border-border bg-card px-4">
      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/workflows">
                <Icon icon="lucide:arrow-left" className="h-4 w-4" />
                <span className="sr-only">{tCommon("back")}</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{tCommon("back")}</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-2">
          <Icon icon="lucide:workflow" className="h-4 w-4 text-primary" />
          <span className="font-medium">{workflowName}</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={onZoomOut}>
              <Icon icon="lucide:zoom-out" className="h-4 w-4" />
              <span className="sr-only">{t("zoomOut")}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t("zoomOut")}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={onZoomIn}>
              <Icon icon="lucide:zoom-in" className="h-4 w-4" />
              <span className="sr-only">{t("zoomIn")}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t("zoomIn")}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={onFitView}>
              <Icon icon="lucide:maximize-2" className="h-4 w-4" />
              <span className="sr-only">{t("fitView")}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t("fitView")}</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-2 h-6" />

        <Button variant="outline" size="sm" onClick={onSave}>
          <Icon icon="lucide:save" className="mr-2 h-4 w-4" />
          {t("save")}
        </Button>

        <Button size="sm" onClick={onRun}>
          <Icon icon="lucide:play" className="mr-2 h-4 w-4" />
          {t("run")}
        </Button>
      </div>
    </div>
  )
}
