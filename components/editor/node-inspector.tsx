"use client"

import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useWorkflowStore, type WorkflowNode } from "@/stores/workflow-store"
import { getNodeDefinition } from "@/types/workflow"

interface NodeInspectorProps {
  node: WorkflowNode | null
}

export function NodeInspector({ node }: NodeInspectorProps) {
  const t = useTranslations("editor.inspector")
  const tNodes = useTranslations("editor.nodes")
  const { updateNodeData, deleteNode } = useWorkflowStore()

  if (!node) {
    return (
      <div className="flex h-full w-72 flex-col border-l border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Icon icon="lucide:settings-2" className="h-4 w-4 text-primary" />
          <h3 className="font-semibold">{t("properties")}</h3>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
          <Icon icon="lucide:mouse-pointer-click" className="mb-2 h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{t("noSelection")}</p>
        </div>
      </div>
    )
  }

  const definition = getNodeDefinition(node.data.type)
  const labelKey = definition?.labelKey

  return (
    <div className="flex h-full w-72 flex-col border-l border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <Icon icon="lucide:settings-2" className="h-4 w-4 text-primary" />
        <h3 className="font-semibold">{t("properties")}</h3>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">{t("nodeType")}</Label>
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2">
              {definition && (
                <div
                  className="flex h-5 w-5 items-center justify-center rounded"
                  style={{ backgroundColor: definition.color }}
                >
                  <Icon icon={definition.icon} className="h-3 w-3 text-white" />
                </div>
              )}
              <span className="text-sm">
                {labelKey ? tNodes(labelKey) : node.data.type}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">{t("nodeId")}</Label>
            <div className="rounded-md bg-muted px-3 py-2">
              <code className="text-xs">{node.id}</code>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="node-label">Label</Label>
            <Input
              id="node-label"
              value={node.data.label}
              onChange={(e) => updateNodeData(node.id, { label: e.target.value })}
            />
          </div>

          {node.data.type === "navigate" && (
            <div className="space-y-2">
              <Label htmlFor="node-url">URL</Label>
              <Input
                id="node-url"
                placeholder="https://example.com"
                value={(node.data.config?.url as string) || ""}
                onChange={(e) =>
                  updateNodeData(node.id, {
                    config: { ...node.data.config, url: e.target.value },
                  })
                }
              />
            </div>
          )}

          {(node.data.type === "click" || node.data.type === "type" || node.data.type === "wait_for") && (
            <div className="space-y-2">
              <Label htmlFor="node-selector">CSS Selector</Label>
              <Input
                id="node-selector"
                placeholder="#element, .class, [data-id]"
                value={(node.data.config?.selector as string) || ""}
                onChange={(e) =>
                  updateNodeData(node.id, {
                    config: { ...node.data.config, selector: e.target.value },
                  })
                }
              />
            </div>
          )}

          {node.data.type === "type" && (
            <div className="space-y-2">
              <Label htmlFor="node-text">Text to Type</Label>
              <Textarea
                id="node-text"
                placeholder="Enter text..."
                value={(node.data.config?.text as string) || ""}
                onChange={(e) =>
                  updateNodeData(node.id, {
                    config: { ...node.data.config, text: e.target.value },
                  })
                }
              />
            </div>
          )}

          {node.data.type === "delay" && (
            <div className="space-y-2">
              <Label htmlFor="node-delay">Delay (ms)</Label>
              <Input
                id="node-delay"
                type="number"
                placeholder="1000"
                value={(node.data.config?.delay as number) || ""}
                onChange={(e) =>
                  updateNodeData(node.id, {
                    config: { ...node.data.config, delay: parseInt(e.target.value) },
                  })
                }
              />
            </div>
          )}

          {node.data.type === "llm_chat" && (
            <div className="space-y-2">
              <Label htmlFor="node-prompt">Prompt</Label>
              <Textarea
                id="node-prompt"
                placeholder="Enter your prompt..."
                rows={4}
                value={(node.data.config?.prompt as string) || ""}
                onChange={(e) =>
                  updateNodeData(node.id, {
                    config: { ...node.data.config, prompt: e.target.value },
                  })
                }
              />
            </div>
          )}

          <Separator />

          <Button
            variant="destructive"
            size="sm"
            className="w-full"
            onClick={() => deleteNode(node.id)}
          >
            <Icon icon="lucide:trash-2" className="mr-2 h-4 w-4" />
            Delete Node
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}
