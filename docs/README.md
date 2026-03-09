# Docs Index

> Source of truth for product direction, architecture, UI consistency, AI collaboration, and database delivery rules.

## Reading order for all AI agents

1. `00-governance/instruction.md`
2. `00-governance/engineering-rules.md`
3. `00-governance/project-checklist.md`
4. `01-product/product-overview.md`
5. `01-product/ui-ux.md`
6. `01-product/style-guide.md`
7. `02-architecture/architecture.md`
8. `02-architecture/tech-stack.md`
9. `02-architecture/api-spec.md`
10. `02-architecture/workflow-json-schema.md`
11. `02-architecture/browser-engine-design.md`
12. `03-data/data-model.md`
13. `03-data/prisma-schema-framework.md`
14. `03-data/database-sql-deliverables.md`
15. `04-platform/i18n-strategy.md`
16. `04-platform/security.md`

## Directory map

- `00-governance/` — instructions, checklists, logs, AI prompts, review protocol, delivery rules
- `01-product/` — product positioning, core features, UX, style language
- `02-architecture/` — system architecture, API, editor framework, workflow schema, AI planning framework
- `03-data/` — data model, Prisma framework, SQL delivery policy
- `04-platform/` — i18n, auth/provider strategy, security constraints

## Mandatory workflow

- Read docs before coding
- Do not invent architecture outside docs
- Keep UI consistent with `01-product/style-guide.md`
- After every completed task:
  - update `00-governance/project-checklist.md`
  - append `00-governance/agent-log.md`
  - if needed append `00-governance/decision-log.md`
  - if reviewing append `00-governance/review-board.md`
