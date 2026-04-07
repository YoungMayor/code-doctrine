---
name: mayrlabs-error-handling
description:
  Comprehensive framework for generating global error boundaries, custom
  exception logging pipelines, and non-blocking UX wrappers.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Recipe Doctrine: Error Handling

## Purpose

To eliminate the toxic pattern of silent failures and generic "Something went
wrong" messages. Errors must be gracefully captured, logged securely, and
explained to the user clearly.

## Audience

AI Agents setting up backend exception chains, logging mechanisms, or frontend
Error Boundaries.

## Core Rules & Constraints

### 1. Differentiate Error Types

- **Operational Errors**: Predictable failures (e.g., Validation, Unauthorized).
  Return specific HTTP status codes (400, 401, 403, 404). Supply contextual
  messages to the user.
- **Programmer/System Errors**: Unpredictable failures (e.g., Database drops,
  Null Pointers). Return a generic 500 cleanly, DO NOT leak the stack trace to
  the user, but ALWAYS log the trace heavily internally.

### 2. Centralized Handling

- Never scatter standard error formatting across controllers. Use a Global
  Exception Handler (e.g., Next.js `error.tsx`, Laravel `Handler.php`, NestJS
  Exception Filters) to trap all unhandled exceptions logically.

### 3. User Recovery (Frontend)

- A frontend error must provide a recovery vector (e.g., "Retry Request", "Go
  Back"). Do not force the user to hard-refresh a white screen.

## Inputs & Outputs

- **Input**: Resolving bugs or scaffolding architecture middleware.
- **Output**: Secure, centralized traps that log thoroughly and fail cleanly.
