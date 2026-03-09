# i18n Strategy

## Goal

Make the product enterprise-ready for localization from the start.

## Initial languages

- Chinese (`zh`)
- English (`en`)

## Mandatory rules

- no hard-coded visible UI strings
- group translation keys by domain
- use a translation library suitable for Next.js app router
- keep message files editable for future localization workflows

## Recommended structure

- `/messages/zh.json`
- `/messages/en.json`

## Recommended approach

- `next-intl` for runtime integration
- keep keys stable and descriptive
- avoid using full English sentences as keys
- maintain namespace groups like:
  - `common.*`
  - `nav.*`
  - `workflow.*`
  - `execution.*`
  - `settings.*`

## Future-friendly localization tooling

Design the message structure so future integration with tools like **Tolgee** or **Crowdin** is easy.

## AI language policy

- default AI status notes shown to the user: Chinese
- code and internal schema names: whichever language is most effective, usually English
