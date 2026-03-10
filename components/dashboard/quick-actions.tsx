"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const actions = [
  { href: "/workflows/new", icon: "lucide:plus", labelKey: "createWorkflow", primary: true },
  { href: "/workflows", icon: "lucide:folder", labelKey: "viewAll", primary: false },
]

export function QuickActions() {
  const t = useTranslations("dashboard")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{t("quickActions")}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {actions.map((action) => (
          <Button
            key={action.href}
            variant={action.primary ? "default" : "outline"}
            className="justify-start"
            asChild
          >
            <Link href={action.href}>
              <Icon icon={action.icon} className="mr-2 h-4 w-4" />
              {t(action.labelKey)}
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
