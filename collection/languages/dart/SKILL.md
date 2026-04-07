---
name: mayrlabs-dart
description: Strict Dart and Flutter code standards ensuring strong typing, immutability, and state management isolation.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Dart Doctrine

## Purpose

To enforce solid, testable Dart code particularly within the context of scalable Flutter applications. It prevents state-pollution and encourages immutability.

## Audience

AI Agents working on Dart utility code or Flutter mobile architectures.

## Core Rules & Constraints

### 1. Sound Null Safety

- Never use the bash operator `!` blindly to force unwrap generic null types. Handle nulls explicitly via `??` or guard clauses.

### 2. Immutability

- Prefer `const` over `final`, and `final` over `var` whenever possible.
- If a class acts as a Data Transfer Object (DTO), all of its properties MUST be `final`, and it should utilize a package like `freezed` or `equatable`.

### 3. Separation of Logic

- **No UI Business Logic**: Dart code within Flutter widgets (`build` methods) must solely concern presentation.
- Business logic MUST be abstracted into BLoCs, Providers, or ViewModels.

## Inputs & Outputs

- **Input**: Dart files (`.dart`).
- **Output**: Predictable, immutable, and strictly typed Dart classes.
