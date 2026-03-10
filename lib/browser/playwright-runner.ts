import type { BrowserSession } from "@/lib/runtime/types"

export async function createPlaywrightSession(): Promise<BrowserSession> {
    const { chromium } = await import("playwright")
    const browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()

    return {
        open: async (url) => {
            await page.goto(url)
        },
        click: async (selector) => {
            await page.click(selector)
        },
        type: async (selector, value) => {
            await page.fill(selector, value)
        },
        wait: async (ms) => {
            await page.waitForTimeout(ms)
        },
        extract: async (selector, attribute) => {
            if (attribute) {
                return page.getAttribute(selector, attribute)
            }
            return page.textContent(selector)
        },
        screenshot: async () => {
            return page.screenshot()
        },
        close: async () => {
            await browser.close()
        },
    }
}
