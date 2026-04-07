---
name: mayrlabs-go
description:
  Strictly enforces idiomatic Golang standards, including early returns, concise
  error handling, robust concurrency practices, and explicit interfaces over
  structs.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Go Doctrine

## Purpose

To scaffold high-performance, predictable, and idiomatic Go architectures.
Eliminates typical "Java-isms" or "Python-isms" that junior developers often
bring into Go codebases.

## Audience

AI Agents scaffolding modules, APIs, or internal tools using Golang.

## Core Rules & Constraints

### 1. Error Handling First

- **No Ignoring Errors**: Never use `_` to discard an error unless explicitly
  documented why (e.g., forced buffer flushes).
- **Early Returns (Guard Clauses)**: Handle errors immediately and return.
  Eliminate deep nesting.
  - BAD: `if err == nil { ... }`
  - GOOD: `if err != nil { return err }`

### 2. Concurrency Primitives

- **Don't communicate by sharing memory; share memory by communicating**:
  Utilize channels (`chan`) to pass data safely between goroutines.
- **Always Wait**: Never fire a detached goroutine that involves network/DB IO
  without a sync mechanism (`sync.WaitGroup` or `context.Context`) to prevent
  goroutine leaks.

### 3. Idiomatic Interfaces

- **Accept Interfaces, Return Structs**: Functions should ask for the smallest
  interface they require (e.g., `io.Reader` instead of `*os.File`).

### 4. Naming

- Use single-letter or extremely short variable names for local contexts (e.g.,
  `r` for HTTP request, `w` for response writer).
- Capitalize for public structures, lowercase for private.

## Inputs & Outputs

- **Input**: Implicit when working inside `.go` files or `go.mod` directories.
- **Output**: Clean, heavily-tested, structurally flat Go code mapping to `pkg/`
  and `cmd/` directory standards.
