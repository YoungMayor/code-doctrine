---
name: mayrlabs-formatters
description: Strictly enforces auto-formatting patterns. Dictates the use of high-performance tooling like Biome over legacy formatters, ensuring CI consistency.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Tools Doctrine: Formatters

## Purpose

To eliminate bike-shedding and style debates. AI and human agents must strictly adhere to project formatting toolchains without improvising or ignoring CI/CD checks.

## Audience

AI Agents resolving formatting disputes, configuring CI pipelines, or creating format rules.

## Core Rules & Constraints

### 1. Standard Tooling Hierarchy

- **Web (JS/TS/JSON)**: Prefer **Biome** over Prettier/ESLint combinations for raw speed and unified settings, unless the legacy project strictly dictates Prettier via `.prettierrc`.
- **Rust**: Always use `rustfmt`.
- **Python**: Prefer `ruff` format or `black`.
- **Go**: Always use `gofmt` or `goimports`. No exceptions.

### 2. CI/CD First

- Formatters MUST run automatically in GitHub Actions/CI pipelines.
- Code generation shouldn't attempt to bypass line widths or quote strictness dictated by the project configuration file (e.g., `biome.json`).

## Inputs & Outputs

- **Input**: When writing code snippets or modifying configuration setups.
- **Output**: Output will explicitly run through or match the configuration files ruleset without subjective deviation.
