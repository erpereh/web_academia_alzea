---
description: Design and build frontend components for Academia Alzea following React 19 + Next.js App Router patterns, component architecture, and reusability standards.
---

Design or refactor the selected frontend component following these standards for Academia Alzea:

## Component Structure
- Place in `/components/ui/` if it has no business logic (Button, Card, Badge, Icon)
- Place in `/components/sections/` if it represents a page section (Hero, Services, Testimonials, FAQ, Contact)
- Export named exports, never default exports
- Add `'use client'` only when hooks or browser APIs are used

## Props & TypeScript
- Define a `ComponentNameProps` interface for every component
- Use `React.ReactNode` for content slots, specific types for data props
- Avoid `any` — use `unknown` and narrow types
- Optional props use `?` and provide sensible defaults

## Accessibility
- Use semantic HTML: `<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`, `<main>`
- Buttons that navigate use `<a>` or `<Link>`, not `<div onClick>`
- Forms include `<label htmlFor>` linked to input `id`
- Provide `aria-label` when text content doesn't describe the action

## Next.js Specifics
- Images: always `<Image>` from `next/image` with explicit `width`/`height` or `fill`
- Links: always `<Link>` from `next/link` for internal navigation
- Heavy sections: wrap in `dynamic(() => import(...), { ssr: false })` when not needed SSR
- Metadata: set `export const metadata` in page files for SEO

## Academia Alzea Sections Checklist
When building a new section, ensure:
- [ ] Section has a clear heading (h2) with Montserrat font
- [ ] Contains relevant text in Open Sans for body
- [ ] Includes a CTA button in green (`#10B981`)
- [ ] Has `id` attribute for anchor navigation
- [ ] Mobile-first responsive layout (`flex-col md:flex-row` pattern)

Build or refactor the component now.
