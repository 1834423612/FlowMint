import { getTranslations } from "next-intl/server"
import { Header } from "@/components/layout/header"
import { SettingsContent } from "@/components/settings/settings-content"

export async function generateMetadata() {
  const t = await getTranslations("settings")
  return {
    title: t("title"),
  }
}

export default async function SettingsPage() {
  const t = await getTranslations("settings")

  return (
    <div className="flex flex-col">
      <Header title={t("title")} />
      <div className="flex-1 p-6">
        <SettingsContent />
      </div>
    </div>
  )
}
