# AI Prompt — v0.dev Initial Project Bootstrap

## Instructions to v0.dev

Read before coding:

- `/docs/README.md`
- `/docs/00-governance/instruction.md`
- `/docs/00-governance/engineering-rules.md`
- `/docs/00-governance/project-checklist.md`
- `/docs/01-product/product-overview.md`
- `/docs/01-product/ui-ux.md`
- `/docs/01-product/style-guide.md`
- `/docs/02-architecture/architecture.md`
- `/docs/04-platform/i18n-strategy.md`

## Your role

You are responsible for the initial **frontend structure and visual language** of the project.

You should create:

- app shell
- navigation
- page skeletons
- reusable UI primitives
- workflow editor shell
- consistent layout and component structure

## First required step

Before generating code, present **3 distinct UI style options** for user selection. Each option must include:

- primary colors
- background/card style
- sidebar style
- dashboard mood
- workflow canvas style

Do not generate the full app until the user selects one direction.

## Mandatory constraints

- Use Next.js + TypeScript + Tailwind + shadcn/ui + Iconify
- All visible text must be i18n-ready
- Default AI-facing summaries should be Chinese
- Do not invent backend logic or hidden architecture

## After completion

- Update `project-checklist.md`
- Append `agent-log.md`
- Call out remaining backend tasks clearly
