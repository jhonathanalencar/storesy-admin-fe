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
        home: "url('~/src/assets/images/woman-hands-typing-on-laptop-keyboard.avif')",
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
