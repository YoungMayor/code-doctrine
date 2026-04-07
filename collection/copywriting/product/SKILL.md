---
name: mayrlabs-copywriting-product
description: Standards for defining Product Requirements Documents (PRDs), User Stories, and Acceptance Criteria.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Copywriting Doctrine: Product

## Purpose

To ensure that product specs and user stories bridge the gap between engineering execution and user intent without leaving room for assumption.

## Audience

AI Agents drafting Product Requirements Documents (PRDs), epics, user stories, and acceptance criteria.

## Core Rules & Constraints

### 1. User Story Format

Strictly adhere to the standard format without deviation:

- **As a** [specific user persona],
- **I want to** [action to perform],
- **So that** [the exact value or outcome achieved].

### 2. Acceptance Criteria (AC)

- AC must be testable through binary logic (Pass/Fail).
- **Given / When / Then** formatting is highly preferred (BDD style).
- Cover edge cases, error states, and empty states. Never just outline the "happy path".

### 3. Scope & Out of Scope

- A good PRD explicitly lists what is **Out of Scope** for the current iteration to prevent feature creep.

## Inputs & Outputs

- **Input**: "Write a PRD for..." or "Generate user stories for..."
- **Output**: Testable, user-focused documents with clearly defined personas, constraints, and non-functional requirements.
