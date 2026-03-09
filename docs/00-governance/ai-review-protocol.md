# AI Review Protocol

## Purpose

Use this protocol when one agent or model reviews code produced by another.

## Read first

- `/docs/README.md`
- `/docs/00-governance/engineering-rules.md`
- `/docs/02-architecture/architecture.md`
- `/docs/01-product/style-guide.md`
- `/docs/04-platform/security.md`
- `/docs/04-platform/i18n-strategy.md`

## Review checklist

- Architecture drift
- Inconsistent naming or folder placement
- UI inconsistency
- Missing translation keys / hard-coded text
- Dangerous automation behavior
- Auth / permission weakness
- Provider abstraction leakage
- SQL migration or seed inconsistency
- Missing logging or missing error handling

## Output location

Append structured findings to `review-board.md`.

If nothing critical is found, explicitly write: `NO CRITICAL ISSUES FOUND`.
