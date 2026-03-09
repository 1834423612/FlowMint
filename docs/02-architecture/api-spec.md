# API Spec

## Response envelope

```json
{
  "success": true,
  "data": {},
  "error": null,
  "meta": {}
}
```

## Initial route groups

- `/api/auth/*`
- `/api/account/*`
- `/api/providers/*`
- `/api/workflows/*`
- `/api/executions/*`
- `/api/assets/*`

## Design rules

- keep route naming resource-oriented
- keep errors structured
- return stable status fields for workflow and execution lifecycle
- avoid leaking provider-specific internals directly to UI
