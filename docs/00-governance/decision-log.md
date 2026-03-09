# Decision Log

> Record durable architecture or delivery decisions here.

## Template

```md
## Decision YYYY-MM-DD
- Title:
- Status: proposed / accepted / replaced / deprecated
- Context:
- Decision:
- Consequences:
- Related files:
```

## Entries

### Decision 2026-03-08
- Title: Start as single Next.js app and reserve worker split
- Status: accepted
- Context: MVP speed matters, but browser execution may later need worker isolation and queueing.
- Decision: Keep UI and API in one Next.js app first, but design runtime interfaces so execution can move into a worker later.
- Consequences: Faster initial delivery; future extraction work should be manageable.
- Related files: `02-architecture/architecture.md`, `02-architecture/browser-engine-design.md`
