import type { Config } from 'tailwindcss';
// import { theme } from 'tailwindcss/defaultTheme';
import defaultTheme from 'tailwindcss/defaultTheme';

function getTintVariantColor(color: string, intensity: number) {
  return `color-mix(in srgb, ${color}, white ${intensity * 100}%)`;
}
const tintVariants = {
  50: 0.95, //95%
  100: 0.9, //90%
  200: 0.7, //70%
  300: 0.5, //50%
  400: 0.3, //30%
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: '539px',
      short: { raw: '((max-height:849px) and (max-width:767px))' },
      se: { raw: '((max-height:668px) and (max-width:376px))' },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
