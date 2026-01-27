# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shafiq Law Associate is a professional law firm website built with Astro, React, and TinaCMS. The site is deployed to Vercel with server-side rendering.

## Commands

```bash
npm run dev        # Start dev server with TinaCMS (port 4321)
npm run build      # Production build (TinaCMS + Astro)
npm run preview    # Preview production build locally
```

Note: Uses Bun as package manager (bun.lock present).

## Architecture

### Technology Stack
- **Astro 5.3** - Server-side rendering with Vercel adapter
- **React 19** - Interactive components (hydrated with `client:load`)
- **TinaCMS** - Headless CMS for content management
- **Tailwind CSS** - Custom Dracula-inspired color theme

### Key Directories
- `src/pages/` - Astro pages (routing)
- `src/components/` - Astro components for layout
- `src/components/React/` - React components organized by feature (Home/, AboutUS/, Services/, Contact/, etc.)
- `src/config/SiteConfig/config.json` - All site content (services, FAQs, pricing, team, contact info)
- `src/config/FeatureFlag/featureflag.json` - Toggle pages/components on/off
- `src/content/blog/` - MDX blog posts
- `tina/` - TinaCMS configuration

### Component Pattern
Astro pages import React components and pass data from config files:
```astro
---
import Landing from "../components/React/Home/Landing";
import config from "../config/SiteConfig/config.json";
---
<Landing client:load data={config} />
```

### Feature Flags
Pages and components can be enabled/disabled via `src/config/FeatureFlag/featureflag.json`. Check this file when a page appears blank or a component doesn't render.

### Content Collections
Blog posts use Astro content collections with Zod validation:
- Schema: `title`, `description`, `pubDate`, `draft`, `tags`
- Location: `src/content/blog/*.md`

### Styling
- Custom color theme in `tailwind.config.mjs` (Dracula-inspired palette)
- Global styles in `src/styles/global.css`
- Animations use Framer Motion

### Forms
Contact forms use React Hook Form (`react-hook-form`).

## Configuration Files

- `astro.config.mjs` - Vercel adapter, MDX, React, Tailwind integrations
- `tailwind.config.mjs` - Custom theme colors and animations
- `tina/config.ts` - TinaCMS schema and configuration
- `src/content.config.ts` - Blog collection schema
