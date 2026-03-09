# Prisma Schema Framework

> Whitepaper / development frame. This is intentionally flexible and non-final.

## Goal

Provide a Prisma-first data model that maps cleanly to MySQL 8.4 and can evolve without forcing disruptive rewrites.

## Modeling principles

- use stable primary keys
- separate mutable workflow metadata from immutable version snapshots
- keep auth and SSO identities decoupled from the user core
- keep provider connections abstracted
- keep execution evidence normalized enough for querying, but not over-fragmented

## Suggested model groups

### Identity group
- `User`
- `AuthIdentity`
- `UserSession` (optional later)
- `UserPreference`

### Provider group
- `AiProviderConnection`
- `ProviderCredentialRef`
- `ProviderModelPreference`

### Workflow group
- `Workflow`
- `WorkflowVersion`
- `WorkflowTag` (optional later)

### Execution group
- `WorkflowRun`
- `WorkflowRunStep`
- `RunArtifact`
- `RunVariableSnapshot` (optional later)

### Governance group
- `ReviewRecord`
- `DecisionRecord` (optional if mirrored from docs later)

## Suggested relationship direction

- one `User` → many `AuthIdentity`
- one `User` → many `Workflow`
- one `Workflow` → many `WorkflowVersion`
- one `WorkflowVersion` → many `WorkflowRun`
- one `WorkflowRun` → many `WorkflowRunStep`
- one `WorkflowRun` → many `RunArtifact`

## Important design cautions

- do not tightly bind Prisma enum values to temporary UI wording
- do not store raw provider secrets in broad tables if a safer secret reference mechanism is available
- do not let editor-only transient state pollute core workflow storage
- keep room for future queue/job records without breaking run history
