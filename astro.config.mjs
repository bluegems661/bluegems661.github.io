import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bluegems661.github.io',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
