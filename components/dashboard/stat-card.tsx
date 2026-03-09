import { Icon } from "@iconify/react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  icon: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatCard({ title, value, icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {trend && (
              <div className="flex items-center gap-1 text-xs">
                <Icon
                  icon={trend.isPositive ? "lucide:trending-up" : "lucide:trending-down"}
                  className={cn(
                    "h-3 w-3",
                    trend.isPositive ? "text-success" : "text-destructive-foreground"
                  )}
                />
                <span className={trend.isPositive ? "text-success" : "text-destructive-foreground"}>
                  {trend.value}%
                </span>
              </div>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon icon={icon} className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
