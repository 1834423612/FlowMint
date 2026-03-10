# Project Checklist

> Check off each completed item before moving to the next major item.

## Foundation

- [x] Confirm docs directory structure is present and readable
- [x] Initialize Next.js + TypeScript + Tailwind + shadcn/ui
- [x] Add Iconify and icon conventions
- [x] Add i18n foundation with `zh` and `en`
- [x] Create app shell layout and navigation
- [x] Create design tokens and UI primitives

## Core product pages

- [x] Dashboard skeleton
- [x] Workflows list page
- [x] Workflow editor shell
- [x] Execution history page
- [x] Provider settings page
- [x] Account and auth settings page

## Workflow system

- [x] Define workflow JSON schema
- [x] Define node type registry
- [x] Build ReactFlow-based editor skeleton
- [x] Build node config side panel
- [x] Build edge and validation behavior
- [x] Add workflow versioning strategy

## Execution engine

- [ ] Define runtime contracts
- [ ] Add Playwright integration layer
- [ ] Add Stagehand integration layer
- [ ] Add AI planning service interface
- [ ] Add execution logs and screenshots flow
- [ ] Add error handling and retry policy

## Data layer

- [x] Draft Prisma schema framework
- [x] Define SQL delivery rules
- [x] Create merged `/sql/schema.sql`
- [x] Create merged `/sql/seed.sql`
- [ ] Add initial example data rows

## Quality and governance

- [x] Start `agent-log.md`
- [x] Start `review-board.md`
- [x] Start `decision-log.md`
- [x] Complete first known-error self-correction pass (build + i18n + editor runtime)
- [x] Run first architecture review
- [x] Run first UI consistency review
- [x] Run first i18n review
