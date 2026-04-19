# Developer Handoff Guide

## Overview

This is a production-ready React + Vite portfolio for Israel Akinola. The project is fully functional and deployed. All development artifacts and unnecessary documentation have been cleaned up.

## Quick Start

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Lint code
npm run lint
```

## Project Architecture

### Pages (6 main routes)
- **HomePage** (`/`) - Hero, featured content, CTAs
- **AboutPage** (`/about`) - Biography, experience, philosophy
- **ServicesPage** (`/services`) - Service offerings and approach
- **WorkPage** (`/work`) - Case studies and portfolio
- **BlogPage** (`/blog`) - Blog articles
- **ContactPage** (`/contact`) - Contact form

### Component Organization
- `layout/` - Navigation, Footer, Layout wrapper
- `homepage/` - Home page sections
- `about/`, `services/`, `work/`, `blog/`, `contact/` - Feature-specific components
- `caseStudies/` - Case study detail pages
- `common/` - Reusable components

### Styling
- **Engine**: Tailwind CSS (configured in `tailwind.config.ts`)
- **Colors**: Custom color system defined in Tailwind config
- **Typography**: Newsreader (display), Manrope (body)
- **Approach**: Utility-first, dark mode by default

## Important Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build configuration |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `.eslintrc.cjs` | ESLint rules |
| `package.json` | Dependencies and scripts |

## Deployment Ready

The `dist/` folder contains the production build and is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

To build: `npm run build`

## Code Quality

- ✅ TypeScript strict mode enabled
- ✅ ESLint configured (run `npm run lint`)
- ✅ Tree-shaking enabled
- ✅ Code splitting via React Router
- ✅ Optimized production build

## Key Dependencies

- `react@18.2.0` - UI framework
- `react-router-dom@6.22.0` - Routing
- `framer-motion@10.18.0` - Animations
- `react-icons@5.6.0` - Icon library
- `tailwindcss@3.4.1` - Styling

## Development Workflow

1. Create components in `src/components/`
2. Create pages in `src/pages/`
3. Add routes in `src/App.tsx`
4. Use Tailwind utilities for styling
5. Maintain TypeScript types throughout
6. Run `npm run lint` before committing
7. Test `npm run build` before deployment

## Notes

- All animations are implemented with Framer Motion
- Images are optimized during build
- ESLint enforces code standards
- No external databases configured (add as needed)
- Environment variables can be added via `.env` files

## Git

The `.git` folder contains full history. Use standard Git workflow for updates.

---

**Project Status**: ✅ Production Ready
**Last Updated**: April 2026
