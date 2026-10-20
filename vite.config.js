import { defineConfig } from 'vite';

// Relative asset URLs allow the same build to work on GitHub Pages project sites
// (https://username.github.io/repository-name/) and custom domains.
export default defineConfig({
  base: './',
});
