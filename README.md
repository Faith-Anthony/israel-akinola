# Israel Akinola - Digital Leadership Portfolio

A production-ready React + Vite portfolio website showcasing digital leadership and strategic thinking through a modern, editorial-focused design.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM v6
- **Fonts**: Newsreader (Display) & Manrope (Body)
- **Icons**: React Icons
- **Linting**: ESLint

## Prerequisites

- Node.js 18+ and npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── layout/              # Navbar, Footer, Layout wrapper
│   ├── homepage/            # Hero, CTA, preview sections
│   ├── about/               # About page components
│   ├── services/            # Services page components
│   ├── work/                # Work/Portfolio page components
│   ├── blog/                # Blog page components
│   ├── contact/             # Contact page components
│   ├── caseStudies/         # Case study details
│   └── common/              # Shared components
├── pages/                   # Page components (routes)
├── data/                    # Data files (blog data, etc.)
├── assets/
│   ├── images/              # Image files
│   └── icons/               # Icon files
├── styles/                  # Global CSS with Tailwind
├── App.tsx                  # Main app with routing
└── main.tsx                 # React entry point
```

## Key Features

- ✅ Fully responsive design
- ✅ Dark mode (default)
- ✅ Code splitting via React Router
- ✅ TypeScript for type safety
- ✅ Performance optimized build
- ✅ ESLint configured
- ✅ Production-ready

## Development Notes

- All components use TypeScript
- Styling is done with Tailwind CSS utility classes
- Color system defined in `tailwind.config.ts`
- Custom fonts imported via CSS
- Images are optimized in build

## Building & Deployment

The production build outputs to the `dist/` folder and is ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Development

```bash
# Start development server (opens automatically at http://localhost:5173)
npm run dev
```

## Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Code Quality

```bash
# Run ESLint
npm run lint
```

## Design System

This project implements the **"Sovereign Strategist"** design system—an editorial-first visual language emphasizing:

- **High-End Editorial Brutalism**: Sharp, decisive, intentional asymmetry
- **Color Palette**: Deep charcoal (`#131313`) with vibrant orange accents (`#FF8C00`)
- **Typography**: Serif headlines (Newsreader) + Sans-serif body (Manrope)
- **Principles**: Excessive negative space, no rounded forms, tonal depth

## Pages

- **Home** (`/`) - Landing page
- **About** (`/about`) - Personal background
- **Services** (`/services`) - Service offerings
- **Work** (`/work`) - Case studies and portfolio
- **Blog** (`/blog`) - Articles and insights
- **Contact** (`/contact`) - Contact information

## Features

✅ Responsive design (mobile-first)  
✅ Dark mode (system default)  
✅ Semantic HTML  
✅ Tailwind CSS with custom color system  
✅ React Router for client-side routing  
✅ Optimized for production (minified, code-split)  
✅ ESLint configured for code quality  

## Next Steps

1. Build out individual page components
2. Add blog functionality
3. Implement case study templates
4. Add contact form with validation
5. Integrate analytics
6. Add image optimization

## License

© 2026 Israel Akinola. All rights reserved.
