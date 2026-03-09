# Database SQL Deliverables

## Purpose

Every time database design changes, the project must produce both design documentation and executable SQL deliverables.

## Required outputs for each database-related change

1. A database design note or updated framework doc under `/docs/03-data/`
2. A feature-level DDL SQL file if schema changed
3. A feature-level DML SQL file if starter/example data changed
4. A merged `/sql/schema.sql`
5. A merged `/sql/seed.sql`

## Recommended folder convention

- `/sql/ddl/feature-name.sql`
- `/sql/dml/feature-name-seed.sql`
- `/sql/schema.sql`
- `/sql/seed.sql`

## Rules

- `schema.sql` should be bootable for first-time initialization
- `seed.sql` should contain safe example rows or starter defaults
- feature-level SQL files should explain the purpose of the change
- sample data should help local development and demo bootstrapping
- avoid production secrets, real user data, or risky defaults

## Required review questions

- Does Prisma framework still match the SQL intent?
- Does merged `schema.sql` include the new DDL?
- Does merged `seed.sql` include compatible sample data?
- Will a fresh environment initialize successfully?
