"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface EditorToolbarProps {
  workflowName: string
  onWorkflowNameChange?: (name: string) => void
  isDirty?: boolean
  hasErrors?: boolean
  hasWarnings?: boolean
  version?: number
  onSave: () => void
  onRun: () => void
  onZoomIn: () => void
  onZoomOut: () => void
  onFitView: () => void
  isSaving?: boolean
  isRunning?: boolean
}

export function EditorToolbar({
  workflowName,
  onWorkflowNameChange,
  isDirty = false,
  hasErrors = false,
  hasWarnings = false,
  version = 0,
  onSave,
  onRun,
  onZoomIn,
  onZoomOut,
  onFitView,
  isSaving = false,
  isRunning = false,
}: EditorToolbarProps) {
  const t = useTranslations("editor")
  const tCommon = useTranslations("common")
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(workflowName)

  const handleNameSubmit = () => {
    if (editName.trim() && onWorkflowNameChange) {
      onWorkflowNameChange(editName.trim())
    }
    setIsEditing(false)
  }

  const handleNameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNameSubmit()
    } else if (e.key === "Escape") {
      setEditName(workflowName)
      setIsEditing(false)
    }
  }

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
          {isEditing && onWorkflowNameChange ? (
            <Input
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onBlur={handleNameSubmit}
              onKeyDown={handleNameKeyDown}
              className="h-7 w-48 text-sm"
              autoFocus
            />
          ) : (
            <button
              onClick={() => {
                if (onWorkflowNameChange) {
                  setEditName(workflowName)
                  setIsEditing(true)
                }
              }}
              className="font-medium hover:text-primary transition-colors"
            >
              {workflowName}
            </button>
          )}
          {version > 0 && (
            <span className="text-xs text-muted-foreground">v{version}</span>
          )}
          {isDirty && (
            <span className="text-xs text-yellow-500">{t("unsaved")}</span>
          )}
          {hasErrors && (
            <Tooltip>
              <TooltipTrigger>
                <Icon icon="lucide:alert-circle" className="h-4 w-4 text-destructive" />
              </TooltipTrigger>
              <TooltipContent>{t("hasErrors")}</TooltipContent>
            </Tooltip>
          )}
          {hasWarnings && !hasErrors && (
            <Tooltip>
              <TooltipTrigger>
                <Icon icon="lucide:alert-triangle" className="h-4 w-4 text-yellow-500" />
              </TooltipTrigger>
              <TooltipContent>{t("hasWarnings")}</TooltipContent>
            </Tooltip>
          )}
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

        <Button 
          variant={isDirty ? "default" : "outline"} 
          size="sm" 
          onClick={onSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icon icon="lucide:save" className="mr-2 h-4 w-4" />
          )}
          {t("save")}
        </Button>

        <Button 
          size="sm" 
          onClick={onRun} 
          disabled={hasErrors || isRunning}
        >
          {isRunning ? (
            <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icon icon="lucide:play" className="mr-2 h-4 w-4" />
          )}
          {t("run")}
        </Button>
      </div>
    </div>
  )
}
