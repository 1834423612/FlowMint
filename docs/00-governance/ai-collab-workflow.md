# AI Collaboration Workflow

## Core sequence

1. User or planning agent defines the target milestone
2. Assigned agent reads relevant docs
3. Agent implements only its scope
4. Agent updates checklist and log
5. Another model reviews
6. Fixes are applied
7. Decision log is updated if architecture or tradeoffs changed

## Typical flow

- `v0.dev` → UI shell / pages / visual editor surface
- `Codex or Copilot` → backend logic / schema / engine / services
- `Another model review pass` → architecture, security, and consistency review
- `User` → approves direction or requests adjustment

## Handoff rules

Every handoff must answer:

- What is done
- What files changed
- What remains
- What risks exist
- Whether review is required
