import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  extends: ['../shared'],
  app: {
    pageTransition: { name: 'personal-page', mode: 'out-in' }
  }
});
