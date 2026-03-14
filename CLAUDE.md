# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Academia Alzea** es una plataforma web corporativa orientada a la **conversión de padres y familias** en el área local de Santa Eugenia / Villa de Vallecas (Madrid). Construida con Next.js, React 19, TypeScript y Tailwind CSS, con animaciones fluidas vía Framer Motion.

### Datos del Negocio

- **Nombre:** Academia Alzea
- **Dirección:** Calle Castrillo de Aza, 32, 28031 Madrid (Santa Eugenia / Villa de Vallecas)
- **Teléfonos:** 913 318 375 | 639 070 419
- **Horario:** Lunes a Viernes de 16:00 a 21:00
- **Servicios:** Apoyo escolar, Refuerzo académico, Escuela de idiomas
- **Diferencial:** Trato familiar, grupos reducidos, más de 30 años de experiencia en el barrio

### Tono de Marca

Profesional pero muy cercano. Debe sonar como un **vecino experto** en quien puedes confiar la educación de tus hijos. Evitar lenguaje corporativo frío; priorizar calidez, cercanía y confianza.

### SEO Local

Palabras clave objetivo:
- "Academia en Santa Eugenia"
- "Clases particulares Villa de Vallecas"
- "Refuerzo escolar La Gavia"

---

## Quick Start

```bash
npm install          # Install dependencies
npm run dev         # Start development server (localhost:3000)
npm run build       # Build for production
npm start           # Run production server
npm run lint        # Run ESLint
```

### Project Structure

```
app/                 # App Router (Next.js 13+)
  layout.tsx        # Root layout
  page.tsx          # Home page
  globals.css       # Global styles with Tailwind
components/         # Reusable components
  ui/              # Atomic UI components (buttons, cards, etc.)
  sections/        # Page sections (hero, services, etc.)
public/            # Static assets
```

---

## Design & Brand Identity

### Color Palette

| Token       | Hex       | Uso                                    |
|-------------|-----------|----------------------------------------|
| Primary     | `#1E3A8A` | Azul — Confianza y método              |
| Secondary   | `#F59E0B` | Naranja — Energía y motivación         |
| CTA / Accent| `#10B981` | Verde — Acción, WhatsApp, conversión   |
| Background  | `#F8FAFC` | Blanco roto — Claridad y limpieza      |

**CTA principal** (botón WhatsApp / contacto) siempre en `#10B981`.

### Typography

- **Titulares:** Montserrat (bold/semibold)
- **Cuerpo:** Open Sans (regular/medium)

Importar desde Google Fonts en `app/layout.tsx`.

---

## Animation Guidelines

### Framer Motion Mandatory Patterns

#### 1. Fade-in Up on Scroll

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

#### 2. Micro-interactions on Hover

```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
  className="px-6 py-2 rounded-lg"
>
  Click me
</motion.button>
```

#### 3. Stagger Animation for Lists

```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((item, i) => (
    <motion.div key={i} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Animation Principles

- **Spring Physics:** usar `spring` transitions para movimientos naturales
- **Purposeful:** las animaciones mejoran UX, no son meramente decorativas
- **Performance:** operar sobre `transform` y `opacity` únicamente
- **Accessibility:** Framer Motion respeta `prefers-reduced-motion` automáticamente
- **No CSS @keyframes** salvo en `tailwind.config.js`

---

## Component Architecture

### Naming Convention

- `/components/ui/` — componentes sin lógica de negocio (Button, Card, Badge)
- `/components/sections/` — secciones de página (Hero, Services, Testimonials, Contact)
- `/app/` — Pages y layouts

### Component Template

```typescript
'use client'; // Si usa hooks/interactividad

import { motion } from 'framer-motion';

interface ComponentProps {
  // Props aquí
}

export function ComponentName({ ...props }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

---

## Key Technologies

- **Next.js 16** — App Router
- **React 19** — Concurrent rendering
- **TypeScript** — Strict mode
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion 12** — Declarative animations
- **PostCSS & Autoprefixer** — CSS processing

---

## Performance Considerations

1. `next/image` para todas las imágenes
2. `next/dynamic` para code splitting de secciones pesadas
3. `use client` solo donde hay interactividad
4. Mantener 60fps — perfilar con DevTools
5. Minimizar nodos DOM en animaciones de layout

---

## Debugging

- Dev: `npm run dev` + browser DevTools
- Build: borrar `.next/` y reconstruir
- Types: `npx tsc --noEmit`
- Animations: Framer DevTools extension

---

## Git Workflow

- Feature branches desde `main`
- Commits atómicos con mensajes descriptivos
- PR para code review antes de merge a `main`
