---
name: mayrlabs-tool-linters
description:
  Enforces the zero-warning strategy for static analysis tools. Warnings are
  treated as Errors, and type assertions are heavily penalized.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Tools Doctrine: Linters

## Purpose

Linters are not suggestions. This doctrine enforces a strict compliance model,
treating type assertions and ignored warnings as technical debt.

## Audience

AI Agents resolving build errors, managing TypeScript configurations, or adding
linting pipelines.

## Core Rules & Constraints

### 1. Treat Warnings as Errors

- If a linter rules a warning (e.g., unused variable), treat it as a hard
  failure. Build pipelines (`npm run lint`) must fail on warnings.

### 2. Strict Bypass Rules

- NEVER use generic bypass flags in new code (`// @ts-ignore`,
  `// @ts-expect-error`, `// eslint-disable-line`) without an explicitly
  documented, multi-line comment above it explaining EXACTLY why the compiler is
  wrong and a fix cannot be natively supported.

### 3. TypeScript Strictly Enforced

- Do not use type assertions (`as unknown as Type`, or `any`).
- Force `strict: true` and `noImplicitAny: true` in `tsconfig.json`.

## Inputs & Outputs

- **Input**: Auditing code, scaffolding `.eslintrc`, `biome.json`, or fixing CI
  errors.
- **Output**: Clean code that passes analysis natively without explicit ignore
  tags.
