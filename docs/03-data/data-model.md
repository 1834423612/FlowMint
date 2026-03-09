# Data Model Overview

## Main entities

- user
- auth_identity
- provider_account
- workflow
- workflow_version
- workflow_run
- workflow_run_step
- asset
- environment_profile
- review_note

## Notes

- `auth_identity` allows future SSO binding expansion
- `provider_account` stores provider config references, not raw secrets in unsafe plain flow
- `workflow_version` keeps editor output and immutable run references
- `workflow_run` tracks execution lifecycle
- `asset` tracks screenshots or exported evidence
