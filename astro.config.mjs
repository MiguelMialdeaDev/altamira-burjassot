import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://miguelmialdeadev.github.io',
  base: '/altamira-burjassot',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
});
