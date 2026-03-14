---
description: Add or improve Framer Motion animations in Academia Alzea components — entrance, hover, tap, scroll-triggered, and page transitions.
---

Add or improve Framer Motion animations in the selected component. Follow these rules:

## Setup

```tsx
'use client';
import { motion, useReducedMotion } from 'framer-motion';
```

Always import `useReducedMotion` when building complex animations to respect accessibility preferences.

## Core Animation Patterns

### Fade-in Up on Scroll (standard entrance)
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true, margin: '-80px' }}
>
  {children}
</motion.div>
```

### Fade-in Scale (for cards and images)
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  {children}
</motion.div>
```

### CTA Button (micro-interaction)
```tsx
<motion.button
  whileHover={{ scale: 1.03, y: -1 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  Contactar por WhatsApp
</motion.button>
```

### Card Hover Lift
```tsx
<motion.div
  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="rounded-2xl bg-white"
>
  {children}
</motion.div>
```

## Stagger List / Grid

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

// Usage
<motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {services.map((s) => (
    <motion.li key={s.id} variants={item}>
      <ServiceCard {...s} />
    </motion.li>
  ))}
</motion.ul>
```

## Hero Text Entrance (sequential)

```tsx
const heroVariants = {
  badge:    { hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.4 } } },
  headline: { hidden: { opacity: 0, y: 20  }, show: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.6 } } },
  body:     { hidden: { opacity: 0         }, show: { opacity: 1,       transition: { delay: 0.45, duration: 0.5 } } },
  cta:      { hidden: { opacity: 0, y: 10  }, show: { opacity: 1, y: 0, transition: { delay: 0.6,  duration: 0.4 } } },
};
```

## Reduced Motion Safety

```tsx
export function AnimatedSection({ children }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0 : 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

## Rules

- Animate only `opacity`, `y`, `x`, `scale` — never `width`, `height`, `margin` (triggers layout)
- `viewport={{ once: true }}` on all scroll-triggered animations — don't repeat on scroll up
- Spring transitions for interactive elements (hover/tap), easeOut for scroll entrances
- Keep durations between 0.3s–0.7s; nothing above 1s unless intentional

Apply animations to the selected component now.
