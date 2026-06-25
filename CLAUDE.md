# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio personal de Facundo — Fullstack Developer de Paraná, Argentina. Sitio bilingue (ES/EN) con dark/light mode. Ver `portfolio-context.md` para el brief completo (proyectos, dirección visual, assets).

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

Single page (`src/pages/index.astro`) con secciones: Hero, Proyectos, Sobre Mí, Contacto. Página separada en `src/pages/resume.astro`.

```
src/
├── components/        # Componentes Astro y React (islas)
├── layouts/           # Layout principal
├── pages/
│   ├── index.astro    # Home (single page)
│   └── resume.astro   # Resume dedicado
├── i18n/              # Traducciones ES/EN (es.json, en.json)
├── styles/            # Estilos globales + variables dark/light
└── content/           # Data de proyectos, experiencia
public/
├── images/            # Screenshots de proyectos
├── cv/                # PDF del CV
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
