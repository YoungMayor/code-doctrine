---
name: mayrlabs-seo
description:
  Comprehensive SEO guidelines for adding meta tags, sitemaps, robots.txt, and
  semantic HTML for any web project.
license: MIT
metadata:
  author: MayR Labs
  version: '1.0'
---

# MayR Labs SEO Doctrine

## Purpose

Ensure that all web projects follow best-in-class Search Engine Optimization
(SEO) practices. This includes proper handling of meta tags, Open Graph,
structured data (JSON-LD), and required configuration files like `sitemap.xml`
and `robots.txt`.

## Audience

General use for any web project, regardless of the underlying framework (React,
Vue, Laravel, plain HTML, Next.js, etc.).

## Core Philosophy

- **No Lazy SEO**: Every page must be fully optimized. SEO is a critical
  feature, not an afterthought.
- **Holistic Approach**: We optimize for all major "SEO players", including
  search engines (Google, Bing) and social media previews (Open Graph, Twitter
  Cards).

## Core Rules & Constraints

### 1. Document Structure & Meta Tags

- Every page **must** define a unique `<title>` and a compelling
  `<meta name="description">`.
- Always include standard Open Graph (`og:title`, `og:description`, `og:image`,
  `og:type`, `og:url`) and Twitter Card metadata.
- Specify the viewport for responsive indexing:
  `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Set a canonical link (`<link rel="canonical" href="...">`) for every page to
  prevent duplicate content penalization.

### 2. Semantic HTML

- Enforce strict semantic HTML5. Use elements like `<header>`, `<nav>`,
  `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>` appropriately.
- **Heading Hierarchy**: Every page must have precisely one `<h1>`. Maintain
  strict hierarchical heading structures (`<h2>`, `<h3>`, etc.) and never skip
  levels for styling purposes.
- **Images**: All `<img>` tags **must** include descriptive `alt` attributes.

### 3. Essential Search Files

- **`robots.txt`**: Must be generated and correctly formatted to properly direct
  crawler access.
- **`sitemap.xml`**: Must cover all critical indexable routes. Ensure dynamic
  sitemap generation is prioritized for framework-based projects.

### 4. Structured Data

- Use `application/ld+json` script tags to generate rich snippets.
- Ensure standard schemas (e.g., `WebSite`, `Organization`, `BreadcrumbList`,
  `Article`, `Product`) are implemented where semantically appropriate.

## Inputs & Outputs

- **Input**: Explicitly applied when tasked to "optimize for SEO", "add SEO
  tags", "build sitemap/robots", or whenever a page's layout is being finalized
  and SEO was requested.
- **Output**: Generates full meta tag structures, JSON-LD schema, configuration
  files (`robots.txt`, `sitemap.xml`), and semantic HTML improvements.

## Anti-Patterns (BANNED)

- Generic title tags like "Home" or "Index".
- Empty or duplicate meta descriptions across different routes.
- "Div soup" architecture replacing semantic tags.
- Missing `alt` tags on any image element.
