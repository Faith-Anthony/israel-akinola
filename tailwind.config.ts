import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sovereign Strategist Palette
        'surface': '#131313',
        'surface-dim': '#131313',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1b1b1b',
        'surface-container': '#1f1f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353535',
        'on-surface': '#e2e2e2',
        'on-surface-variant': '#ddc1ae',
        'primary': '#ffb77d',
        'primary-container': '#ff8c00',
        'on-primary': '#4d2600',
        'on-primary-fixed': '#2f1500',
        'on-primary-fixed-variant': '#6e3900',
        'primary-fixed-dim': '#ffb77d',
        'inverse-primary': '#904d00',
        'secondary': '#c6c6c7',
        'secondary-container': '#454747',
        'on-secondary': '#2f3131',
        'on-secondary-fixed': '#1a1c1c',
        'on-secondary-container': '#b4b5b5',
        'secondary-fixed-dim': '#c6c6c7',
        'tertiary-container': '#aaaaaa',
        'tertiary-fixed': '#e3e2e2',
        'tertiary-fixed-dim': '#c7c6c6',
        'on-tertiary': '#2f3131',
        'on-tertiary-fixed': '#1a1c1c',
        'on-tertiary-container': '#3e3f3f',
        'inverse-surface': '#e2e2e2',
        'inverse-on-surface': '#303030',
        'outline-variant': '#564334',
        'error': '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005',
        'on-background': '#e2e2e2',
      },
      fontFamily: {
        'serif': ['Newsreader', 'serif'],
        'sans': ['Manrope', 'sans-serif'],
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
