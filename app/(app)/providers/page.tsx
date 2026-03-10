import { getTranslations } from "next-intl/server"
import { Header } from "@/components/layout/header"
import { ProvidersContent } from "@/components/providers/providers-content"

export async function generateMetadata() {
  const t = await getTranslations("providers")
  return {
    title: t("title"),
  }
}

export default async function ProvidersPage() {
  const t = await getTranslations("providers")

  return (
    <div className="flex flex-col">
      <Header title={t("title")} />
      <div className="flex-1 p-6">
        <ProvidersContent />
      </div>
    </div>
  )
}
