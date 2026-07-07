import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
// @ts-expect-error Node's test runner loads local TypeScript sources with --experimental-strip-types.
import { buildDynamicSitemapUrls, dynamicSitemapSourcePath, resolvePublicApiBaseUrl } from '../app/utils/sitemap.ts';

const testsDir = dirname(fileURLToPath(import.meta.url));
const sharedRoot = resolve(testsDir, '..');
function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

test('dynamic sitemap config uses the public API source endpoint', () => {
  const config = readFileSync(sharedPath('nuxt.config.ts'), 'utf8');
  const endpoint = readFileSync(sharedPath('server/api/sitemap-dynamic-urls.get.ts'), 'utf8');

  assert.match(config, /import \{ dynamicSitemapSourcePath \} from '\.\/app\/utils\/sitemap';/);
  assert.match(config, /sources:\s*\[[\s\S]*fetch: dynamicSitemapSourcePath/);
  assert.doesNotMatch(config, /sitemaps:\s*\{/);
  assert.match(config, /autoI18n: true/);
  assert.match(config, /cacheMaxAgeSeconds:\s*3600/);
  assert.match(config, /const responseCacheBase = process\.env\.APP_RESPONSE_CACHE_BASE \|\| '\.\.\/\.cache\/nitro';/);
  assert.match(config, /const ogImageCacheBase = process\.env\.APP_OG_IMAGE_CACHE_BASE \|\| '\.\.\/\.cache\/og-image';/);
  assert.match(config, /storage:\s*\{[\s\S]*'cache:nitro':\s*\{[\s\S]*driver:\s*'fsLite'[\s\S]*base:\s*responseCacheBase[\s\S]*\}/);
  assert.doesNotMatch(config, /'\/og\/\*\*'/);
  assert.match(config, /runtimeCacheStorage:\s*\{[\s\S]*driver:\s*'fsLite'[\s\S]*base:\s*ogImageCacheBase[\s\S]*\}/);
  assert.match(config, /'\/api\/sitemap-dynamic-urls':\s*\{[\s\S]*swr:\s*3600[\s\S]*\}/);
  assert.match(config, /'\/sitemap\.xml':\s*\{[\s\S]*swr:\s*3600[\s\S]*\}/);
  assert.match(config, /'\/_og\/r\/\*\*':\s*\{[\s\S]*'cache-control':\s*'no-cache, no-store, must-revalidate'[\s\S]*\}/);
  assert.match(endpoint, /buildDynamicSitemapUrls/);
  assert.match(endpoint, /process\.env\.APP_PUBLIC_API_BASE \|\| runtimeConfig\.public\.apiBase/);
  assert.match(endpoint, /apiBase,/);
  assert.doesNotMatch(endpoint, /runtimeConfig\.apiBase/);
  assert.equal(existsSync(sharedPath('server/api/__sitemap__/urls.ts')), false);
});

test('dynamic sitemap URL builder lists published multilingual content detail routes', async () => {
  const requests: URL[] = [];
  const fetcher = async (input: string | URL) => {
    const url = new URL(String(input));
    requests.push(url);
    const category = contentCategoryFromUrl(url);
    const page = url.searchParams.get('page');

    if (category === 'article' && page === '1') {
      return jsonResponse({
        content_items: [
          { slug: 'starter-guide', content_status: 'published', updated_at: '2026-06-20T08:00:00Z' },
          { slug: 'draft-story', content_status: 'draft', updated_at: '2026-06-21T08:00:00Z' }
        ]
      }, {
        'x-current-page': '1',
        'x-total-pages': '2'
      });
    }

    if (category === 'article') {
      return jsonResponse({
        content_items: [
          { slug: 'encoded space', content_status: 'published', created_at: '2026-06-22T08:00:00Z' },
          { slug: '', content_status: 'published' }
        ]
      }, {
        'x-current-page': '2',
        'x-total-pages': '2'
      });
    }

    return jsonResponse({ content_items: [] });
  };

  const urls = await buildDynamicSitemapUrls({
    apiBase: 'https://cms.example.com',
    appCode: 'starter',
    fetcher: fetcher as typeof fetch
  });

  assert.deepEqual(urls.map(url => url.loc), [
    '/articles/starter-guide',
    '/articles/encoded%20space'
  ]);
  assert.ok(urls.every(url => url._i18nTransform === true));
  assert.ok(urls.every(url => url._encoded === true));
  assert.equal(urls[0]?.lastmod, '2026-06-20T08:00:00.000Z');

  assert.equal(requests.some(url => url.pathname.includes('/product/')), false);
  assert.equal(requests.every(url => url.searchParams.get('order_by') === 'is_topping desc, id desc'), true);
  assert.equal(requests.some(url => url.pathname.includes('/gallery/')), false);
  assert.equal(requests.some(url => url.pathname.includes('/scene/')), false);
  assert.equal(requests[0]?.searchParams.get('per_page'), '100');
});

test('dynamic sitemap pagination follows next-page response headers before body totals', async () => {
  const pages: string[] = [];
  const fetcher = async (input: string | URL) => {
    const url = new URL(String(input));
    const category = contentCategoryFromUrl(url);
    const page = url.searchParams.get('page') || '1';

    if (category !== 'article') {
      return jsonResponse({ content_items: [] }, { 'x-current-page': '1', 'x-total-pages': '1' });
    }

    pages.push(page);

    if (page === '1') {
      return jsonResponse({
        total_pages: 1,
        content_items: [{ slug: 'first-page', content_status: 'published' }]
      }, { 'x-next-page': '2' });
    }

    return jsonResponse({
      total_pages: 99,
      content_items: [{ slug: 'second-page', content_status: 'published' }]
    }, { 'x-current-page': '2', 'x-total-pages': '2' });
  };

  const urls = await buildDynamicSitemapUrls({
    apiBase: 'https://cms.example.com',
    appCode: 'starter',
    fetcher: fetcher as typeof fetch
  });

  assert.deepEqual(pages, ['1', '2']);
  assert.deepEqual(urls.map(url => url.loc), [
    '/articles/first-page',
    '/articles/second-page'
  ]);
});

test('dynamic sitemap builder requires AppCode and resolves public API base variants', async () => {
  assert.equal(dynamicSitemapSourcePath, '/api/sitemap-dynamic-urls');
  assert.equal(resolvePublicApiBaseUrl('https://cms.example.com'), 'https://cms.example.com/public_api/v1');
  assert.equal(resolvePublicApiBaseUrl('https://cms.example.com/public_api'), 'https://cms.example.com/public_api/v1');
  assert.equal(resolvePublicApiBaseUrl('https://cms.example.com/public_api/v1'), 'https://cms.example.com/public_api/v1');
  assert.equal(resolvePublicApiBaseUrl('/cms', 'https://www.example.com'), 'https://www.example.com/cms/public_api/v1');
  assert.deepEqual(await buildDynamicSitemapUrls({ apiBase: 'https://cms.example.com' }), []);
});

function jsonResponse(data: unknown, headers: Record<string, string> = {}) {
  return {
    ok: true,
    headers: new Headers(headers),
    json: async () => data
  };
}

function contentCategoryFromUrl(url: URL) {
  const match = url.pathname.match(/\/data_categories\/([^/]+)\/content_items$/);
  assert.ok(match?.[1], `unexpected content items URL: ${url.pathname}`);
  return match[1];
}
