import { NextRequest } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"

export async function GET(request: NextRequest) {
    try {
        const sessionId = request.cookies.get("session_id")?.value

        if (!sessionId) {
            return jsonError("not-authenticated", 401)
        }

        const session = await prisma.userSession.findUnique({
            where: { id: sessionId },
            include: { user: true },
        })

        if (!session) {
            return jsonError("session-not-found", 401)
        }

        if (session.expiresAt < new Date()) {
            // Clean up expired session
            await prisma.userSession.delete({ where: { id: sessionId } }).catch(() => {})
            return jsonError("session-expired", 401)
        }

        return jsonOk({
            user: {
                id: session.user.id.toString(),
                email: session.user.email,
                displayName: session.user.displayName,
                locale: session.user.locale,
            },
        })
    } catch (error) {
        console.error("[api/auth/me][GET]", error)
        return jsonError("auth-check-failed", 500)
    }
}
