import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const templateRoot = resolve(testsDir, '..');
const sharedRoot = resolve(templateRoot, '../shared');

function templatePath(path = '') {
  return resolve(templateRoot, path);
}

function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

test('public API article adapter reads API values without locale fallbacks', () => {
  const bundleSource = readFileSync(sharedPath('app/composables/usePublicApiBundles.ts'), 'utf8');

  assert.doesNotMatch(bundleSource, /resolveLocaleValue|LocaleMessageNode|resolveCompactLocaleMessageNode/);
  assert.match(bundleSource, /collectText\(value\)\.join\('\\n'\)\.trim\(\)/);
  assert.doesNotMatch(bundleSource, /fallbackSnapshot|defaultArticleFallbacks|ArticleFallbacks|apiFallbacks/);
  assert.doesNotMatch(bundleSource, /publicProductSortOptions|PublicApiFallbacks/);
  assert.doesNotMatch(bundleSource, /zhCN|i18n\/locales\/zh-CN/);
});

test('all footer contact link options keep the same route targets', () => {
  const zhCnSource = readFileSync(templatePath('i18n/locales/zh-CN.ts'), 'utf8');
  const expectedTargets = extractFooterContactTargets(zhCnSource);
  const localeFiles = readdirSync(templatePath('i18n/locales')).filter(file => file.endsWith('.ts'));

  for (const file of localeFiles) {
    const source = readFileSync(templatePath(`i18n/locales/${file}`), 'utf8');

    assert.deepEqual(extractFooterContactTargets(source), expectedTargets, `${file} footer contact links should match zh-CN targets`);
  }
});

function extractFooterContactTargets(source: string) {
  const match = source.match(/title: '(?:联系|Contact)',\s*links:\s*\[([\s\S]*?)\]\s*\}/);

  assert.ok(match, 'footer contact column should exist');

  return extractLinkTargets(match[1] ?? '');
}

function extractLinkTargets(columnSource: string) {
  return Array.from(columnSource.matchAll(/href: '([^']+)'(?:,\s*external: true)?/g)).map(match => match[1] ?? '');
}
