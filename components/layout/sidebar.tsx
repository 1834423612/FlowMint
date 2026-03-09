"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { href: "/dashboard", icon: "lucide:layout-dashboard", labelKey: "dashboard" },
  { href: "/workflows", icon: "lucide:git-branch", labelKey: "workflows" },
  { href: "/executions", icon: "lucide:history", labelKey: "executions" },
  { href: "/settings", icon: "lucide:settings", labelKey: "settings" },
]

export function Sidebar() {
  const pathname = usePathname()
  const t = useTranslations("nav")

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col border-r border-border bg-background">
      <div className="flex h-14 items-center justify-center border-b border-border">
        <Link href="/dashboard" className="flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Icon icon="lucide:workflow" className="h-5 w-5 text-primary-foreground" />
          </div>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col items-center gap-2 py-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon icon={item.icon} className="h-5 w-5" />
                  <span className="sr-only">{t(item.labelKey)}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                {t(item.labelKey)}
              </TooltipContent>
            </Tooltip>
          )
        })}
      </nav>

      <div className="flex flex-col items-center gap-2 border-t border-border py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/help"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Icon icon="lucide:help-circle" className="h-5 w-5" />
              <span className="sr-only">{t("help")}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{t("help")}</TooltipContent>
        </Tooltip>
      </div>
    </aside>
  )
}
