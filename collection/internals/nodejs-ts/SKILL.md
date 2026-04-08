---
name: mayrlabs-internal-nodejs-ts
hidden: true
description: Extracted Node.js / TypeScript standards from MayR Labs GEMINI.md
license: MIT
metadata:
  author: MayR Labs
  version: '1.0.0'
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
