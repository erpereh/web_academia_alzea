---
description: Apply Vercel and Next.js App Router best practices — SSR/SSG strategy, image optimization, metadata, performance, and deployment readiness for Academia Alzea.
---

Review and apply the following Next.js + Vercel best practices to the selected file or component:

## Rendering Strategy

- **Static pages** (Home, Services, About): no `async` data fetching needed — rendered at build time by default
- **Dynamic pages** (Blog, results): use `generateStaticParams` for SSG or `fetch` with `cache: 'force-cache'`
- **Never** use `'use client'` on a page file; only on leaf interactive components
- Server Components are the default — keep them server-side unless interactivity is required

## Image Optimization

```tsx
import Image from 'next/image';

// Always specify dimensions or use fill
<Image
  src="/hero-students.jpg"
  alt="Alumnos de Academia Alzea en clase"
  width={600}
  height={400}
  priority   // only for above-the-fold images
  className="rounded-2xl object-cover"
/>
```

- `priority` only on the Hero image (LCP element)
- Use `sizes` prop for responsive images: `sizes="(max-width: 768px) 100vw, 50vw"`
- Store assets in `/public/` with descriptive filenames (`hero-students.jpg`, not `img1.jpg`)

## Metadata & SEO

```tsx
// app/layout.tsx or app/page.tsx
export const metadata = {
  title: 'Academia Alzea | Refuerzo Escolar en Santa Eugenia, Madrid',
  description: 'Más de 30 años ayudando a estudiantes en Villa de Vallecas. Apoyo escolar, idiomas y refuerzo académico en grupos reducidos.',
  keywords: ['academia santa eugenia', 'clases particulares villa de vallecas', 'refuerzo escolar la gavia'],
  openGraph: {
    title: 'Academia Alzea',
    description: 'Refuerzo escolar y clases de idiomas en Madrid',
    locale: 'es_ES',
    type: 'website',
  },
};
```

## Performance Checklist

- [ ] No unused imports
- [ ] Dynamic imports for heavy sections: `const Map = dynamic(() => import('../components/Map'), { ssr: false })`
- [ ] No `console.log` in production code
- [ ] Fonts loaded via `next/font/google` (not `<link>` in HTML)
- [ ] Environment variables prefixed `NEXT_PUBLIC_` only for client-accessible values

## Font Loading (Next.js way)

```tsx
// app/layout.tsx
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-body' });

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## Vercel Deployment Readiness

- `next.config.js` should have `images.domains` or `images.remotePatterns` configured
- No hardcoded `localhost` URLs — use environment variables
- `npm run build` must pass with zero errors before deploying

Apply fixes to the selected code now.
