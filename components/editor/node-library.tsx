"use client"

import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  nodeDefinitions,
  categoryColors,
  type NodeCategory,
  type NodeDefinition,
} from "@/types/workflow"
import { cn } from "@/lib/utils"

const categories: NodeCategory[] = ["trigger", "browser", "page", "data", "flow", "ai"]

interface NodeLibraryProps {
  onDragStart: (event: React.DragEvent, nodeType: string, label: string) => void
}

export function NodeLibrary({ onDragStart }: NodeLibraryProps) {
  const t = useTranslations("editor")

  const nodesByCategory = categories.reduce((acc, category) => {
    acc[category] = nodeDefinitions.filter((def) => def.category === category)
    return acc
  }, {} as Record<NodeCategory, NodeDefinition[]>)

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <Icon icon="lucide:blocks" className="h-4 w-4 text-primary" />
        <h3 className="font-semibold">{t("nodeLibrary")}</h3>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {categories.map((category) => (
            <Collapsible key={category} defaultOpen className="mb-1">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent">
                <div className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  <span>{t(`categories.${category}`)}</span>
                </div>
                <Icon
                  icon="lucide:chevron-down"
                  className="h-4 w-4 transition-transform duration-200 [[data-state=open]>&]:rotate-180"
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-1 space-y-0.5 pl-2">
                  {nodesByCategory[category].map((node) => (
                    <div
                      key={node.type}
                      draggable
                      onDragStart={(e) => onDragStart(e, node.type, t(`nodes.${node.labelKey}`))}
                      className={cn(
                        "flex cursor-grab items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                        "hover:bg-accent active:cursor-grabbing"
                      )}
                    >
                      <div
                        className="flex h-5 w-5 items-center justify-center rounded"
                        style={{ backgroundColor: `${node.color}20` }}
                      >
                        <Icon
                          icon={node.icon}
                          className="h-3 w-3"
                          style={{ color: node.color }}
                        />
                      </div>
                      <span className="truncate">{t(`nodes.${node.labelKey}`)}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
