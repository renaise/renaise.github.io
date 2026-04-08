import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Matches https://renaise.github.io/ (user site repo; base stays '/')
  site: 'https://renaise.github.io',
  integrations: [tailwind()],
  output: 'static',
});
