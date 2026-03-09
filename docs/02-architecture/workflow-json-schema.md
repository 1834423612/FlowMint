# Workflow JSON Schema — Framework

This document describes the conceptual shape, not a final frozen schema.

## Core entity

```json
{
  "id": "wf_xxx",
  "name": "Example Workflow",
  "version": 1,
  "status": "draft",
  "trigger": {
    "type": "manual"
  },
  "nodes": [],
  "edges": [],
  "metadata": {}
}
```

## Recommended node base shape

```json
{
  "id": "node_xxx",
  "type": "open_url",
  "label": "Open page",
  "position": { "x": 0, "y": 0 },
  "config": {},
  "runtime": {},
  "ui": {}
}
```

## Recommended edge base shape

```json
{
  "id": "edge_xxx",
  "source": "node_a",
  "target": "node_b",
  "type": "default",
  "condition": null
}
```

## MVP node categories

- browser navigation
- interaction
- waiting
- extraction
- condition / branching
- AI planning
- screenshot / evidence
- variable assignment

## Important rule

Schema should remain extensible. Do not freeze the structure too early.
