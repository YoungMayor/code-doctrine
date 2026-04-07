---
name: mayrlabs-core
description:
  Universal core standards enforcing senior-level software engineering
  principles (DRY, KISS, clean code, modular architecture) across all MayR Labs
  projects.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Core Doctrine

## Purpose

Enforce global, state-of-the-art philosophies for senior, high-efficiency
software engineering. This doctrine ensures that all generated code is readable,
maintainable, scalable, and secure.

## Audience

Universal baseline for AI agents working on any MayR Labs project.

## Core Philosophy

- **Humans First, Machines Second**: Optimize for readability over raw machine
  brevity.
- **Boring > Clever**: Avoid "clever" one-liners. Prefer predictable, easily
  parsable patterns.
- **Clean Code, Lean Code**: Let the code breathe. Do not cluster unrelated
  lines of code together.
- **Longevity Test**: Every architectural decision must answer, _"Will this
  still make sense in 6 months?"_

## Architecture & Structure

- **Modular Architecture**: Codebases must follow a clear separation of
  concerns.
- **No God Files**: Absolutely no monolithic files (e.g., 1000+ line controllers
  doing everything). Break things down.
- **Co-location**: Keep closely related logic together where appropriate, but
  strictly avoid tight unmanageable coupling.
- **DRY & KISS**: Don't Repeat Yourself. Keep It Simple, Stupid.

## Naming Conventions

- **Intention Revealing**: Use descriptive names that explain _what_ and _why_.
- **No Abbreviations**: Unless universally understood (e.g., `id`, `url`,
  `api`), avoid abbreviations.
- **Sentence-like Functions**: Functions must read intuitively (e.g.,
  `calculateUserDiscount()` is better than `calcDisc()`).

## Error Handling & Security

- **Zero Trust**: Never trust client input. Validate and sanitize everything at
  the entry point.
- **No Silent Failures**: Banned. Always catch errors, log them significantly,
  and return meaningful responses.
- **Secrets Management**: Secrets must never be dynamically exposed or leaked to
  frontend clients.

## Inputs & Outputs

- **Input**: Implicitly applied on every action.
- **Output**: Strict adherence in all generated code, architectures, and
  refactoring efforts.

## Anti-Patterns (BANNED)

- Hardcoded configuration values (use environment variables).
- Copy-paste programming without abstracting reusable pieces.
- Ignoring edge cases or wrapping blocks in empty `try...catch` blocks.
