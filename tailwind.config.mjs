import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#4611a7',
        'accent-dark': '#320c7d',
        'accent-light': '#6a38cf',
        ink: 'rgb(var(--black))',
        muted: 'rgb(var(--gray))',
        'muted-light': 'rgb(var(--gray-light))',
      },
      fontFamily: {
        sans: ['"Atkinson"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--gray-dark))',
            '--tw-prose-headings': 'rgb(var(--black))',
            '--tw-prose-links': 'var(--accent)',
            '--tw-prose-bold': 'rgb(var(--black))',
            '--tw-prose-quotes': 'rgb(var(--black))',
            '--tw-prose-code': 'rgb(var(--black))',
            '--tw-prose-bullets': 'rgba(var(--gray), 0.4)',
            a: {
              textDecoration: 'none',
              fontWeight: '600',
              '&:hover': {
                color: 'var(--accent-dark)',
              },
            },
            code: {
              borderRadius: '0.4rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: 'rgba(var(--gray-light), 0.35)',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            blockquote: {
              borderLeftColor: 'var(--accent)',
              fontStyle: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
