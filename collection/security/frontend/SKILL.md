---
name: mayrlabs-security-frontend
description: Frontend security guidelines for mitigating XSS, CSRF, and safe handling of tokens and sensitive client-side data.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Security Doctrine: Frontend

## Purpose

To protect users and their data within the browser environment, preventing cross-site scripting (XSS), cross-site request forgery (CSRF), and insecure storage.

## Audience

Frontend engineers and AI agents building web UIs (React, Next.js, Vue, vanilla JS).

## Core Rules & Constraints

### 1. Cross-Site Scripting (XSS) Prevention

- Use frameworks that automatically escape text (e.g., React's JSX).
- **Ban Danger zones**: Avoid `dangerouslySetInnerHTML`, `innerHTML`, and `eval()` entirely unless paired with a heavy sanitizer (like DOMPurify).
- **CSP**: Utilize strict Content Security Policies (CSP) to restrict domains from which scripts can be loaded.

### 2. Secure Token Management

- **Never Store Secrets in LocalStorage**: JWTs mapping to high-privilege access must be avoided in `localStorage` or `sessionStorage` due to XSS vulnerabilities.
- Prefer **HttpOnly, Secure, SameSite** cookies for session management to defend against client-side script access and CSRF.

### 3. Third-Party Interactions

- When linking to external domains, securely set attributes: `<a target="_blank" rel="noopener noreferrer">`.

## Examples & References

### ❌ Insecure React Handling

```jsx
// BANNED: Blindly rendering unsanitized HTML
<div dangerouslySetInnerHTML={{ __html: userProvidedText }} />
```

### ✅ Secure React Handling

```jsx
import DOMPurify from 'dompurify';

// ONLY if absolutely necessary to render HTML
const cleanHTML = DOMPurify.sanitize(userProvidedText);
<div dangerouslySetInnerHTML={{ __html: cleanHTML }} />

// Preferred: Just render text natively
<div>{userProvidedText}</div>
```

## Inputs & Outputs

- **Input**: Implicit when building components, handling forms, or managing state.
- **Output**: Escaped templates, proper cookie flags, and sanitized user inputs.
