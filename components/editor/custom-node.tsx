"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import { getNodeDefinition } from "@/types/workflow"
import type { WorkflowNode } from "@/stores/workflow-store"

function CustomNodeComponent({ data, selected }: NodeProps<WorkflowNode>) {
  const definition = getNodeDefinition(data.type)
  
  if (!definition) {
    return null
  }

  return (
    <div
      className={cn(
        "min-w-[160px] rounded-lg border bg-card shadow-md transition-all",
        selected ? "border-primary ring-2 ring-primary/20" : "border-border"
      )}
    >
      {definition.inputs !== 0 && (
        <Handle
          type="target"
          position={Position.Left}
          className="!h-3 !w-3 !border-2 !border-background !bg-muted-foreground"
        />
      )}
      
      <div
        className="flex items-center gap-2 rounded-t-lg px-3 py-2"
        style={{ backgroundColor: `${definition.color}20` }}
      >
        <div
          className="flex h-6 w-6 items-center justify-center rounded"
          style={{ backgroundColor: definition.color }}
        >
          <Icon icon={definition.icon} className="h-3.5 w-3.5 text-white" />
        </div>
        <span className="text-sm font-medium">{data.label}</span>
      </div>
      
      <div className="px-3 py-2">
        <p className="text-xs text-muted-foreground">
          {data.config?.selector ? `${data.config.selector}` : "Click to configure"}
        </p>
      </div>

      {definition.outputs === 1 && (
        <Handle
          type="source"
          position={Position.Right}
          className="!h-3 !w-3 !border-2 !border-background !bg-muted-foreground"
        />
      )}
      
      {definition.outputs === 2 && (
        <>
          <Handle
            type="source"
            position={Position.Right}
            id="true"
            className="!top-1/3 !h-3 !w-3 !border-2 !border-background !bg-success"
          />
          <Handle
            type="source"
            position={Position.Right}
            id="false"
            className="!top-2/3 !h-3 !w-3 !border-2 !border-background !bg-destructive-foreground"
          />
        </>
      )}
    </div>
  )
}

export const CustomNode = memo(CustomNodeComponent)
