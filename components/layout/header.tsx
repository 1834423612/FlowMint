"use client"

import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LocaleSwitcher } from "@/components/locale-switcher"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuthStore } from "@/stores/auth-store"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const t = useTranslations("user")
  const tNav = useTranslations("nav")
  const tCommon = useTranslations("common")
  const router = useRouter()
  
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const getInitials = (name?: string | null) => {
    if (!name) return "U"
    const parts = name.split(" ")
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase()
    }
    return name.slice(0, 2).toUpperCase()
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <h1 className="text-lg font-semibold">{title}</h1>

      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <Icon
            icon="lucide:search"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder={tCommon("search")}
            className="w-64 pl-9"
          />
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon icon="lucide:search" className="h-4 w-4" />
        </Button>

        <LocaleSwitcher />

        <Button variant="ghost" size="icon">
          <Icon icon="lucide:bell" className="h-4 w-4" />
          <span className="sr-only">{t("notifications")}</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {getInitials(user?.displayName)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span>{user?.displayName || t("accountMenu")}</span>
                {user?.email && (
                  <span className="text-xs font-normal text-muted-foreground">
                    {user.email}
                  </span>
                )}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <Icon icon="lucide:user" className="mr-2 h-4 w-4" />
              {t("profile")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <Icon icon="lucide:settings" className="mr-2 h-4 w-4" />
              {t("preferences")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-destructive"
              onClick={handleLogout}
            >
              <Icon icon="lucide:log-out" className="mr-2 h-4 w-4" />
              {tNav("logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
