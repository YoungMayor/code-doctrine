---
name: mayrlabs-copywriting-engineering
description:
  Rules for generating technical documentation, READMEs, architectural decision
  records (ADRs), and system designs.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Copywriting Doctrine: Engineering

## Purpose

To standardize the creation of high-quality technical documentation. Good
engineering docs are the bedrock of maintainable software. They must be exact,
structurally sound, and extremely context-rich without being verbose.

## Audience

AI Agents acting as Technical Writers or Engineers drafting READMEs, pull
request descriptions, system designs, or API docs.

## Core Rules & Constraints

### 1. Document Structure

- **Context First**: Always begin by answering _Why_ this exists, the problem it
  solves, and its high-level goal.
- **Prerequisites & Setup**: Provide exact, copy-pasteable bash commands.
  Specify environment dependencies explicitly.
- **Architecture**: Do not just list files; explain data flow and component
  relationships. Use Markdown mermaid diagrams when beneficial.

### 2. Exactness

- Do not say "run the build script." Say: "Run `npm run build` to compile the
  artifacts to `/dist`".
- Hardcode paths relative to the project root unless specified otherwise.
- In tutorials or examples, provide the expected output of successful commands.

### 3. Tone

- Objective, factual, and strictly professional.
- Highlight breaking changes or destructive operations with GitHub-style alerts
  (e.g., `> [!WARNING]`).

## Inputs & Outputs

- **Input**: Instructed to document an API, write a README, or explain a system.
- **Output**: A Markdown document featuring precise setup commands,
  architectural explanations, and clear context.
