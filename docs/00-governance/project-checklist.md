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

## Frontend Functionalization (Session 9)

- [x] Implement user authentication system (login/register/session)
- [x] Create auth-store with Zustand + localStorage persistence
- [x] Create AuthGuard component for protected routes
- [x] Migrate providers page from mock data to real store
- [x] Migrate workflows list page from mock data to real store
- [x] Implement workflow creation dialog
- [x] Complete workflow editor with load/save/run functionality
- [x] Create workflow-canvas-wrapper with full integration
- [x] Implement execution simulation engine
- [x] Migrate executions page to use real execution data
- [x] Add execution details dialog with steps and logs
- [x] Migrate dashboard to show real statistics
- [x] Update header with user info and logout functionality
- [x] Add auth-related i18n translations (zh/en)

## Real Database and Execution Engine Integration (Session 10)

- [x] Add password_hash field to app_user table in SQL schema
- [x] Add user_session table for session management
- [x] Update Prisma schema with UserSession model and passwordHash field
- [x] Create /api/auth/register endpoint with scrypt password hashing
- [x] Create /api/auth/login endpoint with session cookie
- [x] Create /api/auth/logout endpoint
- [x] Create /api/auth/me endpoint for session verification
- [x] Create lib/auth/utils.ts with hashPassword, verifyPassword, generateSessionId
- [x] Update auth-store.ts to call real auth APIs
- [x] Create /api/providers/[id] endpoint (GET/PUT/DELETE)
- [x] Create /api/providers/[id]/test endpoint for connection testing
- [x] Add test() method to OpenAICompatibleProvider
- [x] Update providers-store.ts to call real APIs
- [x] Update workflows-store.ts to call real APIs
- [x] Add runWorkflow method using /api/workflows/[id]/run
- [x] Update executions-store.ts to call real APIs with polling
- [x] Add DELETE method to /api/executions/[id]
- [x] Update workflow-canvas-wrapper.tsx to use runWorkflow
- [x] Update executions page with polling for running executions
