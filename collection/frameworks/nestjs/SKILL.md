---
name: mayrlabs-nestjs
description:
  NestJS standards prioritizing Dependency Injection, strict module
  encapsulation, custom guards, and precise DTO typing.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs NestJS Doctrine

## Purpose

To leverage NestJS's Angular-inspired architecture fully. Enforces strict
Dependency Injection mapping and eliminates bleeding logic between modules.

## Audience

AI Agents generating NestJS modules, controllers, or providers.

## Core Rules & Constraints

### 1. Module Encapsulation

- Keep domain boundaries strict. If module `A` needs a service from module `B`,
  module `B` MUST explicitly export it, and `A` MUST explicitly import module
  `B`. Do not use wildcard global modules unless fundamentally required (e.g.,
  Config, Database).

### 2. DTOs and Validation

- **Strict DTO Validation**: Always use `class-validator` and
  `class-transformer` on incoming payloads. Use the NestJS `ValidationPipe`
  globally.
- Never type request bodies as `any` or generic `Record<string, any>`.

### 3. Layer Strictness

- **Controllers**: Only handle routing, extracting `@Body()`/`@Param()`, and
  returning responses.
- **Services**: Only handle business execution.
- **Guards/Interceptors**: Extract repetitive authorization checks to
  `@UseGuards()` rather than placing `if (user_role != 'admin')` inside
  services.

## Inputs & Outputs

- **Input**: Generating `*.module.ts`, `*.controller.ts`, `*.service.ts`.
- **Output**: Isolated, deeply injected, rigorously validated Nest
  architectures.
