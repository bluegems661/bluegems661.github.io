import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maxzinke.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
