import type { Config } from 'tailwindcss';

// Con Tailwind v4, los tokens de tema se definen en globals.css con @theme.
// Este archivo se mantiene por compatibilidad.
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
