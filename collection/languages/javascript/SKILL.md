---
name: mayrlabs-language-javascript
description:
  Enforces senior-level, strict JavaScript conventions. This skill must be used
  whenever writing, reviewing, or refactoring JavaScript code to ensure robust,
  modern, and scalable patterns.
progressive_disclosure:
  entry_point:
    summary: 'Strict guidelines for production-grade JavaScript.'
    when_to_use:
      'For any JS-specific files. Bypasses rudimentary JS patterns in favor of
      functional, clean architecture.'
    quick_start:
      '1. Follow ESM 2. Use pure functions 3. Implement robust error handling.'
  references:
    - examples.md
---

# JavaScript Code Doctrine

JavaScript must be treated as a strict, production-ready language. We avoid
historical JS quirks and default to modern, deterministic, and safe patterns.

## The Iron Law

**No silent failures, no implicit globals, no parameter mutation.**

## Core Principles

1. **Modern Context (ESM & strict):** Always use ES Modules (`import`/`export`).
   Always operate in strict mode (inherent in ESM).
2. **Immutability First:** Never mutate function parameters. Treat all inputs as
   read-only. Prefer `const` over `let`. Never use `var`. Use array/object
   spread operators to create new references instead of mutating existing ones.
3. **Pure Functions:** Functions should be deterministic. If a function requires
   external state, inject it as a dependency.
4. **Predictable Types (Runtime):** Even without TS, ensure objects are
   structured consistently. Avoid dynamically adding/removing object keys if
   possible.

## Functional & Structural Rules

- **Destructuring:** Always destructure properties early for clarity.
- **Fail Fast:** Use Guard Clauses to return early and reduce indentation.
- **Async/Await:** Promises `.then()` blocks are banned. Always use
  `async/await` encased in explicit `try/catch` or safe wrapper functions to
  handle rejections cleanly.
- **Iteration:** Banish standard `for` loops unless optimizing a critical
  raw-performance bottleneck. Use declarative array methods (`.map`, `.filter`,
  `.reduce`).

## Red Flags \[BANNED\]

- `==` (Always use `===`).
- Modifying `prototype` of built-in objects.
- Magic numbers/strings without descriptive constant variables.
- Using `delete` on object properties (use rest destructuring to omit keys
  instead).
