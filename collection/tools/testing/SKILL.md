---
name: mayrlabs-tool-testing
description:
  Standardizes TDD philosophy, enforcing unit test coverage over business logic,
  mocking boundaries, and CI integration.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Tools Doctrine: Testing

## Purpose

"If you can't test it, you don't understand it." This doctrine actively enforces
test generation for all critical logic, moving the test suite out of the "nice
to have" category.

## Audience

AI Agents creating features, debugging complex issues, or configuring Test
Runners (Vitest, Jest, PHPUnit, Pytest).

## Core Rules & Constraints

### 1. Test The Concept, Not The Implementation

- Writing tests that rigidly bind to private internal state is banned.
- Test only public inputs and outputs. If you refactor the internal workings of
  a function, the test should still pass.

### 2. Mocking Boundaries

- Use dependency injection to pass downstream services (like Databases or HTTP
  clients) to business logic, allowing easy isolated mock injection.
- Do not mock the framework internals unless explicitly required (e.g., routing
  contexts).

### 3. AAA Pattern

- Organize tests using `Arrange, Act, Assert` or `Given, When, Then` block
  structures explicitly via comments.

## Inputs & Outputs

- **Input**: "Add a feature for X," "Fix bug in Y."
- **Output**: Will always co-generate a relevant `.spec.ts`, `.test.ts`, or test
  class validating the newly added code.
