---
name: mayrlabs-security-general
description:
  Core security-driven software development principles, enforcing zero trust,
  secure defaults, and defense-in-depth across all code generation.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Security Doctrine: General Principles

## Purpose

To embed a security-first mindset into every architecture, workflow, and
codebase generated. Security is not a feature layered on at the end; it is a
foundational requirement built into the design.

## Audience

Universal. All developers, AI agents, and system architects working on any layer
of the stack.

## Core Philosophy

- **Zero Trust**: Never trust input, environment variables, or internal
  microservices implicitly. Everything must be validated and authenticated.
- **Secure By Default**: Systems should be secure out-of-the-box. Any insecure
  feature must require explicit opt-in and strict justification.
- **Defense in Depth**: Implement multiple layers of security controls (e.g.,
  both frontend validation and strict backend authorization).

## Core Rules & Constraints

### 1. Secret Management

- **Never Hardcode Secrets**: API keys, database credentials, and cryptographic
  salts must **never** be hard-coded into the repository.
- **Use Secure Stores**: Utilize `.env` files (excluded via `.gitignore`),
  centralized vault managers (e.g., AWS Secrets Manager, HashiCorp Vault), and
  CI/CD secret injection.

### 2. Dependency Management

- Treat third-party packages as potential threat vectors. Ensure packages have
  high reputability and are regularly audited.
- Actively run and log outputs of `npm audit` or equivalent dependency
  vulnerability scanners.

### 3. Error Handling & Data Leakage

- **No Stack Traces in Production**: Generic error messages should be shown to
  end-users (e.g., "Internal Server Error").
- PII (Personally Identifiable Information) must be masked in application logs.

## Examples & References

### ❌ Insecure Hardcoding

```typescript
const AWS_S3_KEY = 'ABCDEFGHIJKLMNOP...'; // BANNED
```

### ✅ Secure Injection

```typescript
const AWS_S3_KEY = process.env.AWS_S3_KEY;
if (!AWS_S3_KEY)
  throw new Error('AWS_S3_KEY is not defined in the environment.');
```

## Inputs & Outputs

- **Input**: Implicitly active on all tasks.
- **Output**: Security-audited architectures, sanitized outputs, and strict
  environment isolation.
