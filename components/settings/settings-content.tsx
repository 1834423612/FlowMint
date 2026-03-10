"use client"

import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { locales, localeNames, type Locale } from "@/i18n/config"
import { useLocale } from "next-intl"
import { useTransition } from "react"

export function SettingsContent() {
  const t = useTranslations("settings")
  const locale = useLocale() as Locale
  const [isPending, startTransition] = useTransition()

  function handleLocaleChange(newLocale: Locale) {
    startTransition(() => {
      document.cookie = `locale=${newLocale};path=/;max-age=31536000`
      window.location.reload()
    })
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
        <p className="text-muted-foreground">{t("general")}</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">
            <Icon icon="lucide:settings" className="mr-2 h-4 w-4" />
            {t("general")}
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Icon icon="lucide:palette" className="mr-2 h-4 w-4" />
            {t("appearance")}
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Icon icon="lucide:bell" className="mr-2 h-4 w-4" />
            {t("notifications")}
          </TabsTrigger>
          <TabsTrigger value="security">
            <Icon icon="lucide:shield" className="mr-2 h-4 w-4" />
            {t("security")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("language")}</CardTitle>
              <CardDescription>{t("descriptions.language")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Select
                value={locale}
                onValueChange={(value) => handleLocaleChange(value as Locale)}
                disabled={isPending}
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locales.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {localeNames[loc]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("apiKeys")}</CardTitle>
              <CardDescription>{t("descriptions.apiKeys")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Icon icon="lucide:key" className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t("apiKeyCards.production.title")}</p>
                    <p className="text-sm text-muted-foreground">{t("apiKeyCards.production.masked")}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Icon icon="lucide:copy" className="mr-2 h-4 w-4" />
                  {t("apiKeyCards.production.copy")}
                </Button>
              </div>
              <Button variant="outline">
                <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
                {t("apiKeyCards.generateNew")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("theme")}</CardTitle>
              <CardDescription>{t("descriptions.theme")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-primary p-4">
                  <div className="h-20 w-full rounded-md bg-zinc-900" />
                  <span className="text-sm font-medium">{t("themes.dark")}</span>
                </div>
                <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-border p-4 opacity-50">
                  <div className="h-20 w-full rounded-md bg-zinc-100" />
                  <span className="text-sm font-medium">{t("themes.light")}</span>
                </div>
                <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-border p-4 opacity-50">
                  <div className="h-20 w-full rounded-md bg-linear-to-b from-zinc-100 to-zinc-900" />
                  <span className="text-sm font-medium">{t("themes.system")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("notifications")}</CardTitle>
              <CardDescription>{t("descriptions.notifications")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t("notificationItems.workflowCompletion.title")}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t("notificationItems.workflowCompletion.description")}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t("notificationItems.workflowFailures.title")}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t("notificationItems.workflowFailures.description")}
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t("notificationItems.emailNotifications.title")}</Label>
                  <p className="text-sm text-muted-foreground">
                    {t("notificationItems.emailNotifications.description")}
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("security")}</CardTitle>
              <CardDescription>{t("descriptions.security")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Icon icon="lucide:lock" className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t("securityItems.password.title")}</p>
                    <p className="text-sm text-muted-foreground">{t("securityItems.password.lastChanged")}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {t("securityItems.password.change")}
                </Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Icon icon="lucide:smartphone" className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t("securityItems.twoFactor.title")}</p>
                    <p className="text-sm text-muted-foreground">{t("securityItems.twoFactor.description")}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {t("securityItems.twoFactor.enable")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
