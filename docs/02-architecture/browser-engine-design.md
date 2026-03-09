# Browser Engine Design

## Goal

Provide a modular execution runtime that combines deterministic browser control with AI-assisted planning.

## Layered view

1. workflow runner
2. node executor dispatcher
3. Playwright controller
4. Stagehand planning / semantic assistance
5. logging / screenshots / persistence

## Execution flow

- load workflow version
- validate graph
- resolve runtime inputs
- execute node-by-node
- collect logs
- capture screenshots when configured or on failure
- persist status and artifacts

## Principle

Prefer deterministic selectors and stored config first.
Use AI planning when:
- selector resolution fails
- semantic understanding is needed
- extraction or recovery needs flexible reasoning
