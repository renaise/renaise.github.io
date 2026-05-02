import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Production canonical domain.
  site: 'https://renaise.com',
  integrations: [tailwind()],
  output: 'static',
});
