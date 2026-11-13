import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // Replace with your real domain after choosing one.
  output: 'static',
  build: {
    format: 'directory',
  },
});
