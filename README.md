# FlowMint

This package is meant to be copied into the project repository root.

Recommended layout:

- `/docs` for product, architecture, AI collaboration, and engineering rules
- `/sql` for merged SQL initialization files and feature-level SQL increments

Use `/docs/README.md` as the entry point for all AI agents.

## Backend Status (Implemented)

The project now includes a working backend/system-logic foundation while keeping UI unchanged.

- Data layer: Prisma ORM + MySQL 8.4 schema (`prisma/schema.prisma`)
- DB client: project-local generated Prisma client (`generated/prisma`) via `lib/db/prisma.ts`
- API routes:
	- `GET/POST /api/workflows`
	- `GET/PUT/DELETE /api/workflows/[id]`
	- `POST /api/workflows/[id]/run`
	- `GET /api/executions`
	- `GET /api/executions/[id]`
	- `GET/POST /api/providers`
- Runtime engine: `lib/runtime/workflow-runtime.ts`
- Task runner: `lib/execution/task-runner.ts`
- Browser integration:
	- Playwright: `lib/browser/playwright-runner.ts`
	- Stagehand fallback adapter: `lib/browser/stagehand-runner.ts`
- AI provider abstraction:
	- Provider interface: `lib/providers/types.ts`
	- OpenAI-compatible client: `lib/providers/openai-compatible.ts`
	- Default provider factory: `lib/providers/factory.ts`
- Storage adapter: Cloudflare R2-compatible S3 client in `lib/storage/r2.ts`

## Runtime Node Support

The runtime currently supports the required node set:

- `OpenURL`
- `Click`
- `Type`
- `Wait`
- `Extract`
- `Screenshot`
- `Condition`
- `AIPlan`

## Reliability Features

- TypeScript types for runtime, provider, storage, and API contracts
- Execution status lifecycle (`queued`, `running`, `success`, `failed`, `cancelled`)
- Error handling in API routes and task runner
- Step-level logs in runtime execution
- Retry wrapper for node execution (`retries` config)

## Setup Notes

1. Generate Prisma client:
	 - `pnpm exec prisma generate`
2. Build check:
	 - `pnpm build`

For SQL initialization files, continue using:

- `sql/schema.sql`
- `sql/seed.sql`
