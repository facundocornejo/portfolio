# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio personal de Facundo — Fullstack Developer de Paraná, Argentina. Sitio bilingue (ES/EN) con dark/light mode.

## Tech Stack

- **Framework:** Astro (static-first, islas de interactividad con React)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **i18n:** nanostores o solución ligera para Astro (ES default, detección de navegador)
- **Deploy:** Vercel, Netlify, o Cloudflare Pages desde main

## Commands

```bash
npm run dev       # Dev server con hot reload
npm run build     # Build de producción
npm run preview   # Preview del build local
```

## Architecture

**Diseño "El Índice"** (adoptado 29/08/2026): la home es una página-índice tipográfica
(inspiración worrydream.com) — Masthead con intro conversacional, índice de proyectos
agrupado (En producción / En camino / Abajo del capó) con hover-preview en desktop y
miniaturas en mobile, "Cómo trabajo" y "Encontrame" (mail + form Netlify). Cada case
study tiene banner con acento propio (`accent` en case-studies.ts) y portada arriba.
Tipografía: Petrona (display) + Public Sans (body) + Fragment Mono. Temas: tinta
petróleo (dark) / papel cálido (light), ámbar como acento — contraste AA validado.

```
src/
├── components/
│   ├── sections/      # Home: Hero (masthead+intro), Projects (índice), Workflow (cómo trabajo), Contact (encontrame)
│   ├── Header.astro   # Slim: nombre + CV + toggles (el índice ES la navegación)
│   ├── Footer.astro
│   ├── ThemeToggle.astro
│   └── LanguageToggle.tsx  # Isla React
├── layouts/           # Layout principal (Layout.astro) — incluye el observer de .scroll-fade
├── pages/
│   ├── index.astro    # Home (single page)
│   ├── resume.astro   # Resume dedicado
│   └── projects/[slug].astro  # Case studies dinámicos
├── i18n/              # Traducciones ES/EN type-safe en TS (ui.ts) + utils.ts y store.ts
├── styles/            # Estilos globales + variables dark/light (global.css)
└── content/           # Data en TS: projects.ts, case-studies.ts
public/
├── images/            # Screenshots de proyectos
├── cv/                # PDF del CV (ES/EN)
└── fonts/             # Fuentes custom
```

## Key Technical Decisions

- **Dark/Light mode:** Respetar `prefers-color-scheme` como default, guardar preferencia en `localStorage`, transición suave (sin flash)
- **i18n:** Español por defecto, toggle ES/EN en header, detectar idioma del navegador si es posible
- **Mobile first:** Diseñar primero mobile, escalar a desktop. Ambas vistas igual de importantes
- **Animaciones:** Intersection Observer o librería ligera (AOS/motion). Siempre respetar `prefers-reduced-motion`
- **Performance:** Astro Image para optimización, lazy loading, minimizar JS (solo donde haga falta interactividad)
- **SEO:** Meta tags, Open Graph, title/description por idioma
- **Accesibilidad:** Aria labels, contraste en ambos temas, navegación por teclado

## Project Conventions

- **Nunca usar la palabra "Junior"** en ningún contenido del sitio
- Código limpio y bien organizado — recruiters van a mirar este repo en GitHub
- Preferir componentes Astro nativos; usar React solo para islas interactivas
- Minimizar JavaScript del lado del cliente

## Workflow Preferences

- Entrar en modo planificación para tareas no triviales (>3 pasos o decisiones arquitectónicas)
- Usar subagentes para investigación y exploración paralela
- Tras correcciones: actualizar `tasks/lessons.md` con el patrón aprendido
- Nunca marcar tarea como completada sin verificar que funciona
- Para cambios no triviales, preguntarse "hay una forma más elegante?" antes de presentar
- Plan de trabajo en `tasks/todo.md` con items verificables
