import { create } from "zustand"
import { useAuthStore } from "./auth-store"

export type ProviderType = "openai" | "anthropic" | "openrouter" | "azure" | "deepseek" | "ollama" | "custom"

export interface ProviderConfig {
  id: string
  type: ProviderType
  name: string
  isConfigured: boolean
  isDefault: boolean
  apiKeyMasked: string
  baseUrl?: string
  defaultModel?: string
  createdAt: string
  updatedAt: string
}

interface ProvidersState {
  providers: ProviderConfig[]
  isLoading: boolean
  error: string | null
  
  // Actions
  fetchProviders: () => Promise<void>
  addProvider: (data: {
    type: ProviderType
    name: string
    apiKey: string
    baseUrl?: string
    defaultModel?: string
  }) => Promise<ProviderConfig | null>
  updateProvider: (id: string, data: Partial<{ name: string; apiKey: string; baseUrl: string; defaultModel: string }>) => Promise<void>
  deleteProvider: (id: string) => Promise<void>
  setDefault: (id: string) => Promise<void>
  testConnection: (id: string) => Promise<{ success: boolean; error?: string; models?: string[] }>
}

function maskApiKey(key: string): string {
  if (!key || key.length <= 10) return "****"
  return `${key.slice(0, 6)}****${key.slice(-4)}`
}

function mapProviderFromApi(p: Record<string, unknown>): ProviderConfig {
  return {
    id: String(p.id),
    type: (p.type as ProviderType) || "custom",
    name: String(p.name || ""),
    isConfigured: Boolean(p.encryptedApiKey),
    isDefault: Boolean(p.isDefault),
    apiKeyMasked: maskApiKey(String(p.encryptedApiKey || "")),
    baseUrl: p.baseUrl ? String(p.baseUrl) : undefined,
    defaultModel: p.defaultModel ? String(p.defaultModel) : undefined,
    createdAt: String(p.createdAt || new Date().toISOString()),
    updatedAt: String(p.updatedAt || new Date().toISOString()),
  }
}

export const useProvidersStore = create<ProvidersState>()((set, get) => ({
  providers: [],
  isLoading: false,
  error: null,

  fetchProviders: async () => {
    const user = useAuthStore.getState().user
    if (!user) {
      set({ providers: [], isLoading: false })
      return
    }

    set({ isLoading: true, error: null })

    try {
      const response = await fetch("/api/providers")
      
      if (!response.ok) {
        throw new Error("Failed to fetch providers")
      }

      const data = await response.json()
      const providers = (data.data || []).map(mapProviderFromApi)

      set({ providers, isLoading: false })
    } catch (error) {
      console.error("[providers-store] fetchProviders error:", error)
      set({ 
        error: error instanceof Error ? error.message : "Failed to fetch providers",
        isLoading: false 
      })
    }
  },

  addProvider: async (data) => {
    const user = useAuthStore.getState().user
    if (!user) return null

    try {
      const response = await fetch("/api/providers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          type: data.type,
          apiKey: data.apiKey,
          baseUrl: data.baseUrl,
          defaultModel: data.defaultModel,
          isDefault: get().providers.length === 0,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create provider")
      }

      const result = await response.json()
      const newProvider = mapProviderFromApi(result.data)

      set((state) => ({
        providers: [...state.providers, newProvider],
      }))

      return newProvider
    } catch (error) {
      console.error("[providers-store] addProvider error:", error)
      return null
    }
  },

  updateProvider: async (id, data) => {
    try {
      const response = await fetch(`/api/providers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to update provider")
      }

      const result = await response.json()
      const updated = mapProviderFromApi(result.data)

      set((state) => ({
        providers: state.providers.map((p) => (p.id === id ? updated : p)),
      }))
    } catch (error) {
      console.error("[providers-store] updateProvider error:", error)
    }
  },

  deleteProvider: async (id) => {
    try {
      const response = await fetch(`/api/providers/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete provider")
      }

      set((state) => ({
        providers: state.providers.filter((p) => p.id !== id),
      }))
      
      // Refresh to get updated default status
      get().fetchProviders()
    } catch (error) {
      console.error("[providers-store] deleteProvider error:", error)
    }
  },

  setDefault: async (id) => {
    try {
      const response = await fetch(`/api/providers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isDefault: true }),
      })

      if (!response.ok) {
        throw new Error("Failed to set default provider")
      }

      set((state) => ({
        providers: state.providers.map((p) => ({
          ...p,
          isDefault: p.id === id,
        })),
      }))
    } catch (error) {
      console.error("[providers-store] setDefault error:", error)
    }
  },

  testConnection: async (id) => {
    try {
      const response = await fetch(`/api/providers/${id}/test`, {
        method: "POST",
      })

      if (!response.ok) {
        return { success: false, error: "Test request failed" }
      }

      const data = await response.json()
      return data.data as { success: boolean; error?: string; models?: string[] }
    } catch (error) {
      console.error("[providers-store] testConnection error:", error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Connection test failed" 
      }
    }
  },
}))
