import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

export interface StoredObject {
    key: string
    publicUrl?: string
}

export class R2Storage {
    private readonly client: S3Client | null
    private readonly bucket: string
    private readonly publicBaseUrl?: string
    private readonly rootFolder?: string

    constructor() {
        this.bucket = process.env.R2_BUCKET || ""
        this.publicBaseUrl = process.env.R2_PUBLIC_BASE_URL
        this.rootFolder = this.normalizeFolder(process.env.R2_ROOT_FOLDER)

        const accountId = process.env.R2_ACCOUNT_ID
        const accessKeyId = process.env.R2_ACCESS_KEY_ID
        const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY

        if (!accountId || !accessKeyId || !secretAccessKey || !this.bucket) {
            this.client = null
            return
        }

        this.client = new S3Client({
            region: "auto",
            endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
            credentials: { accessKeyId, secretAccessKey },
        })
    }

    private normalizeFolder(folder?: string): string | undefined {
        if (!folder) {
            return undefined
        }

        const normalized = folder.trim().replace(/^\/+|\/+$/g, "")
        return normalized || undefined
    }

    private buildObjectKey(key: string): string {
        const normalizedKey = key.replace(/^\/+/, "")
        if (!this.rootFolder) {
            return normalizedKey
        }
        return `${this.rootFolder}/${normalizedKey}`
    }

    async putBuffer(key: string, body: Buffer, contentType: string): Promise<StoredObject> {
        if (!this.client) {
            throw new Error("R2 storage is not configured")
        }

        const objectKey = this.buildObjectKey(key)

        await this.client.send(
            new PutObjectCommand({
                Bucket: this.bucket,
                Key: objectKey,
                Body: body,
                ContentType: contentType,
            })
        )

        return {
            key: objectKey,
            publicUrl: this.publicBaseUrl ? `${this.publicBaseUrl.replace(/\/$/, "")}/${objectKey}` : undefined,
        }
    }
}
