---
name: mayrlabs-tailwindcss
description:
  TailwindCSS conventions enforcing semantic configuration, banning arbitrary
  magic values `[]`, and promoting generic UI abstraction over class-soup.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs TailwindCSS Doctrine

## Purpose

To treat Tailwind as a Design System generator rather than inline CSS. Prevents
messy HTML class-soups and explicitly enforces standard utility values over
magic numbers.

## Audience

AI Agents scaffolding UI designs, layouts, or component wrappers using
TailwindCSS.

## Core Rules & Constraints

### 1. No Arbitrary Values

- **Banned**: Do not use arbitrary brackets unless fundamentally unavoidable for
  external positioning (e.g., `h-[213px]`, `text-[13px]`, `bg-[#f4f4f4]`).
- Hardcode semantic configurations inside `tailwind.config.ts`. If the design
  dictates a unique spacing step or color, add it to the theme instead of using
  random brackets.

### 2. Component Extraction

- When styling highly reusable structural components (like a complex Button or
  Input field), avoid pasting 20 classes into the JSX directly.
- Use component frameworks like `cva` (class-variance-authority) or Tailwind
  `@apply` strings in central CSS for generic base elements if componentizing is
  not viable.

### 3. Responsive Order

- Always write mobile-first, and append breakpoint variants in order of
  increasing size: `mb-4 md:mb-6 lg:mb-8`.
- Group layout constraints before typography, and backgrounds/colors last:
  `flex items-center text-lg font-bold bg-white`.

## Inputs & Outputs

- **Input**: Generating Tailwind template strings, `className` properties.
- **Output**: Predictable, bracket-free, logically ordered generic CSS tokens.
