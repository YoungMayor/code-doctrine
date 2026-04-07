---
name: mayrlabs-csharp
description: Enforces .NET modern features, strict nullability, and interface-driven Clean Architecture for enterprise code.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs C# Doctrine

## Purpose

To maintain robust enterprise .NET architectures, heavily favoring explicit dependency injection, interface abstractions, and modern C# 10+ language features.

## Audience

AI Agents writing backend microservices, ASP.NET Core, or Blazor applications.

## Core Rules & Constraints

### 1. Modern Primitives

- Always utilize `record` types for simple Data Transfer Objects (DTOs) to gain free value-based equality instead of heavyweight `class` boilerplate.
- Use pattern matching heavily in place of clunky `if-else` or traditional `switch` structures.

### 2. Nullable Context

- The `<Nullable>enable</Nullable>` configuration must be respected.
- Eliminate Null Reference Exceptions by properly specifying `string?` vs `string` and not fighting the compiler warning.

### 3. Interface Driven

- Inject `I...` interfaces into constructors instead of concrete instances.
- Controllers should only take interfaces. Logic resides in the injected Service layer.

## Inputs & Outputs

- **Input**: Editing `.cs` files.
- **Output**: Highly decoupled, explicitly typed C# code embracing Dependency Injection natively.
