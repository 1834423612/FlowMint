# ReactFlow Editor Framework

> Whitepaper / development frame. This is intentionally flexible and non-final.

## Goal

Build a ReactFlow-based workflow editor that can evolve from MVP to a larger automation design surface without destructive rewrites.

## Suggested module split

- `features/workflows/editor/`
  - `canvas/`
  - `nodes/`
  - `edges/`
  - `panels/`
  - `hooks/`
  - `registry/`
  - `validators/`
  - `serializers/`

## Suggested responsibilities

### Canvas
- ReactFlow wrapper
- viewport state
- selection state
- drag/drop insertion
- keyboard shortcuts

### Node registry
- maps node type → UI component → config schema → runtime type
- avoids hard-coded switch sprawl
- enables later plugin-like expansion

### Config panel
- form renderer by node schema
- validation surface
- translation-aware labels
- future support for advanced and raw JSON modes

### Validation layer
- graph shape checks
- required field checks
- unsupported edge checks
- warning vs blocking distinction

### Persistence boundary
- local unsaved editor state
- normalized workflow JSON output
- future diff/version support

## Future-safe extension points

- subflows
- templates
- shared variables
- environment profiles
- collaboration metadata
- comments / review markers

## Non-goals for initial freeze

- do not over-design plugin APIs too early
- do not hard-code complex collaboration assumptions into MVP editor state
- do not bind ReactFlow component details directly into DB schema
