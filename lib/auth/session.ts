import { NextRequest } from "next/server"
import { prisma } from "@/lib/db/prisma"

export interface SessionUser {
    id: bigint
    email: string
    displayName: string | null
    locale: string
}

export async function getSessionUser(request: NextRequest): Promise<SessionUser | null> {
    const sessionId = request.cookies.get("session_id")?.value
    if (!sessionId) {
        return null
    }

    const session = await prisma.userSession.findUnique({
        where: { id: sessionId },
        include: { user: true },
    })

    if (!session) {
        return null
    }

    if (session.expiresAt < new Date()) {
        await prisma.userSession.delete({ where: { id: sessionId } }).catch(() => {})
        return null
    }

    return {
        id: session.user.id,
        email: session.user.email,
        displayName: session.user.displayName,
        locale: session.user.locale,
    }
}