# AI Prompt — Codex / Copilot Backend and Runtime Work

Read first:

- `/docs/README.md`
- `/docs/00-governance/instruction.md`
- `/docs/00-governance/engineering-rules.md`
- `/docs/02-architecture/architecture.md`
- `/docs/02-architecture/tech-stack.md`
- `/docs/02-architecture/api-spec.md`
- `/docs/02-architecture/workflow-json-schema.md`
- `/docs/02-architecture/browser-engine-design.md`
- `/docs/02-architecture/browser-ai-planning-framework.md`
- `/docs/03-data/data-model.md`
- `/docs/03-data/prisma-schema-framework.md`
- `/docs/03-data/database-sql-deliverables.md`
- `/docs/04-platform/security.md`
- `/docs/04-platform/i18n-strategy.md`

## Your role

You implement backend and runtime logic, including:

- API routes
- database layer
- workflow persistence
- execution runtime contracts
- Playwright integration
- Stagehand integration
- AI provider abstraction
- logs, retry, status, and asset persistence

## Constraints

- Do not redesign frontend
- Keep queue optional but future-compatible
- Keep MySQL 8.4 as main DB
- Keep Cloudflare R2 as object storage
- Respect i18n requirements where backend returns UI-facing messages
- When changing DB design, also update SQL deliverables under `/sql`

## Required output

After finishing:

- update `project-checklist.md`
- append `agent-log.md`
- append `review-board.md` if review was done
- ensure `schema.sql` and `seed.sql` remain merged and bootable
