---
description: Implement advanced motion design patterns for Academia Alzea — orchestration, layout animations, scroll progress, and cohesive motion language.
---

Apply advanced Framer Motion design patterns to the selected section or component. These patterns ensure a cohesive, professional motion language across Academia Alzea.

## Motion Language Principles

Academia Alzea communicates **trust, warmth, and professionalism**. Animations should feel:
- **Soft and natural** — spring physics, never linear/mechanical
- **Purposeful** — guide attention toward CTAs and key content
- **Restrained** — max 2–3 animated elements visible simultaneously
- **Fast enough** — no animation over 700ms in UI interactions

## Pattern 1: Section Orchestration

Each page section animates as a unit. Use `AnimatePresence` + stagger:

```tsx
'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const childVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

export function Section({ title, subtitle, children }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 md:py-24"
    >
      <motion.h2 variants={childVariants}>{title}</motion.h2>
      <motion.p variants={childVariants}>{subtitle}</motion.p>
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.section>
  );
}
```

## Pattern 2: Number Counter (trust signals)

Animate statistics (30+ years, 500+ students):

```tsx
'use client';
import { useInView, useMotionValue, useSpring, useEffect } from 'framer-motion';
import { useRef } from 'react';

export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 15 });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  return (
    <span ref={ref}>
      <motion.span>{spring}</motion.span>{suffix}
    </span>
  );
}

// Usage: <CountUp value={30} suffix="+ años" />
```

## Pattern 3: Scroll Progress Indicator

For long pages, show reading progress:

```tsx
'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-1 bg-brand-green z-50"
    />
  );
}
```

## Pattern 4: Attention Pulse (WhatsApp CTA)

Draw attention to the floating WhatsApp button:

```tsx
<motion.a
  href="https://wa.me/34639070419"
  animate={{
    scale: [1, 1.08, 1],
    boxShadow: [
      '0 0 0 0 rgba(16,185,129,0.4)',
      '0 0 0 12px rgba(16,185,129,0)',
      '0 0 0 0 rgba(16,185,129,0)',
    ],
  }}
  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
  className="fixed bottom-6 right-6 bg-brand-green text-white p-4 rounded-full shadow-lg z-50"
>
  <WhatsAppIcon />
</motion.a>
```

## Pattern 5: Page Transition Wrapper

Wrap `app/layout.tsx` content for smooth route transitions:

```tsx
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

## Motion Design Checklist

Before marking a section complete:
- [ ] Entrance animation uses `viewport={{ once: true }}`
- [ ] Interactive elements have `whileHover` and `whileTap`
- [ ] No simultaneous animations on more than 3 elements
- [ ] Tested with `prefers-reduced-motion: reduce` in DevTools
- [ ] No animation causes layout shift (CLS)
- [ ] WhatsApp CTA has attention animation

Apply the relevant patterns to the selected code now.
