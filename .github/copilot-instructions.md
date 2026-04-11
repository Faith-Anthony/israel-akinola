# Copilot Instructions - Israel Akinola Portfolio

## Project Overview

This is a production-ready React + Vite portfolio website implementing the "Sovereign Strategist" design system. It showcases digital leadership and strategic thinking through a modern, editorial-focused interface.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 (with custom color system)
- **Routing**: React Router DOM v6
- **Fonts**: Newsreader (display) + Manrope (body)
- **Development**: ESLint, TypeScript strict mode

## Project Structure

```
src/
├── components/layout/      # Layout components (Navbar, Footer, Layout wrapper)
├── pages/                   # Page components (6 main pages + placeholders for expansion)
├── assets/
│   ├── images/             # Image assets (placeholder structure)
│   └── icons/              # Icon assets
├── styles/                 # Global CSS with Tailwind directives
├── App.tsx                 # Main app with routing
└── main.tsx                # React entry point
```

## Key Components

### Layout Components
- **Navbar**: Sticky navigation with responsive mobile menu
- **Footer**: Multi-column footer with links and branding
- **Layout Wrapper**: Flex-based layout ensuring footer stays at bottom

### Pages (Placeholder Structure)
- HomePage (`/`)
- AboutPage (`/about`)
- ServicesPage (`/services`)
- WorkPage (`/work`)
- BlogPage (`/blog`)
- ContactPage (`/contact`)

## Design System

### Colors
- **Background**: `#131313` (surface)
- **Accent**: `#FF8C00` (primary-container)
- **Text**: `#E2E2E2` (on-surface)
- **Secondary Text**: `#DDC1AE` (on-surface-variant)

All colors are defined in `tailwind.config.ts` and available as Tailwind classes.

### Typography
- **Display**: Newsreader serif (headlines, large statements)
- **Body**: Manrope sans-serif (content, UI)
- **Sizes**: `text-display`, `text-headline`, `text-body` utility classes

### Principles
- High-end editorial brutalism
- Excessive negative space
- No rounded forms (sharp, decisive)
- Tonal depth through surface layers

## Development Workflow

### Getting Started
```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### When Adding New Pages
1. Create component in `src/pages/PageName.tsx`
2. Add route to `src/App.tsx`
3. Add navigation link in `Navbar.tsx` and `Footer.tsx`

### When Adding New Components
1. Create component in `src/components/` (organize by feature)
2. Export from component index file for clean imports
3. Use Tailwind utilities for styling
4. Maintain TypeScript types

### Styling Guidelines
- Use Tailwind utility classes
- Custom components in `@layer components` in globals.css
- Color palette via custom Tailwind color names
- Dark mode is default (class-based)

## Common Tasks

### Add a new route
Edit `src/App.tsx` to add Route and import the page component.

### Modify the color system
Update `tailwind.config.ts` in the `colors` section of `extend.theme`.

### Change typography
Modify font families in `tailwind.config.ts` or utility classes in `globals.css`.

### Build production version
Run `npm run build` → creates `dist/` folder ready for deployment.

## Performance Considerations

- ✅ Code splitting via React Router
- ✅ Tree-shaking enabled in Vite build
- ✅ Tailwind CSS optimized for production
- ✅ TypeScript for type safety
- ✅ ESLint configured for code quality

## Next Phase (Ready for Development)

1. **Homepage**: Hero section with introduction and call-to-actions
2. **About**: Biography, expertise, and philosophy sections
3. **Services**: Detailed service offerings with descriptions
4. **Work**: Case studies with project details and results
5. **Blog**: Article listing and individual post templates
6. **Contact**: Contact form with validation

## Important Notes

- All page components are currently placeholder stubs
- Base layout (Navbar, Footer, Layout) is production-ready
- Routing is configured and working
- Dark mode is the default and system-ready
- No external APIs or database connections yet configured

## File Locations

- **Config files**: Root level (`vite.config.ts`, `tailwind.config.ts`, etc.)
- **Components**: `src/components/`
- **Pages**: `src/pages/`
- **Styles**: `src/styles/` (global CSS with Tailwind directives)
- **Assets**: `src/assets/` (images, icons)
- **Static files**: `public/` (if needed, for favicons, etc.)

## Git Workflow

- Keep commits focused on single features
- Use descriptive commit messages
- Development on `main` branch (configure branches as needed)
- `.gitignore` already configured to exclude node_modules, dist, etc.

---

**Project Status**: ✅ Foundation Complete - Ready for Page Development
