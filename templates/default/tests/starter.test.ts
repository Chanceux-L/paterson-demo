import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const templateRoot = resolve(testsDir, '..');
const sharedRoot = resolve(templateRoot, '../shared');
const repoRoot = resolve(templateRoot, '../..');

function templatePath(path = '') {
  return resolve(templateRoot, path);
}

function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

function repoPath(path = '') {
  return resolve(repoRoot, path);
}

function source(file: string) {
  return readFileSync(file, 'utf8');
}

test('root Nuxt config selects the default template layer by default', () => {
  const config = source(repoPath('nuxt.config.ts'));
  const defaultLayerConfig = source(templatePath('nuxt.config.ts'));
  const sharedConfig = source(sharedPath('nuxt.config.ts'));

  assert.match(config, /const appTemplate = process\.env\.APP_TEMPLATE \|\| 'default';/);
  assert.match(config, /extends:\s*\[`\.\/templates\/\$\{appTemplate\}`\]/);
  assert.match(defaultLayerConfig, /extends:\s*\['\.\.\/shared'\]/);
  assert.match(sharedConfig, /const appTemplate = resolveAppTemplateName\(process\.env\.APP_TEMPLATE\);/);
  assert.match(sharedConfig, /'#app-template': appTemplateAppAliasPath/);
});

test('starter routes are scoped to v2-style pages', () => {
  const pageFiles = listFiles(`${templateRoot}/app/pages`)
    .filter(file => !file.endsWith('.DS_Store'))
    .map(file => file.replace(new RegExp(`^${templateRoot}/app/pages/`), ''))
    .sort();

  assert.deepEqual(pageFiles, [
    'about.vue',
    'articles/[id].vue',
    'articles/index.vue',
    'contact.vue',
    'data/[id].vue',
    'data/index.vue',
    'index.vue',
    'og-preview.vue',
    'palette.vue',
    'philosophy.vue',
    'privacy-policy.vue',
    'terms-of-use.vue'
  ]);

  for (const removed of ['concept.vue', 'dealers.vue', 'products/index.vue', 'gallerys/index.vue', 'scenes/index.vue']) {
    assert.equal(existsSync(`${templateRoot}/app/pages/${removed}`), false, `${removed} should not remain as a starter route`);
  }

  assert.doesNotMatch(source(sharedPath('nuxt.config.ts')), /'\/concept': \{ redirect: '\/philosophy' \}/);
});

test('only Simplified Chinese and English locales are configured', () => {
  const languages = source(sharedPath('app/utils/languages.ts'));
  const localeFiles = readdirSync(templatePath('i18n/locales')).filter(file => file.endsWith('.ts')).sort();

  assert.deepEqual(localeFiles, ['en.ts', 'zh-CN.ts']);
  assert.match(languages, /code: 'zh-CN'/);
  assert.match(languages, /code: 'en'/);
  assert.doesNotMatch(languages, /code: 'de'|code: 'fr'|code: 'ja'|code: 'ar'/);
});

test('starter pages use i18n placeholders and app SEO wrapper', () => {
  const pages = [
    templatePath('app/pages/index.vue'),
    templatePath('app/pages/about.vue'),
    templatePath('app/pages/philosophy.vue'),
    templatePath('app/pages/contact.vue'),
    templatePath('app/pages/data/index.vue'),
    templatePath('app/pages/data/[id].vue'),
    templatePath('app/pages/articles/index.vue'),
    templatePath('app/pages/articles/[id].vue'),
    templatePath('app/pages/og-preview.vue'),
    templatePath('app/pages/palette.vue')
  ];

  for (const file of pages) {
    const page = source(file);

    assert.match(page, /useAppSeoMeta\(/, `${file} should use useAppSeoMeta`);
    assert.doesNotMatch(page, /useSeoMeta\(/, `${file} should not bypass useAppSeoMeta`);
  }

  const zhCn = source(templatePath('i18n/locales/zh-CN.ts'));
  assert.match(zhCn, /title: '\[\[HERO_TITLE\]\]'/);
  assert.match(zhCn, /title: '\[\[PHILOSOPHY_PAGE_TITLE\]\]'/);
  assert.match(source(templatePath('i18n/locales/en.ts')), /title: '\[\[HERO_TITLE\]\]'/);
});

test('SEO, GEO, OG Image, cookie consent, inquiry, and request modules are preserved', () => {
  const config = source(sharedPath('nuxt.config.ts'));
  const app = source(templatePath('app/app.vue'));
  const seoWrapper = source(sharedPath('app/composables/useAppSeoMeta.ts'));
  const ogTemplate = source(templatePath('app/components/OgImage/Default.takumi.vue'));
  const ogPreview = source(templatePath('app/components/site/AppOgImagePreview.vue'));
  const profile = source(sharedPath('config/site-profile.ts'));

  assert.match(config, /'@nuxtjs\/seo'/);
  assert.match(config, /ogImage:/);
  assert.match(config, /name: 'Noto Sans SC'[\s\S]*provider: 'local'[\s\S]*subsets: \['latin'\]/);
  assert.equal(existsSync(sharedPath('public/fonts/noto-sans-sc/noto-sans-sc-normal-normal-latin.woff2')), true);
  assert.match(config, /llms:/);
  assert.match(config, /const llmsSections = siteProfile\.ai\.llmsSections\.map/);
  assert.match(config, /links: section\.links\?\.map\(link => \(\{ \.\.\.link \}\)\) \?\? \[\]/);
  assert.match(profile, /llmsSections:/);
  assert.doesNotMatch(config, /LLMS_OVERVIEW_POINT_1/);
  assert.match(config, /robots:/);
  assert.match(config, /schemaOrg:/);
  assert.match(seoWrapper, /defineOgImage\(APP_OG_IMAGE_COMPONENT/);
  assert.match(seoWrapper, /fontFamily: APP_OG_IMAGE_FONT_FAMILY/);
  assert.match(ogTemplate, /<SiteAppOgImagePreview/);
  assert.match(ogPreview, /brand\?: string/);
  assert.match(ogPreview, /slogan\?: string/);
  assert.match(ogPreview, /fontFamily\?: string/);
  assert.match(ogPreview, /fontFamily \|\| 'Noto Sans SC, sans-serif'/);
  assert.equal(existsSync(templatePath('app/components/OgImage/Default.takumi.vue')), true);
  assert.equal(existsSync(sharedPath('app/utils/og-image.ts')), true);
  assert.match(app, /<SiteGeoCitationBooster \/>/);
  assert.match(app, /<SiteCookieConsent \/>/);
  assert.match(source(templatePath('app/pages/contact.vue')), /<ContactInquiryForm \/>/);
  assert.match(source(sharedPath('app/composables/useRequest.ts')), /createAlova/);
  assert.match(source(sharedPath('app/composables/usePublicApiBundles.ts')), /useDataCategory/);
});

test('site components are reused and starter components fill only page-section gaps', () => {
  assert.equal(existsSync(templatePath('app/components/site/AppHeader.vue')), true);
  assert.equal(existsSync(templatePath('app/components/site/AppFooter.vue')), true);
  assert.equal(existsSync(templatePath('app/components/site/LanguageSwitcher.vue')), true);
  assert.equal(existsSync(templatePath('app/components/site/CookieConsent.vue')), true);
  assert.equal(existsSync(templatePath('app/components/site/BrandPageHero.vue')), true);
  assert.equal(existsSync(templatePath('app/components/site/AppCta.vue')), true);
  assert.equal(existsSync(templatePath('app/components/site/Pagination.vue')), true);

  for (const component of ['HeroSection.vue', 'FeatureSection.vue', 'ContentCard.vue', 'DataCard.vue', 'Button.vue', 'Badge.vue']) {
    assert.equal(existsSync(`${templateRoot}/app/components/starter/${component}`), true);
  }
});

test('tokens and design system page expose starter design primitives', () => {
  const main = source(templatePath('app/assets/css/main.css'));
  const palette = source(templatePath('app/pages/palette.vue'));
  const zhCn = source(templatePath('i18n/locales/zh-CN.ts'));
  const en = source(templatePath('i18n/locales/en.ts'));

  for (const token of ['--color-brand-600', '--color-primary', '--fs-hero-size', '--section-padding-y', '--pattern-grid']) {
    assert.match(main, new RegExp(token));
  }

  assert.match(main, /@theme/);
  assert.match(main, /--color-brand-primary/);
  assert.match(main, /--radius-card/);
  assert.match(palette, /designSystemPage\.sections\.colors/);
  assert.match(palette, /StarterHeroSection/);
  assert.match(zhCn, /title: '设计系统'/);
  assert.match(en, /title: 'Design System'/);
  assert.doesNotMatch(extractObjectBlock(zhCn, 'designSystemPage'), /\[\[/);
  assert.doesNotMatch(extractObjectBlock(en, 'designSystemPage'), /\[\[/);
});

test('starter profile uses placeholders instead of previous business copy', () => {
  const profile = source(sharedPath('config/site-profile.ts'));
  const zhCn = source(templatePath('i18n/locales/zh-CN.ts'));
  const geoBooster = source(templatePath('app/components/site/GeoCitationBooster.vue'));

  assert.match(profile, /name: '\[\[COMPANY_NAME\]\]'/);
  assert.match(profile, /production: '\[\[SITE_CANONICAL\]\]'/);
  assert.match(geoBooster, /starter placeholder page/);

  const combined = `${profile}\n${zhCn}\n${geoBooster}`;
  assert.doesNotMatch(combined, /中赛照明|NINGBO\s+CLSA\s*SELF/i);
});

function listFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = `${dir}/${entry.name}`;

    if (entry.isDirectory()) {
      return listFiles(path);
    }

    return [path];
  });
}

function extractObjectBlock(content: string, key: string) {
  const start = content.indexOf(`${key}: {`);

  assert.notEqual(start, -1, `${key} should exist`);

  let depth = 0;
  for (let index = start; index < content.length; index += 1) {
    const character = content[index];

    if (character === '{') {
      depth += 1;
    } else if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        return content.slice(start, index + 1);
      }
    }
  }

  assert.fail(`${key} block should be closed`);
}
