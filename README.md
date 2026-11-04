# Trato Design System

Fuente de verdad del design system de Trato para Diseño y Frontend: tokens, componentes y patrones en código, documentados en un sitio navegable.

Origen: Figma **Platform Designs** (`k9llQiGMDSuQn9zWXeUo6r`).

## Correr

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # sitio estático en /out (Vercel: framework Next.js, sin config extra)
npm run build:single  # versión de una sola página (navegación por #hash) en /dist-single
```

## Preview online

Cada push a `main` publica el sitio en GitHub Pages (`.github/workflows/pages.yml`):
`https://marianamartinho.github.io/Trato_ds/`. Activarlo una vez en **Settings → Pages → Source: GitHub Actions**.

## Estructura

```
src/
  tokens/tokens.json        ← FUENTE DE VERDAD de tokens (primitivos + semánticos claro/oscuro)
  styles/tokens.css         ← generado por scripts/build-tokens.mjs (no editar)
  components/ui/            ← componentes del DS (copiables a la app)
  components/docs/          ← piezas del sitio de documentación
  content/registry.ts       ← menú, estados (Listo/Beta/Pendiente), links a Figma, inventario
  content/{foundations,components,patterns}/  ← páginas de documentación
```

## Stack

Next.js + React + TypeScript · Tailwind CSS v4 (tokens como `@theme`) · Radix UI · class-variance-authority. Base visual: el Figma de Trato.

## Tokens

- Primitivos → utilidades Tailwind: `bg-indigo-500`, `p-md`, `gap-lg`, `rounded-xl`, `shadow-xs`, `text-sm`.
- Semánticos → variables que cambian con el tema: `bg-(--bg-primary)`, `text-(--text-secondary)`, `border-(--border-secondary)`.
- Para anchos máximos usá valores explícitos (`max-w-[672px]`): los nombres de espaciado `xs…7xl` pisan `max-w-*` de Tailwind.

## Etapa 1 (esta versión)

- Fundamentos: color, tipografía, espaciado y radios, elevación, iconografía, voz.
- 18 componentes: Button, Badge, Input/Field/Textarea, SearchInput, Select, Checkbox, Switch, Tabs, Avatar, Tooltip, Alert/Banner, Modal, DropdownMenu, Table, Card/Stat, EmptyState, Progress/SegmentedBar, Chip/QuickAction, NavRail, DocIcon.
- 4 patrones: header de página, lista de documentos, dashboard, chat IA.
- Inventario de las 14 áreas de producto del Figma con links a cada pantalla.

**Etapa 2 (pendiente):** drawer, breadcrumbs, toolbar del editor, gráficos, date picker, toast, combobox, stepper.
