import { PrismaClient } from "@/generated/prisma"

declare global {
    // eslint-disable-next-line no-var
    var __flowmintPrisma: PrismaClient | undefined
}

export const prisma =
    global.__flowmintPrisma ??
    new PrismaClient({
        log: ["error", "warn"],
    })

if (process.env.NODE_ENV !== "production") {
    global.__flowmintPrisma = prisma
}
