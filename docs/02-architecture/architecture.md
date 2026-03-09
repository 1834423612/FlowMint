# Architecture

## High-level approach

Start with a single Next.js app containing:

- frontend pages
- route handlers / API layer
- modular execution engine interfaces
- persistence layer
- provider abstraction
- asset storage integration

## Core modules

- `app/` — routes and page shells
- `components/` — shared UI
- `features/workflows/` — workflow UI and orchestration
- `features/executions/` — run history, logs, screenshots
- `lib/providers/` — AI provider abstraction
- `lib/runtime/` — workflow runtime contracts
- `lib/browser/` — Playwright + Stagehand integration
- `lib/db/` — Prisma data access
- `lib/storage/` — R2 integration
- `messages/` — i18n resources

## Optional later split

The runtime may later move into:

- a worker service
- a queue-backed execution subsystem
- isolated browser pools

This future split must not require a full rewrite of the app.
