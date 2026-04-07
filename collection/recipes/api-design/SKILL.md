---
name: mayrlabs-api-design
description: Standardizes RESTful boundaries, GraphQL schemas, JSON:API payloads, routing principles, and robust versioning patterns for MayR Labs projects.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Recipe Doctrine: API Design

## Purpose

To maintain scalable, predictable, and self-documenting APIs. Poorly designed APIs result in massive frontend technical debt. This doctrine enforces rigid REST/GraphQL resource standards.

## Audience

AI Agents designing API specifications, routing files, or DTO payloads.

## Core Rules & Constraints

### 1. RESTful Paths

- Use nouns, not verbs (`/users` not `/getUsers`).
- URLs must be entirely lowercase. Use hyphens for multi-word segments (`/user-profiles` not `/userProfiles`).
- Nesting must not exceed one level deep (`/users/{id}/orders/{id}` -> if it goes deeper, flatten the API into `/orders/{id}?user={id}`).

### 2. Standardized JSON Responses

- Responses MUST maintain a predictable structure. Do not return raw arrays or plain strings at the root level.
- **REST Envelope**:

```json
{
  "data": { ... },
  "meta": { "pagination": ... },
  "errors": null
}
```

### 3. Idempotency & Verbs

- `POST` is NOT idempotent. `PUT` and `PATCH` are. Do not use `POST` for update operations.
- `DELETE` must only take an identifier in the URI and should not require a request body.

## Inputs & Outputs

- **Input**: Generating OpenAPI specs, backend routes, or controller scaffolding.
- **Output**: Predictable, properly wrapped JSON endpoints following HTTP specification exactly.
