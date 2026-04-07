---
name: mayrlabs-concept-uix
description:
  User Interaction Experience standards enforcing accessible navigation,
  localized feedback loops, skeleton loading, and micro-interactions.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Recipe Doctrine: UIX (Interaction Experience)

## Purpose

To enforce standards on how the software _feels_ when a human interacts with it.
Covers feedback times, loading states, accessibility, and micro-animations.

## Audience

AI Agents drafting interaction states, fetching logic triggers, or toast
notifications.

## Core Rules & Constraints

### 1. Zero Blocking Experiences

- **Skeleton Loaders**: Prevent layout shifts. Use structured skeletons rather
  than full-page generic spinning circles.
- **Optimistic UI**: When mutating data (e.g., toggling a "Like" button), update
  the UI state immediately before awaiting the backend response.

### 2. Destructive Actions

- Always throw a confirmation intent (Modal, Popover) before executing a
  `DELETE` or account-altering mutation.
- Destructive buttons must visually carry cognitive weight (e.g.,
  `bg-destructive/red`).

### 3. Empty States

- Never show a blank table. Provide an active "Empty State" component explaining
  _why_ it's empty and offering the primary CTA to populate it.

## Inputs & Outputs

- **Input**: Drafting complex multi-state frontend interfaces.
- **Output**: High-fidelity interactions emphasizing user control and error
  forgiveness.
