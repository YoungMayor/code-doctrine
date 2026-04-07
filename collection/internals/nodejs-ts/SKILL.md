---
name: mayrlabs-internal-nodejs-ts
hidden: true
description: Extracted Node.js / TypeScript standards from MayR Labs GEMINI.md
---

# MayR Labs Internal: Node.js / TypeScript Standards

- TypeScript is **not optional**
- Avoid `any` unless absolutely necessary (and justified)

## Structure

- Use layered architecture:
  - Controllers
  - Services
  - Repositories

## Errors

- Never silently fail
- Always:
  - log errors
  - return meaningful responses
