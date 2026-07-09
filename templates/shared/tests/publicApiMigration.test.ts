import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const sharedRoot = resolve(testsDir, '..');
const defaultLayerRoot = resolve(sharedRoot, '../default');

function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

function defaultLayerPath(path = '') {
  return resolve(defaultLayerRoot, path);
}

test('public_api migration modules are present', () => {
  [
    sharedPath('app/composables/useCookieConsent.ts'),
    sharedPath('app/utils/cookie-consent.ts'),
    sharedPath('app/composables/useDataCategory.ts'),
    sharedPath('app/composables/useInquiries.ts'),
    sharedPath('app/composables/useRequest.ts'),
    sharedPath('app/utils/geo-articles.ts'),
    sharedPath('app/utils/visit-tracker.ts'),
    sharedPath('app/plugins/visit-tracker.client.ts')
  ].forEach(path => assert.equal(existsSync(path), true, `${path} should exist`));
  assert.equal(existsSync(sharedPath('app/utils/inquiries.ts')), false, 'app/utils/inquiries.ts should be folded into useInquiries');
});

test('cookie consent copy is rendered through useI18n without a stale shared type', () => {
  const componentSource = readFileSync(defaultLayerPath('app/components/site/CookieConsent.vue'), 'utf8');

  assert.equal(existsSync(sharedPath('app/types/cookie-consent-copy.ts')), false);
  assert.match(componentSource, /const \{ t \} = useI18n\(\);/);
  assert.match(componentSource, /t\('cookie\.title'\)/);
  assert.doesNotMatch(componentSource, /zhCN|i18n\/locales\/zh-CN|resolveLocaleValue/);
  assert.doesNotMatch(componentSource, /title:\s*'我们重视您的隐私'/);
});

test('cookie consent state uses Nuxt useCookie', () => {
  const composableSource = readFileSync(sharedPath('app/composables/useCookieConsent.ts'), 'utf8');
  const utilitySource = readFileSync(sharedPath('app/utils/cookie-consent.ts'), 'utf8');

  assert.match(composableSource, /useCookie<CookieConsentSettings \| null>\(cookieConsentName/);
  assert.match(composableSource, /sameSite:\s*'lax'/);
  assert.match(composableSource, /consentCookie\.value = savedSettings/);
  assert.doesNotMatch(composableSource, /default:\s*\(\)\s*=>/);
  assert.match(utilitySource, /export const cookieConsentName = 'clasself_cookie_consent'/);
  assert.match(utilitySource, /parseCookieConsentSettings/);
  assert.doesNotMatch(utilitySource, /document\.cookie/);
});

test('resolved site config composable keeps public_api configuration shape', () => {
  const composableSource = readFileSync(sharedPath('app/composables/useResolvedSiteConfig.ts'), 'utf8');

  assert.match(composableSource, /function createResolvedSiteConfig/);
  assert.match(composableSource, /companyName:\s*siteCopy\.companyName/);
  assert.match(composableSource, /shortName:\s*siteCopy\.shortName/);
  assert.match(composableSource, /siteTitle/);
  assert.match(composableSource, /siteDescription/);
  assert.match(composableSource, /canonical/);
  assert.match(composableSource, /api:\s*\{/);
  assert.match(composableSource, /baseUrl/);
  assert.match(composableSource, /appCode/);
  assert.match(composableSource, /trackerApi/);
  assert.match(composableSource, /dataCategories/);
  assert.match(composableSource, /navigation/);
  assert.match(composableSource, /footer/);
  assert.match(composableSource, /as const/);
  assert.match(composableSource, /const \{ tm \} = useI18n\(\);/);
  assert.match(composableSource, /resolveTranslatedMessageTree\(tm\('data\.siteConfig'\)\)/);
  assert.match(composableSource, /resolveTranslatedMessageTree\(tm\('footer'\)\)/);
  assert.doesNotMatch(composableSource, /zhCN|i18n\/locales\/zh-CN|resolveLocaleValue/);
});

test('request layer is Alova based and exposes public_api helpers', () => {
  const requestSource = readFileSync(sharedPath('app/composables/useRequest.ts'), 'utf8');

  assert.match(requestSource, /createAlova/);
  assert.match(requestSource, /axiosRequestAdapter/);
  assert.match(requestSource, /alova\/nuxt/);
  assert.match(requestSource, /cacheFor: import\.meta\.dev \? null : undefined/);
  assert.match(requestSource, /export function apiHeaders/);
  assert.match(requestSource, /export function apiUrl/);
  assert.match(requestSource, /export function trackerApiUrl/);
  assert.match(requestSource, /export function useRequest\(options: UseRequestOptions = \{\}\)/);
  assert.match(requestSource, /locale\?: MaybeRefOrGetter<string \| undefined>/);
  assert.match(requestSource, /function withRequestDefaults/);
  assert.match(requestSource, /return \{[\s\S]*request,[\s\S]*apiHeaders:/);
  assert.doesNotMatch(requestSource, /alovaInstance: request/);
  assert.doesNotMatch(requestSource, /export async function fetchJson/);
  assert.doesNotMatch(requestSource, /export function publicApiMethod/);
  assert.match(requestSource, /function isRequestCancelError/);
  assert.match(requestSource, /function buildSuccessResult/);
  assert.match(requestSource, /function appendParamsToUrl/);
  assert.match(requestSource, /function disableCurrentSsrResponseCache/);
});

test('request layer defaults to public_api and uses one Alova instance', () => {
  const requestSource = readFileSync(sharedPath('app/composables/useRequest.ts'), 'utf8');
  const createAlovaCalls = requestSource.match(/createAlova\(/g) || [];

  assert.equal(createAlovaCalls.length, 1);
  assert.match(requestSource, /publicApiBasePath\s*=\s*'\/public_api\/v1'/);
  assert.doesNotMatch(requestSource, /\/app_api\/v1/);
  assert.doesNotMatch(requestSource, /publicApiAlovaInstance/);
});

test('nuxt runtime config keeps public_api requests off the api prefix', () => {
  const configSource = readFileSync(sharedPath('nuxt.config.ts'), 'utf8');
  const profileSource = readFileSync(sharedPath('config/site-profile.ts'), 'utf8');

  assert.match(configSource, /const publicApiBase = process\.env\.APP_PUBLIC_API_BASE \|\| '';/);
  assert.doesNotMatch(profileSource, /basePath:/);
  assert.match(configSource, /const defaultBasePath = '\[\[BASE_PATH\]\]';/);
  assert.match(configSource, /const basePath = normalizeBasePath\(process\.env\.APP_BASE_PATH \|\| defaultBasePath\);/);
  assert.match(configSource, /baseURL:\s*basePath/);
  assert.match(configSource, /basePath,/);
  assert.doesNotMatch(configSource, /APP_API_BASE/);
  assert.match(configSource, /const runtimePublicApiBase = isDevelopment && publicApiProxyTarget \? '' : publicApiBase;/);
  assert.match(configSource, /apiBase:\s*runtimePublicApiBase/);
  assert.match(configSource, /'\/public_api\/\*\*':\s*\{/);
  assert.match(configSource, /\.\.\.\(isDevelopment && publicApiProxyTarget \? \{ proxy: `\$\{publicApiProxyBase\}\/\*\*` \} : \{\}\)/);
  assert.doesNotMatch(configSource, /\.\.\.\(publicApiProxyTarget \? \{ proxy:/);
  assert.doesNotMatch(configSource, /apiProxyTarget/);
  assert.doesNotMatch(configSource, /runtimePublicApiBase = isDevelopment && apiProxyTarget \? '\/api'/);
  assert.doesNotMatch(configSource, /'\/public\/\*\*':\s*\{[\s\S]*proxy:/);

  const requestSource = readFileSync(sharedPath('app/composables/useRequest.ts'), 'utf8');
  assert.match(requestSource, /process\.env\.APP_PUBLIC_API_BASE \|\| publicConfig\.apiBase/);
  assert.match(requestSource, /if \(import\.meta\.client && import\.meta\.dev\) \{[\s\S]*return publicApiBasePath;[\s\S]*\}/);
  assert.doesNotMatch(requestSource, /APP_API_BASE/);
});

test('public_api modules call Alova methods directly', () => {
  const moduleSources = [
    sharedPath('app/composables/useDataCategory.ts'),
    sharedPath('app/composables/useInquiries.ts'),
    sharedPath('app/utils/geo-articles.ts'),
    sharedPath('app/utils/visit-tracker.ts')
  ].map(path => readFileSync(path, 'utf8')).join('\n');

  assert.doesNotMatch(moduleSources, /fetchJson|publicApiMethod/);
  assert.match(moduleSources, /alovaInstance\.Get|alovaInstance\.Post/);
  assert.doesNotMatch(moduleSources, /~\/utils\/request|\.\/request/);
  assert.match(moduleSources, /useRequest\(\{ locale \}\)/);
  assert.match(moduleSources, /const \{ request \} = useRequest\(\{ locale \}\)/);
  assert.match(moduleSources, /noStoreOnError: false/);
  assert.match(moduleSources, /allowedTypeSet\.has\(file\.type\)/);
  assert.doesNotMatch(moduleSources, /requestMeta|options\.locale/);
});

test('content item totals prefer x-total response headers', () => {
  const dataCategorySource = readFileSync(sharedPath('app/composables/useDataCategory.ts'), 'utf8');

  assert.match(dataCategorySource, /function metaNumber/);
  assert.match(dataCategorySource, /const totalCount = metaNumber\(result\.meta, 'total'\) \?\? response\.total_count/);
  assert.match(dataCategorySource, /Math\.ceil\(totalCount \/ pageSize\)/);
  assert.match(dataCategorySource, /total_count:\s*totalCount/);
  assert.match(dataCategorySource, /total_pages:\s*metaNumber\(result\.meta, 'total_pages'\) \?\? response\.total_pages/);
  assert.match(dataCategorySource, /current_page:\s*metaNumber\(result\.meta, 'current_page'\) \?\? response\.current_page/);
});

test('public_api category names support localized objects', () => {
  const dataCategorySource = readFileSync(sharedPath('app/composables/useDataCategory.ts'), 'utf8');
  const adapterSource = readFileSync(sharedPath('app/composables/usePublicApiBundles.ts'), 'utf8');

  assert.match(dataCategorySource, /name:\s*string \| Record<string, string>/);
  assert.match(dataCategorySource, /function firstDisplayString/);
  assert.match(dataCategorySource, /firstDisplayString\(obj\[locale\]\)/);
  assert.match(dataCategorySource, /firstDisplayString\(obj\.zh\)/);
  assert.match(dataCategorySource, /firstDisplayString\(obj\['zh-CN'\]\)/);
  assert.match(dataCategorySource, /firstDisplayString\(Object\.values\(obj\)\)/);
  assert.match(adapterSource, /function localizedText/);
  assert.match(adapterSource, /name:\s*localizedText\(category\.name\)/);
});

test('content resource fields are read from attachment arrays by field_key', () => {
  const dataCategorySource = readFileSync(sharedPath('app/composables/useDataCategory.ts'), 'utf8');
  const adapterSource = readFileSync(sharedPath('app/composables/usePublicApiBundles.ts'), 'utf8');
  const articleDataSource = readFileSync(sharedPath('app/types/articles.ts'), 'utf8');
  const articleDetailSource = readFileSync(defaultLayerPath('app/pages/articles/[id].vue'), 'utf8');

  assert.match(dataCategorySource, /export function resolveImageUrls\(item: ContentItem, fieldKeys: string \| string\[\]\): string\[\]/);
  assert.match(dataCategorySource, /export function resolveDocumentUrls\(item: ContentItem, fieldKeys: string \| string\[\]\): string\[\]/);
  assert.match(dataCategorySource, /filter\(field => field\?\.field_key === key\)/);
  assert.match(dataCategorySource, /return resolveImageUrl\(item, COVER_FIELD_KEYS\)/);
  assert.doesNotMatch(dataCategorySource, /item\?\.data\?\.images/);

  assert.match(adapterSource, /resolveImageUrl\(item, 'cover_image'\)/);
  assert.match(adapterSource, /resolveDocumentUrl\(item, 'video'\)/);
  assert.doesNotMatch(adapterSource, /resolveImageUrls\(item, 'pic'\)/);
  assert.doesNotMatch(adapterSource, /resolveImageUrl\(item, 'thumbnail'\)/);
  assert.doesNotMatch(adapterSource, /resolveImageUrl\(item, 'cover'\)/);
  assert.doesNotMatch(adapterSource, /resolveImageUrls\(item, 'banners'\)/);
  assert.doesNotMatch(adapterSource, /data\.(?:image|video|thumbnail|pic(?!_skus)|cover|banners|icon|detail_images)\b/);
  assert.doesNotMatch(adapterSource, /data\.pic_skus/);

  assert.match(articleDataSource, /video\?: string/);
  assert.match(articleDetailSource, /const articleVideo = computed/);
  assert.match(articleDetailSource, /<video[\s\S]*v-if="articleVideo"[\s\S]*controls/);
  assert.doesNotMatch(articleDetailSource, /import \{ sanitizeHtml \} from '#shared-template\/utils\/sanitize-html';/);
  assert.match(articleDetailSource, /const \{ data: sanitizedArticleContent \} = await useSanitizedHtml\(articleContent\);/);
  assert.match(articleDetailSource, /v-html="sanitizedArticleContent"/);
  assert.doesNotMatch(articleDetailSource, /v-html="articleContent"/);
});

test('visit tracker plugin reports route changes through the Nuxt router', () => {
  const pluginSource = readFileSync(sharedPath('app/plugins/visit-tracker.client.ts'), 'utf8');

  assert.match(pluginSource, /defineNuxtPlugin/);
  assert.match(pluginSource, /if \(import\.meta\.dev\) \{\s*return;\s*\}/);
  assert.match(pluginSource, /router\.afterEach/);
  assert.match(pluginSource, /reportVisit/);
  assert.match(pluginSource, /useCookieConsent/);
  assert.match(pluginSource, /watch\(statisticsConsent/);
  assert.doesNotMatch(pluginSource, /CustomEvent|addEventListener|callHook/);
});
