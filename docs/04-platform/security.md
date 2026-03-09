# Security

## Core principle

Browser automation power must not become unrestricted destructive capability.

## Minimum safety rules

- no shell execution as part of normal browser workflows
- no server file deletion logic in workflow nodes
- no secret leakage through logs
- no unsafe provider key exposure to frontend
- destructive account actions should require explicit node configuration and confirmation strategy

## Browser automation constraints

- maintain workflow scope boundaries
- keep evidence for important actions
- log failures and unexpected recoveries
- prefer allowlist-style operational boundaries for sensitive nodes

## Review priorities

- auth / permission bugs
- workflow access isolation
- unsafe prompt-to-action execution
- accidental exposure of screenshots or assets
- insecure SQL defaults or weak seed users
