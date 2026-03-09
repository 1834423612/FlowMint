# Tech Stack

## Core

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Iconify

## Browser automation

- Playwright
- Stagehand

## Data

- MySQL 8.4
- Prisma ORM

## Storage

- Cloudflare R2

## Optional asynchronous execution

- BullMQ preferred as the first queue option if needed
- RabbitMQ not preferred for initial MVP unless requirements become much broader

## Internationalization

- `next-intl` recommended
- translation resources managed under version-controlled language files
- future-friendly for tools like Tolgee or Crowdin

## AI provider abstraction

- OpenAI-compatible providers
- Anthropic-compatible integration where needed
- OpenRouter as an optional provider entry
