import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface User {
  id: string
  email: string
  displayName: string
  locale: string
  createdAt: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  
  // Actions
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (email: string, password: string, displayName: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateUser: (data: Partial<User>) => void
  setLoading: (loading: boolean) => void
}

// In-memory user database for demo (will be replaced with real API)
const DEMO_USERS_KEY = "flowmint_users"

function getStoredUsers(): Record<string, { password: string; user: User }> {
  if (typeof window === "undefined") return {}
  try {
    const stored = localStorage.getItem(DEMO_USERS_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function saveStoredUsers(users: Record<string, { password: string; user: User }>) {
  if (typeof window === "undefined") return
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users))
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,

      login: async (email, password) => {
        set({ isLoading: true })
        
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        
        const users = getStoredUsers()
        const userRecord = users[email.toLowerCase()]
        
        if (!userRecord) {
          set({ isLoading: false })
          return { success: false, error: "用户不存在" }
        }
        
        if (userRecord.password !== password) {
          set({ isLoading: false })
          return { success: false, error: "密码错误" }
        }
        
        set({
          user: userRecord.user,
          isAuthenticated: true,
          isLoading: false,
        })
        
        return { success: true }
      },

      register: async (email, password, displayName) => {
        set({ isLoading: true })
        
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        
        const users = getStoredUsers()
        
        if (users[email.toLowerCase()]) {
          set({ isLoading: false })
          return { success: false, error: "该邮箱已被注册" }
        }
        
        const newUser: User = {
          id: `user_${Date.now()}`,
          email: email.toLowerCase(),
          displayName,
          locale: "zh",
          createdAt: new Date().toISOString(),
        }
        
        users[email.toLowerCase()] = {
          password,
          user: newUser,
        }
        
        saveStoredUsers(users)
        
        set({
          user: newUser,
          isAuthenticated: true,
          isLoading: false,
        })
        
        return { success: true }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })
      },

      updateUser: (data) => {
        const currentUser = get().user
        if (!currentUser) return
        
        const updatedUser = { ...currentUser, ...data }
        set({ user: updatedUser })
        
        // Update in storage
        const users = getStoredUsers()
        if (users[currentUser.email]) {
          users[currentUser.email].user = updatedUser
          saveStoredUsers(users)
        }
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
        if (state) {
          state.setLoading(false)
        }
      },
    }
  )
)
