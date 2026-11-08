// Configuração Astro + Tailwind + Content Collections

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dinamicos.jefi.com.br',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  astro: {
    compressHTML: true,
  },
});