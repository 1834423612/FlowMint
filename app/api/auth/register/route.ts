import { NextRequest } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonError, jsonOk } from "@/lib/api/response"
import { hashPassword, generateSessionId } from "@/lib/auth/utils"

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as {
            email: string
            password: string
            displayName?: string
        }

        if (!body.email || !body.password) {
            return jsonError("email-and-password-required", 400)
        }

        if (body.password.length < 6) {
            return jsonError("password-too-short", 400)
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: body.email },
        })

        if (existingUser) {
            return jsonError("email-already-exists", 409)
        }

        // Hash password and create user
        const passwordHash = await hashPassword(body.password)
        
        const user = await prisma.user.create({
            data: {
                email: body.email,
                passwordHash,
                displayName: body.displayName || body.email.split("@")[0],
            },
        })

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
        }, { status: 201 })

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
        console.error("[api/auth/register][POST]", error)
        return jsonError("registration-failed", 500)
    }
}
