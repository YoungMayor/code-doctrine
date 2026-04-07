---
name: mayrlabs-rust
description:
  Hardline rules for Rust focusing on memory lifecycle, enforcing idiomatic
  traits, and minimizing unsafe blocks.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Rust Doctrine

## Purpose

To scaffold unbreakable backend systems by leaning into Rust's strictest
compiler guarantees without unnecessary verbosity.

## Audience

AI Agents scaffolding high-performance CLIs, backends, and system tools in Rust.

## Core Rules & Constraints

### 1. Minimal Unsafe

- The `unsafe` block is virtually banned. Unless interacting with a low-level
  FFI (Foreign Function Interface), rely strictly on safe Rust guarantees.

### 2. Error Propagation

- Do not use `unwrap()` or `expect()` in production libraries. Always handle the
  `Result<T, E>` variant using the `?` operator and map errors custom error
  boundaries.
  - BAD: `let file = File::open("x.txt").unwrap();`
  - GOOD: `let file = File::open("x.txt").map_err(CustomError::Io)?;`

### 3. Idiomatic Ownership

- Default to passing references (`&T`) instead of consuming ownership, unless
  the function explicitly requires ownership mutation in its design.
- Prefer `impl Iterator` or standard higher-order functions (`.map`, `.filter`)
  over manual `for` loops where readable.

## Inputs & Outputs

- **Input**: `src/*.rs` files or `Cargo.toml`.
- **Output**: Fast, fearless-concurrency driven Rust architectures.
