---
name: mayrlabs-framework-nuxtjs
description:
  Nuxt 3 strict conventions prioritizing auto-imports, Server API route
  abstraction, and modular directory structures.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Nuxt.js Doctrine

## Purpose

To embrace Nuxt 3's convention-over-configuration paradigms fully. Prevents
anti-patterns like heavy client fetching and fights the default auto-import
system.

## Audience

AI Agents scaffolding Nuxt 3 applications or optimizing universal SSR/SSG
properties.

## Core Rules & Constraints

### 1. Leverage Auto-Imports

- Do not manually import Vue primitives (`ref`, `computed`, `watch`) or custom
  components from `~/components`. The Nuxt engine auto-imports them.
- Always name composables `use[Feature]` and place them in the `~/composables/`
  directory for auto-import.

### 2. Universal Data Fetching

- For initial page loads, ALWAYS use `useAsyncData` or `useFetch`.
- **Banned**: Standard `$fetch` or Axios without a caching wrapper directly
  inside a component's top-level setup. This will fire twice (once on server,
  once on client) causing hydration mismatch and wasted cycles.

### 3. Server API Nitro Layer

- Keep backend logic entirely in `~/server/api/`.
- Handle specific HTTP methods securely using defineEventHandler and readBody.

## Inputs & Outputs

- **Input**: Nuxt `.vue` pages, layouts, composables, or `nuxt.config.ts`.
- **Output**: SSR-safe, correctly hydrated, and auto-imported Nuxt 3
  architecture.
