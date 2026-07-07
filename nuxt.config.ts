import { defineNuxtConfig } from 'nuxt/config';

const appTemplate = process.env.APP_TEMPLATE || 'default';

export default defineNuxtConfig({
  extends: [`./templates/${appTemplate}`]
});
