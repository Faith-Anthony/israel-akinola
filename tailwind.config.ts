import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Dark Theme palette
        'surface': '#09090b',
        'surface-dim': '#050506',
        'surface-container-lowest': '#000000',
        'surface-container-low': '#121214',
        'surface-container': '#18181b',
        'surface-container-high': '#202024',
        'surface-container-highest': '#27272a',
        'on-surface': '#fafafa',
        'on-surface-variant': '#a1a1aa',
        'primary': '#ffb77d',
        'primary-container': '#d97706',
        'on-primary': '#4d2600',
        'on-primary-fixed': '#ffedd5',
        'on-primary-fixed-variant': '#ffb77d',
        'primary-fixed-dim': '#f97316',
        'inverse-primary': '#f59e0b',
        'secondary': '#a1a1aa',
        'secondary-container': '#27272a',
        'on-secondary': '#18181b',
        'on-secondary-fixed': '#fafafa',
        'on-secondary-container': '#e4e4e7',
        'secondary-fixed-dim': '#a1a1aa',
        'tertiary-container': '#3f3f46',
        'tertiary-fixed': '#52525b',
        'tertiary-fixed-dim': '#71717a',
        'on-tertiary': '#18181b',
        'on-tertiary-fixed': '#fafafa',
        'on-tertiary-container': '#f4f4f5',
        'inverse-surface': '#fafafa',
        'inverse-on-surface': '#09090b',
        'outline-variant': '#3f3f46',
        'error': '#ef4444',
        'error-container': '#7f1d1d',
        'on-error': '#fecaca',
        'on-background': '#fafafa',
      },
      fontFamily: {
        'serif': ['Newsreader', 'serif'],
        'sans': ['Manrope', 'sans-serif'],
        'display': ['Oswald', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'headline-md': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      letterSpacing: {
        'tight': '-0.02em',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config
