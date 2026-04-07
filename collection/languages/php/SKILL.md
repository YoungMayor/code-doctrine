---
name: mayrlabs-language-php
description:
  Senior-level PHP standards enforcing strict typing, modern PHP 8+ features,
  and clean object-oriented code patterns.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs PHP Doctrine

## Purpose

To guide the AI in generating highly optimized, modern, and standard PHP code.
This skill eliminates junior-level mistakes and strictly enforces senior
engineering practices across any PHP environment, independent of frameworks.

## Audience

AI Agents scaffolding, migrating, or refactoring `.php` files.

## Core Rules & Constraints

### 1. Strict Typing & Signatures

- **Always declare strict types**: Every PHP file must begin with
  `declare(strict_types=1);`.
- **Explicit Types**: Use scalar type hints for all method arguments and
  strictly declare return types (`int`, `string`, `void`, `?array`, etc.).
- Avoid `mixed` unless absolutely necessary (and justified).

### 2. Modern PHP (8.0+)

- Heavily leverage modern PHP features:
  - **Enums**: Over arrays or constants for discrete states.
  - **Constructor Property Promotion**: To avoid boilerplate class properties.
  - **Match Expressions**: Over long `switch` statements.
  - **Nullsafe Operator**: (`?->`) to prevent noisy null checks.
  - **Named Arguments**: For functions with multiple optional parameters.

### 3. Clean Code Architecture

- **Prefer Imported Classes**: Always use the `use` statement at the top of the
  file instead of scattering Fully Qualified Names (FQNs) inline.
- **Thin Core Logic**: Whether it's a Controller or an entry point, keep it
  thin. Move heavy business logic into dedicated Service or Action classes.
- **Validation**: Never validate inputs inline. Abstract validation logic (e.g.,
  using Form Requests, dedicated Validator classes, or DTOs).

### 4. Safety & Error Handling

- **No Globals**: Never use the `global` keyword or superglobals like `$_POST`,
  `$_GET`, `$_SESSION`.
- **Meaningful Exceptions**: Throw specific Exception classes (e.g.,
  `DomainException`, `InvalidArgumentException`) rather than the base
  `\Exception` class.
- **Never Silently Catch**: Do not wrap blocks in a `try/catch` without handling
  or explicitly logging the failure.

## Examples & References

Extensive code examples outlining junior mistakes versus strict modern
architectures have been pulled out into the `examples` directory:

- [01: Clean Architecture & Modern PHP Patterns](./examples/01-clean-architecture.md)

## Inputs & Outputs

- **Input**: Implicitly active on all `.php` files or when writing backend
  scripts.
- **Output**: Typed, modern, and thoroughly optimized PHP code adhering to PSR
  standards.
