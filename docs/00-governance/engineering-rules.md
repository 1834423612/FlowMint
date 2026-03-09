# Engineering Rules

## 1. Scope discipline

- v0.dev should focus on UI, layout, components, skeleton screens, and editor shell.
- Codex / Copilot should focus on routes, services, schemas, data access, runtime, integrations, and type-safe logic.
- Review passes should explicitly look for architecture drift, inconsistent naming, missing i18n, and unsafe automation behavior.

## 2. Completion discipline

For every finished item:

- Mark it in `project-checklist.md`
- Append a structured summary in `agent-log.md`
- If a tradeoff was introduced, document it in `decision-log.md`
- If another model reviewed it, append the result to `review-board.md`

## 3. Logging format

Every `agent-log.md` entry must include:

- Date
- Agent / model name
- Scope
- What was completed
- Files created
- Files modified
- Open risks
- Next recommended task

The goal is that another model can understand project status in seconds.

## 4. Review discipline

Major features must receive at least one review pass from another model or a distinct review session.

Review must check:

- architecture compliance
- naming consistency
- UI consistency
- i18n compliance
- auth or permission risks
- dangerous browser actions
- provider abstraction correctness
- SQL migration and seed consistency

## 5. i18n discipline

- Never hard-code visible UI text.
- Use a translation key system.
- Start with `zh` and `en`.
- Keep messages in organized namespaces for future translation platforms such as Tolgee or Crowdin.

## 6. SQL delivery discipline

Whenever database design changes:

1. Add or update feature-level SQL files
2. Reflect the change in Prisma schema framework or final Prisma model
3. Merge all final DDL into `/sql/schema.sql`
4. Merge all starter or demo DML into `/sql/seed.sql`
5. Keep example rows safe, generic, and useful for bootstrapping

## 7. AI output language

- User-facing progress, review summaries, and implementation notes should default to Chinese
- Code and type definitions may remain English
- Long architecture or protocol docs may use mixed Chinese + English if that is clearer

## 8. Queue stance

- Queue is optional for MVP
- Internal interfaces must reserve a future queue/worker split
- Do not hard-wire execution logic into UI-only code
