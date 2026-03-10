import { NextResponse } from "next/server"

function toSerializable(value: unknown): unknown {
    if (typeof value === "bigint") {
        return value.toString()
    }

    if (value instanceof Date) {
        return value.toISOString()
    }

    if (Array.isArray(value)) {
        return value.map((item) => toSerializable(item))
    }

    if (value && typeof value === "object") {
        const entries = Object.entries(value as Record<string, unknown>).map(([key, nested]) => [
            key,
            toSerializable(nested),
        ])
        return Object.fromEntries(entries)
    }

    return value
}

export function jsonOk(data: unknown, init?: ResponseInit) {
    return NextResponse.json({ data: toSerializable(data) }, init)
}

export function jsonError(error: string, status: number) {
    return NextResponse.json({ error }, { status })
}
