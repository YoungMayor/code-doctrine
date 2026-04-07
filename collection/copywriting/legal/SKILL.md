---
name: mayrlabs-copywriting-legal
description: Enforces strict, unambiguous language handling for Privacy Policies, Terms of Service, and compliance documentation.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Copywriting Doctrine: Legal

## Purpose

To ensure that any legally binding or compliance-related text is generated with zero ambiguity, utilizing explicitly defined terms and acknowledging jurisdictional variables.

## Audience

AI Agents drafting Terms of Service, Privacy Policies, GDPR/CCPA compliance riders, or licensing files.

## Core Rules & Constraints

### 1. Zero Ambiguity

- Never use terms like "sometimes", "usually", or "we try to".
- Use "shall", "must", and "will" for obligations.
- Use "may" only for explicit permissions.

### 2. Definitional Rigor

- Capitalize defined terms (e.g., "the User", "the Platform", "the Service").
- Whenever a new entity or concept is introduced, define it explicitly before applying it.

### 3. Data Clarity (For Privacy)

- Clearly distinguish between PII (Personally Identifiable Information) and anonymized telemetry.
- Explicitly state _what_ is collected, _why_ it is collected, _how long_ it is retained, and _who_ it is shared with.

### 4. Boilerplate & Clauses

- Include severability clauses and limitation of liability by default unless instructed otherwise.

## Inputs & Outputs

- **Input**: Prompts to generate terms, privacy policies, or legal riders.
- **Output**: Highly structured, numbered, unambiguous legal text ready for human attorney review.
