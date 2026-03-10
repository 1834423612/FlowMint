import { randomBytes, scrypt, timingSafeEqual } from "crypto"
import { promisify } from "util"

const scryptAsync = promisify(scrypt)

/**
 * Hash a password using scrypt
 * Returns format: salt:hash (both in hex)
 */
export async function hashPassword(password: string): Promise<string> {
    const salt = randomBytes(16).toString("hex")
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer
    return `${salt}:${derivedKey.toString("hex")}`
}

/**
 * Verify a password against a stored hash
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
    try {
        const [salt, hash] = storedHash.split(":")
        if (!salt || !hash) return false
        
        const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer
        const storedKey = Buffer.from(hash, "hex")
        
        return timingSafeEqual(derivedKey, storedKey)
    } catch {
        return false
    }
}

/**
 * Generate a cryptographically secure session ID
 */
export function generateSessionId(): string {
    return randomBytes(32).toString("hex")
}
