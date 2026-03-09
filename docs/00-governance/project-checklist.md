# Project Checklist

> Check off each completed item before moving to the next major item.

## Foundation

- [ ] Confirm docs directory structure is present and readable
- [ ] Initialize Next.js + TypeScript + Tailwind + shadcn/ui
- [ ] Add Iconify and icon conventions
- [ ] Add i18n foundation with `zh` and `en`
- [ ] Create app shell layout and navigation
- [ ] Create design tokens and UI primitives

## Core product pages

- [ ] Dashboard skeleton
- [ ] Workflows list page
- [ ] Workflow editor shell
- [ ] Execution history page
- [ ] Provider settings page
- [ ] Account and auth settings page

## Workflow system

- [ ] Define workflow JSON schema
- [ ] Define node type registry
- [ ] Build ReactFlow-based editor skeleton
- [ ] Build node config side panel
- [ ] Build edge and validation behavior
- [ ] Add workflow versioning strategy

## Execution engine

- [ ] Define runtime contracts
- [ ] Add Playwright integration layer
- [ ] Add Stagehand integration layer
- [ ] Add AI planning service interface
- [ ] Add execution logs and screenshots flow
- [ ] Add error handling and retry policy

## Data layer

- [ ] Draft Prisma schema framework
- [ ] Define SQL delivery rules
- [ ] Create merged `/sql/schema.sql`
- [ ] Create merged `/sql/seed.sql`
- [ ] Add initial example data rows

## Quality and governance

- [ ] Start `agent-log.md`
- [ ] Start `review-board.md`
- [ ] Start `decision-log.md`
- [ ] Run first architecture review
- [ ] Run first UI consistency review
- [ ] Run first i18n review
