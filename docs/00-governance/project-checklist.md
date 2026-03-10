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

- [x] Define runtime contracts
- [x] Add Playwright integration layer
- [x] Add Stagehand integration layer
- [x] Add AI planning service interface
- [x] Add execution logs and screenshots flow
- [x] Add error handling and retry policy
- [x] Support running current editor graph immediately via API

## Data layer

- [x] Draft Prisma schema framework
- [x] Define SQL delivery rules
- [x] Create merged `/sql/schema.sql`
- [x] Create merged `/sql/seed.sql`
- [x] Add initial example data rows

## Quality and governance

- [x] Start `agent-log.md`
- [x] Start `review-board.md`
- [x] Start `decision-log.md`
- [x] Complete first known-error self-correction pass (build + i18n + editor runtime)
- [x] Run first architecture review
- [x] Run first UI consistency review
- [x] Run first i18n review
- [x] Unify destructive-action confirmation and remove key hardcoded UI copy
