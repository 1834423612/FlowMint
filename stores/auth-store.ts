import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface User {
  id: string
  email: string
  displayName: string | null
  locale: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  
  // Actions
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (email: string, password: string, displayName: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
  updateUser: (data: Partial<User>) => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,

      login: async (email, password) => {
        set({ isLoading: true })
        
        try {
          const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          })
          
          const data = await response.json()
          
          if (!response.ok) {
            set({ isLoading: false })
            const errorMap: Record<string, string> = {
              "email-and-password-required": "请输入邮箱和密码",
              "invalid-credentials": "邮箱或密码错误",
              "login-failed": "登录失败，请重试",
            }
            return { success: false, error: errorMap[data.error] || data.error || "登录失败" }
          }
          
          set({
            user: data.data.user,
            isAuthenticated: true,
            isLoading: false,
          })
          
          return { success: true }
        } catch (error) {
          set({ isLoading: false })
          console.error("[auth-store] login error:", error)
          return { success: false, error: "网络错误，请检查连接" }
        }
      },

      register: async (email, password, displayName) => {
        set({ isLoading: true })
        
        try {
          const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, displayName }),
          })
          
          const data = await response.json()
          
          if (!response.ok) {
            set({ isLoading: false })
            const errorMap: Record<string, string> = {
              "email-and-password-required": "请输入邮箱和密码",
              "password-too-short": "密码长度至少为 6 位",
              "email-already-exists": "该邮箱已被注册",
              "registration-failed": "注册失败，请重试",
            }
            return { success: false, error: errorMap[data.error] || data.error || "注册失败" }
          }
          
          set({
            user: data.data.user,
            isAuthenticated: true,
            isLoading: false,
          })
          
          return { success: true }
        } catch (error) {
          set({ isLoading: false })
          console.error("[auth-store] register error:", error)
          return { success: false, error: "网络错误，请检查连接" }
        }
      },

      logout: async () => {
        try {
          await fetch("/api/auth/logout", { method: "POST" })
        } catch (error) {
          console.error("[auth-store] logout error:", error)
        }
        
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })
      },

      checkAuth: async () => {
        set({ isLoading: true })
        
        try {
          const response = await fetch("/api/auth/me")
          
          if (!response.ok) {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false,
            })
            return
          }
          
          const data = await response.json()
          
          set({
            user: data.data.user,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          console.error("[auth-store] checkAuth error:", error)
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          })
        }
      },

      updateUser: (data) => {
        const currentUser = get().user
        if (!currentUser) return
        
        set({ user: { ...currentUser, ...data } })
      },

      setLoading: (loading) => {
        set({ isLoading: loading })
      },
    }),
    {
      name: "flowmint-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        // After rehydration, verify session with server
        if (state && state.isAuthenticated) {
          state.checkAuth()
        } else if (state) {
          state.setLoading(false)
        }
      },
    }
  )
)
