# SQL Directory

This folder stores both merged initialization SQL and optional feature-level incremental SQL.

## Expected layout

- `schema.sql` — merged bootstrappable schema
- `seed.sql` — merged safe starter data
- `ddl/` — feature-level schema pieces
- `dml/` — feature-level sample data pieces

Keep merged files current whenever database design changes.
