---
name: mayrlabs-security-backend
description:
  Backend security guidelines dictating input validation, authentication
  enforcement, authorization, and database interaction safety.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs Security Doctrine: Backend

## Purpose

To fortify server-side applications, APIs, and databases against injection,
unauthorized access, and mass data extraction.

## Audience

Backend engineers and AI agents scaffolding APIs, servers, or database schemas.

## Core Rules & Constraints

### 1. Input Validation & Sanitization

- **Strict Typing**: All incoming requests (params, body, headers, queries) must
  be validated using robust parsing libraries (e.g., Zod, Joi).
- **Reject Unrecognized Data**: Strip or reject properties that are not
  explicitly defined in the schema.

### 2. Database Security (SQL/NoSQL Injection)

- **Parameterized Queries**: Never concatenate strings to build queries. Use an
  ORM (Prisma, TypeORM) or strictly parameterized statements.
- Ensure Object Relational Mappers (ORMs) do not blindly pass unsanitized query
  parameters to operations like `findMany`.

### 3. Authentication & Authorization

- Implement explicit identity validation.
- **BOLA Prevention**: (Broken Object Level Authorization). Always assert that
  the currently authenticated user has the necessary ownership or permissions to
  access the requested resource ID.
- Verify JWTs computationally using asymmetric keys (RS256) where applicable and
  always validate the `aud` (audience) and `exp` (expiration).

### 4. Rate Limiting & Abuse Prevention

- Enforce rate limits by IP, user ID, or API key to prevent brute forcing and
  denial-of-service (DoS).

## Examples & References

### ❌ Insecure Database Query

```javascript
// BANNED: SQL Injection vulnerability
db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`);
```

### ✅ Secure Validation & Query

```typescript
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });
const { email } = schema.parse(req.body);

// Parameterized
await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
```

## Inputs & Outputs

- **Input**: Implicit when writing API routes, database models, or middleware.
- **Output**: Output will feature schema validation, explicit auth checks, and
  safe query methodologies.
