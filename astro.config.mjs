import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Staging/prototype URL. Production cutover to renaise.com happens after approval.
  site: 'https://renaise.github.io',
  integrations: [tailwind()],
  output: 'static',
});
