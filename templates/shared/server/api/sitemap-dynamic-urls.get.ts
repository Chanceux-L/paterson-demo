import { getRequestURL } from 'h3';
import { buildDynamicSitemapUrls } from '#shared-template/utils/sitemap';

export default defineEventHandler((event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const requestUrl = getRequestURL(event);
  const apiBase = import.meta.dev
    ? process.env.APP_PUBLIC_API_BASE || runtimeConfig.public.apiBase
    : runtimeConfig.public.apiBase;

  return buildDynamicSitemapUrls({
    apiBase,
    appCode: runtimeConfig.public.appCode,
    origin: requestUrl.origin
  });
});
