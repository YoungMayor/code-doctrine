---
name: mayrlabs-nextjs
description:
  Strict Next.js conventions governing RSC boundaries, server actions, route
  architectures, and avoiding invalid hydration traps.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Next.js Doctrine

## Purpose

To ensure Next.js applications remain highly performant by respecting the Server
Component paradigm, isolating client-side boundaries properly, and standardizing
data fetching patterns.

## Audience

AI Agents generating App Router structures, layouts, and pages.

## Core Rules & Constraints

### 1. File & Server Boundaries (RSC)

- By default, all components are React Server Components (RSC). Do not
  blanket-add `'use client'`.
- Push `'use client'` to the **absolute edges** of the component tree (e.g.,
  interactive buttons, forms). The `page.tsx` itself must almost always remain a
  thin, server-only composition shell.
- NEVER pass non-serializable props (e.g., functions, DOM elements) from a
  Server Component to a Client Component.

### 2. Async API Usage (Next 15+)

- Ensure correct usage of Next.js Next 15+ Async patterns. APIs like
  `cookies()`, `headers()`, `params`, and `searchParams` MUST be awaited.
- **Example**: `const cookieStore = await cookies();`

### 3. Data Patterns & Handlers

- Prefer Server Actions (`'use server'`) over creating `route.ts` handlers when
  dealing with form mutations or direct database updates from the UI.
- Use `Promise.all` in Server Components to avoid data waterfalls when fetching
  independent queries.

### 4. Semantic Optimization

- Enforce `next/image` over generic `<img>` tags always.
- Implement explicit `generateMetadata` functions on dynamic pages over generic
  `<head>` modifications.

## Inputs & Outputs

- **Input**: Reconciling `app/**` routes in Next.js.
- **Output**: SSR-optimized, correctly boundary-delineated App-router files.
