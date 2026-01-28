/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#111111',
          overlay: '#171717',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
          muted: '#606060',
        },
        border: {
          DEFAULT: '#262626',
          subtle: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Helvetica Now Display', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ABC Diatype Mono', 'monospace'],
        display: ['Helvetica Now Display', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '-0.01em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
};
