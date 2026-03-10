import { NextRequest } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { jsonOk } from "@/lib/api/response"

export async function POST(request: NextRequest) {
    try {
        const sessionId = request.cookies.get("session_id")?.value

        if (sessionId) {
            await prisma.userSession.delete({
                where: { id: sessionId },
            }).catch(() => {
                // Session might not exist, ignore
            })
        }

        const response = jsonOk({ success: true })
        response.cookies.delete("session_id")
        
        return response
    } catch (error) {
        console.error("[api/auth/logout][POST]", error)
        const response = jsonOk({ success: true })
        response.cookies.delete("session_id")
        return response
    }
}
