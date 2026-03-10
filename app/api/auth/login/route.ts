import { NextRequest } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"
import { verifyPassword, generateSessionId } from "@/lib/auth/utils"

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as {
            email: string
            password: string
        }

        if (!body.email || !body.password) {
            return jsonError("email-and-password-required", 400)
        }

        // Find user
        const user = await prisma.user.findUnique({
            where: { email: body.email },
        })

        if (!user || !user.passwordHash) {
            return jsonError("invalid-credentials", 401)
        }

        // Verify password
        const isValid = await verifyPassword(body.password, user.passwordHash)
        if (!isValid) {
            return jsonError("invalid-credentials", 401)
        }

        // Create session
        const sessionId = generateSessionId()
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

        await prisma.userSession.create({
            data: {
                id: sessionId,
                userId: user.id,
                expiresAt,
            },
        })

        const response = jsonOk({
            user: {
                id: user.id.toString(),
                email: user.email,
                displayName: user.displayName,
                locale: user.locale,
            },
            sessionId,
            expiresAt: expiresAt.toISOString(),
        })

        // Set session cookie
        response.cookies.set("session_id", sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires: expiresAt,
            path: "/",
        })

        return response
    } catch (error) {
        console.error("[api/auth/login][POST]", error)
        return jsonError("login-failed", 500)
    }
}
