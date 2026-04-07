---
name: mayrlabs-framework-laravel
description:
  Strict rules for Laravel enforcing Form Requests, thin controllers,
  externalized actions/services, and standard Eloquent relationships.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Laravel Doctrine

## Purpose

To prevent the common "God Controller" anti-pattern in Laravel by pushing domain
logic into Services/Actions and strict validation into Form Requests.

## Audience

AI Agents scaffolding Laravel backend structures and APIs.

## Core Rules & Constraints

### 1. Thin Controllers

- Controllers must ONLY handle:
  1. Receiving the request.
  2. Dispatching it to an Action/Service class.
  3. Returning a standard response (or Resource).
- **Zero Business Logic** inside the Controller.

### 2. Form Requests

- Never use inline validation (`$request->validate([...])`) in the Controller.
- Always generate and inject a dedicated Form Request class
  (`php artisan make:request`) to house authorization and validation rules.

### 3. Eloquent Standards

- Avoid massive N+1 query problems. Always use `->with('relation')` when
  iterating over collections displaying related models.
- Abstract complex builder logic into local Model Scopes (`scopeActive($query)`)
  instead of polluting the service layer with chained `where` clauses.

## Inputs & Outputs

- **Input**: Generating `app/Http/Controllers`, Models, or Services.
- **Output**: decoupled, robust Laravel monoliths and API handlers.
