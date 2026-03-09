"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { EmptyState } from "@/components/ui/empty-state"

type ProviderType = "openai" | "anthropic" | "google" | "azure" | "deepseek" | "ollama" | "custom"

interface ProviderConfig {
  id: string
  type: ProviderType
  name: string
  isConfigured: boolean
  isDefault: boolean
  apiKeyMasked?: string
  baseUrl?: string
  defaultModel?: string
}

const PROVIDER_ICONS: Record<ProviderType, string> = {
  openai: "simple-icons:openai",
  anthropic: "simple-icons:anthropic",
  google: "simple-icons:google",
  azure: "simple-icons:microsoftazure",
  deepseek: "lucide:brain",
  ollama: "lucide:server",
  custom: "lucide:plug",
}

const PROVIDER_MODELS: Record<ProviderType, string[]> = {
  openai: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-4", "gpt-3.5-turbo"],
  anthropic: ["claude-3-5-sonnet-20241022", "claude-3-5-haiku-20241022", "claude-3-opus-20240229"],
  google: ["gemini-2.0-flash", "gemini-1.5-pro", "gemini-1.5-flash"],
  azure: ["gpt-4o", "gpt-4", "gpt-35-turbo"],
  deepseek: ["deepseek-chat", "deepseek-coder"],
  ollama: ["llama3.2", "mistral", "codellama", "phi3"],
  custom: [],
}

// Mock data - will be replaced with real API data
const mockProviders: ProviderConfig[] = [
  {
    id: "1",
    type: "openai",
    name: "OpenAI",
    isConfigured: true,
    isDefault: true,
    apiKeyMasked: "sk-****************************abcd",
    defaultModel: "gpt-4o",
  },
  {
    id: "2",
    type: "anthropic",
    name: "Anthropic",
    isConfigured: true,
    isDefault: false,
    apiKeyMasked: "sk-ant-****************************wxyz",
    defaultModel: "claude-3-5-sonnet-20241022",
  },
]

export function ProvidersContent() {
  const t = useTranslations("providers")
  const [providers, setProviders] = useState<ProviderConfig[]>(mockProviders)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedType, setSelectedType] = useState<ProviderType>("openai")
  const [apiKey, setApiKey] = useState("")
  const [baseUrl, setBaseUrl] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [testingConnection, setTestingConnection] = useState<string | null>(null)

  const providerTypes: ProviderType[] = ["openai", "anthropic", "google", "azure", "deepseek", "ollama", "custom"]

  const handleAddProvider = () => {
    const newProvider: ProviderConfig = {
      id: Date.now().toString(),
      type: selectedType,
      name: t(`providerTypes.${selectedType}`),
      isConfigured: true,
      isDefault: providers.length === 0,
      apiKeyMasked: apiKey ? `${apiKey.slice(0, 6)}****${apiKey.slice(-4)}` : undefined,
      baseUrl: baseUrl || undefined,
      defaultModel: selectedModel || PROVIDER_MODELS[selectedType][0],
    }
    setProviders([...providers, newProvider])
    setIsAddDialogOpen(false)
    setApiKey("")
    setBaseUrl("")
    setSelectedModel("")
  }

  const handleSetDefault = (id: string) => {
    setProviders(providers.map(p => ({
      ...p,
      isDefault: p.id === id,
    })))
  }

  const handleDelete = (id: string) => {
    setProviders(providers.filter(p => p.id !== id))
  }

  const handleTestConnection = async (id: string) => {
    setTestingConnection(id)
    // Simulate API test
    await new Promise(resolve => setTimeout(resolve, 1500))
    setTestingConnection(null)
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
              {t("addProvider")}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{t("addProvider")}</DialogTitle>
              <DialogDescription>
                {t("subtitle")}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Provider Type</Label>
                <Select value={selectedType} onValueChange={(v) => setSelectedType(v as ProviderType)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {providerTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        <div className="flex items-center gap-2">
                          <Icon icon={PROVIDER_ICONS[type]} className="h-4 w-4" />
                          {t(`providerTypes.${type}`)}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  {t(`providerDescriptions.${selectedType}`)}
                </p>
              </div>
              <div className="space-y-2">
                <Label>{t("apiKey")}</Label>
                <Input
                  type="password"
                  placeholder={t("apiKeyPlaceholder")}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>{t("baseUrl")}</Label>
                <Input
                  placeholder={t("baseUrlPlaceholder")}
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                />
              </div>
              {PROVIDER_MODELS[selectedType].length > 0 && (
                <div className="space-y-2">
                  <Label>{t("defaultModel")}</Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("selectModel")} />
                    </SelectTrigger>
                    <SelectContent>
                      {PROVIDER_MODELS[selectedType].map(model => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                {t("../common.cancel")}
              </Button>
              <Button onClick={handleAddProvider} disabled={!apiKey}>
                {t("addProvider")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {providers.length === 0 ? (
        <EmptyState
          icon="lucide:cpu"
          title={t("empty")}
          description={t("emptyDescription")}
          action={
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Icon icon="lucide:plus" className="mr-2 h-4 w-4" />
              {t("addProvider")}
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4">
          {providers.map(provider => (
            <Card key={provider.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Icon icon={PROVIDER_ICONS[provider.type]} className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        {provider.name}
                        {provider.isDefault && (
                          <Badge variant="secondary" className="text-xs">
                            {t("default")}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>
                        {t(`providerDescriptions.${provider.type}`)}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={provider.isConfigured ? "default" : "outline"}>
                    {provider.isConfigured ? t("configured") : t("notConfigured")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{t("apiKey")}</p>
                    <p className="font-mono text-sm">{provider.apiKeyMasked || "-"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{t("defaultModel")}</p>
                    <p className="font-mono text-sm">{provider.defaultModel || "-"}</p>
                  </div>
                </div>
                {provider.baseUrl && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{t("baseUrl")}</p>
                    <p className="font-mono text-sm">{provider.baseUrl}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTestConnection(provider.id)}
                    disabled={testingConnection === provider.id}
                  >
                    {testingConnection === provider.id ? (
                      <>
                        <Icon icon="lucide:loader-2" className="mr-2 h-4 w-4 animate-spin" />
                        {t("testing")}
                      </>
                    ) : (
                      <>
                        <Icon icon="lucide:plug" className="mr-2 h-4 w-4" />
                        {t("testConnection")}
                      </>
                    )}
                  </Button>
                  {!provider.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSetDefault(provider.id)}
                    >
                      <Icon icon="lucide:star" className="mr-2 h-4 w-4" />
                      {t("setAsDefault")}
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => handleDelete(provider.id)}
                  >
                    <Icon icon="lucide:trash-2" className="mr-2 h-4 w-4" />
                    {t("../common.delete")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
