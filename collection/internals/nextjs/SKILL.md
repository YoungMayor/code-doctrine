---
name: mayrlabs-internal-nextjs
hidden: true
description: Extracted Next.js standards from MayR Labs GEMINI.md
---

# MayR Labs Internal: Next.js Standards

## File Structure (STRICT)

Each route must follow:

```plaintext
/route
  page.tsx
  _components/
  _hooks.ts
  _constants.ts
  _types.ts
  _utils.ts
```

## Rules

- `page.tsx` must be **thin** (composition only)
- Business logic → hooks or services
- Components:
  - Dumb (UI) vs Smart (logic) separation
  - As much as possible, always use data files at `@/lib/data/**.ts` to define
    data used in applications

## Rendering

- Prefer **Server Components by default**
- Use Client Components only when necessary:
  - interactivity
  - browser APIs

## SEO (MANDATORY)

- Every page must define:
  - `metadata`
  - proper titles & descriptions
- No lazy SEO. Ever.
