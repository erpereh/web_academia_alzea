---
description: Apply the Academia Alzea Tailwind design system — brand tokens, consistent spacing, typography scale, and component variants using Tailwind CSS 4.
---

Apply the Academia Alzea Tailwind design system to the selected code. Use only Tailwind utility classes — no inline styles, no CSS modules, no CSS-in-JS.

## Brand Color Tokens

These are configured in `tailwind.config.js` as custom colors:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        blue:   '#1E3A8A',   // primary — trust
        orange: '#F59E0B',   // secondary — energy
        green:  '#10B981',   // CTA / WhatsApp
        bg:     '#F8FAFC',   // background
      }
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body:    ['Open Sans', 'sans-serif'],
    }
  }
}
```

Use `bg-brand-blue`, `text-brand-orange`, `bg-brand-green`, etc.

## Typography Scale

| Element         | Classes                                              |
|-----------------|------------------------------------------------------|
| Hero headline   | `font-heading text-4xl md:text-6xl font-bold`        |
| Section title   | `font-heading text-2xl md:text-4xl font-semibold`    |
| Card title      | `font-heading text-xl font-semibold`                 |
| Body text       | `font-body text-base text-gray-700 leading-relaxed`  |
| Small/meta      | `font-body text-sm text-gray-500`                    |
| CTA button text | `font-heading text-base font-semibold`               |

## Spacing System

- Section vertical padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Stacked content gap: `space-y-4` (tight) / `space-y-6` (normal) / `space-y-8` (loose)
- Grid gap: `gap-6 md:gap-8`

## Component Variants

### Primary CTA Button
```html
<button class="bg-brand-green hover:bg-emerald-600 text-white font-heading font-semibold
               px-6 py-3 rounded-xl transition-colors duration-200 shadow-md">
  Contactar
</button>
```

### Secondary Button
```html
<button class="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white
               font-heading font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
  Ver servicios
</button>
```

### Service Card
```html
<div class="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md
            transition-shadow duration-200 border border-gray-100">
```

### Badge / Pill
```html
<span class="bg-brand-orange/10 text-brand-orange text-sm font-semibold
             px-3 py-1 rounded-full">
  +30 años
</span>
```

## Grid Layouts

- 2-col: `grid grid-cols-1 md:grid-cols-2 gap-6`
- 3-col: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Hero split: `flex flex-col md:flex-row items-center gap-12`

Ensure `tailwind.config.js` has the brand tokens defined, then apply the system to the selected code.
