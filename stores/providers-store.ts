import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type ProviderType = "openai" | "anthropic" | "google" | "azure" | "deepseek" | "ollama" | "custom"

export interface ProviderConfig {
  id: string
  type: ProviderType
  name: string
  isConfigured: boolean
  isDefault: boolean
  apiKey: string
  apiKeyMasked: string
  baseUrl?: string
  defaultModel?: string
  createdAt: string
  updatedAt: string
}

interface ProvidersState {
  providers: ProviderConfig[]
  isLoading: boolean
  
  // Actions
  fetchProviders: () => Promise<void>
  addProvider: (data: {
    type: ProviderType
    name: string
    apiKey: string
    baseUrl?: string
    defaultModel?: string
  }) => Promise<ProviderConfig>
  updateProvider: (id: string, data: Partial<ProviderConfig>) => void
  deleteProvider: (id: string) => void
  setDefault: (id: string) => void
  testConnection: (id: string) => Promise<{ success: boolean; error?: string }>
}

function maskApiKey(key: string): string {
  if (key.length <= 10) return "****"
  return `${key.slice(0, 6)}****${key.slice(-4)}`
}

export const useProvidersStore = create<ProvidersState>()(
  persist(
    (set, get) => ({
      providers: [],
      isLoading: false,

      fetchProviders: async () => {
        set({ isLoading: true })
        await new Promise((resolve) => setTimeout(resolve, 300))
        set({ isLoading: false })
      },

      addProvider: async (data) => {
        const newProvider: ProviderConfig = {
          id: `provider_${Date.now()}`,
          type: data.type,
          name: data.name,
          isConfigured: true,
          isDefault: get().providers.length === 0,
          apiKey: data.apiKey,
          apiKeyMasked: maskApiKey(data.apiKey),
          baseUrl: data.baseUrl,
          defaultModel: data.defaultModel,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        set((state) => ({
          providers: [...state.providers, newProvider],
        }))

        return newProvider
      },

      updateProvider: (id, data) => {
        set((state) => ({
          providers: state.providers.map((p) =>
            p.id === id
              ? {
                  ...p,
                  ...data,
                  apiKeyMasked: data.apiKey ? maskApiKey(data.apiKey) : p.apiKeyMasked,
                  updatedAt: new Date().toISOString(),
                }
              : p
          ),
        }))
      },

      deleteProvider: (id) => {
        set((state) => {
          const filtered = state.providers.filter((p) => p.id !== id)
          // If deleted provider was default and there are others, make first one default
          if (filtered.length > 0 && !filtered.some((p) => p.isDefault)) {
            filtered[0].isDefault = true
          }
          return { providers: filtered }
        })
      },

      setDefault: (id) => {
        set((state) => ({
          providers: state.providers.map((p) => ({
            ...p,
            isDefault: p.id === id,
            updatedAt: p.id === id ? new Date().toISOString() : p.updatedAt,
          })),
        }))
      },

      testConnection: async (id) => {
        const provider = get().providers.find((p) => p.id === id)
        if (!provider) {
          return { success: false, error: "提供商不存在" }
        }

        // Simulate API test
        await new Promise((resolve) => setTimeout(resolve, 1500))
        
        // Simple validation
        if (!provider.apiKey || provider.apiKey.length < 10) {
          return { success: false, error: "API 密钥无效" }
        }

        return { success: true }
      },
    }),
    {
      name: "flowmint-providers",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        providers: state.providers,
      }),
    }
  )
)
