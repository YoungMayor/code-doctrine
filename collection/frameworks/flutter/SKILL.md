---
name: mayrlabs-flutter
description: Hardline rules for Flutter UI generating, prioritizing stateless over stateful widgets, BLOC/Provider for state, and separated service locators.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Flutter Doctrine

## Purpose

To ensure Flutter widget trees remain clean, performant, and structurally insulated against deep prop-drilling or localized UI state mismanagement.

## Audience

AI Agents scaffolding Flutter UI layers and state controllers.

## Core Rules & Constraints

### 1. Minimal Stateful Widgets

- Default to `StatelessWidget`.
- Convert to `StatefulWidget` ONLY for local, ephemeral UI state (e.g., text controller focus, minor animation ticks). App-level or domain-level data MUST be managed externally (Riverpod, Bloc, Provider).

### 2. Widget Extraction (No God Trees)

- Actively extract large chunks of a layout into separate, private widget classes instead of creating one massive `build()` method or using "helper build functions" (e.g., `_buildHeader()`). Classes are preferred because the Flutter framework can cache them better than functions.

### 3. Asynchronous Execution

- Do not use `BuildContext` across async gaps indiscriminately. Always check `if (!mounted) return;` before popping a navigator or triggering a UI-bound snackbar after an `await`.

## Inputs & Outputs

- **Input**: Generating `.dart` Flutter files.
- **Output**: Granular, testable StatelessWidgets coupled with clean Providers.
