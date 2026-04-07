---
name: mayrlabs-frontend-design
description:
  Architecture standards for separating UI and state, managing atomic
  components, Semantic CSS tokens, and unifying frontend boundaries.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Recipe Doctrine: Frontend Design

## Purpose

To standardize the creation of enterprise frontend codebases that scale.
Eliminates hardcoded CSS, bloated UI components, and deeply prop-drilled state
architectures.

## Audience

AI Agents scaffolding structural templates and global component libraries for
web/mobile apps.

## Core Rules & Constraints

### 1. Semantic Token Binding

- **Banned**: Hardcoded hex values or utility colors in business logic (e.g.,
  `text-red-500` or `#FF0000`).
- **Enforced**: Use semantic variables that respond to theme logic (e.g.,
  `text-error`, `bg-destructive`, `text-foreground`, `bg-card`).

### 2. Component Structure (Atomic)

- Maintain a strict hierarchy of components: `atoms` (basic inputs, buttons),
  `molecules` (search bars, grouped inputs), and `organisms` (navbars, cards).
- Never allow an `atom` to fetch its own data. Data fetching must happen at the
  `page` or global `organism` bound level.

### 3. File Scoping

- Always co-locate component types, styles, and utilities:

```plaintext
/ComponentName
  index.tsx       # Export mapping
  ComponentName.tsx # Main logic
  _styles.ts      # Component specific styles/CVAs
  _types.ts       # Interfaces
```

## Inputs & Outputs

- **Input**: Generating new UI components or extracting templates.
- **Output**: Themed, semantic UI trees separated from data hydration logic.
