---
name: mayrlabs-internal-php-laravel
hidden: true
description: Extracted PHP / Laravel standards from MayR Labs GEMINI.md
license: MIT
metadata:
  author: MayR Labs
  version: '1.0.0'
---

# MayR Labs Internal: PHP (Laravel) Standards

- Prefer **imported classes over FQNs**
- Controllers must be thin:
  - Move logic to **Services / Actions**

## Validation

- Use Form Requests — no inline validation mess
