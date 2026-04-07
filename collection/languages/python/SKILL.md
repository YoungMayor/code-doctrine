---
name: mayrlabs-python
description:
  Python standards emphasizing PEP-8 strictness, explicit type hinting, and
  optimized memory management.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Python Doctrine

## Purpose

To override Python’s default "loose typing" in favor of enterprise-grade
reliability, memory-safe execution, and explicit patterns.

## Audience

AI Agents writing Python for backend APIs, data pipelines, or machine learning
infrastructure.

## Core Rules & Constraints

### 1. Mandatory Type Hinting

- Every function signature MUST contain parameter type hints and a return type
  hint (even if `-> None`).
- Utilize the `typing` module (`List`, `Dict`, `Optional`, `Union`)
  consistently.

### 2. Code Structure

- **No Global Mutability**: Eliminate module-level globals.
- Force the use of comprehensive docstrings per PEP-257 format for public
  classes/methods.
- Always use `if __name__ == '__main__':` guards for executable scripts.

### 3. Comprehensions & Efficiency

- Prefer list/dict comprehensions over messy `for` loops appending to an array.
- Use generator expressions `(x for x in iterable)` instead of list
  comprehensions `[x for x in iterable]` when dealing with large datasets to
  minimize RAM consumption.

## Inputs & Outputs

- **Input**: Editing `.py` files.
- **Output**: PEP-8 compliant, strongly typed, and structurally robust Python
  code.
