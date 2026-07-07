import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const templateRoot = resolve(testsDir, '..');

function templatePath(path = '') {
  return resolve(templateRoot, path);
}

function source(path: string) {
  return readFileSync(path, 'utf8');
}

test('personal-site template exposes core personal website routes', () => {
  for (const page of [
    'index.vue',
    'about.vue',
    'projects/index.vue',
    'projects/[id].vue',
    'articles/index.vue',
    'articles/[id].vue',
    'contact.vue',
    'privacy-policy.vue',
    'terms-of-use.vue'
  ]) {
    assert.equal(existsSync(templatePath(`app/pages/${page}`)), true, `${page} should exist`);
  }
});

test('personal-site is an independent Nuxt layer over shared', () => {
  assert.match(source(templatePath('nuxt.config.ts')), /extends:\s*\['\.\.\/shared'\]/);
  assert.match(source(templatePath('app/assets/css/main.css')), /--color-brand-primary/);
  assert.match(source(templatePath('app/app.vue')), /<NuxtLayout name="site-layout">/);
});

test('personal-site enables page transition animation', () => {
  assert.match(source(templatePath('nuxt.config.ts')), /pageTransition:\s*\{\s*name:\s*'personal-page',\s*mode:\s*'out-in'\s*\}/);
  assert.match(source(templatePath('app/assets/css/main.css')), /\.personal-page-enter-active/);
  assert.match(source(templatePath('app/assets/css/main.css')), /\.personal-page-leave-to/);
});

test('personal-site locale files include portfolio content in both languages', () => {
  const zhCn = source(templatePath('i18n/locales/zh-CN.ts'));
  const en = source(templatePath('i18n/locales/en.ts'));

  assert.match(zhCn, /个人网站模板/);
  assert.match(zhCn, /projectsPage/);
  assert.match(en, /Personal Site Template/);
  assert.match(en, /projectsPage/);
});
