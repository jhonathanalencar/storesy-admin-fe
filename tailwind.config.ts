import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/subdomains/**/*.tsx',
    './src/shared/components/**/*.tsx',
    './src/shared/layouts/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'url(https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-10%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpAndFadeOut: {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-10%)' },
        },
      },
      animation: {
        'fade-out': 'fadeOut 300ms ease-in-out',
        'slide-down-and-fade': 'slideDownAndFade 400ms ease-in-out',
        'slide-up-and-fade-out': 'slideUpAndFadeOut 300ms ease-in-out',
      },
    },
  },
};
export default config;
