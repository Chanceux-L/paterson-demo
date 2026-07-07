export const APP_OG_IMAGE_WIDTH = 1200;
export const APP_OG_IMAGE_HEIGHT = 630;
export const APP_OG_LOGO_WIDTH = 176;
export const APP_OG_LOGO_HEIGHT = 64;
export const APP_OG_SLOGAN_WIDTH = 165;
export const APP_OG_SLOGAN_HEIGHT = 48;
export const APP_OG_FALLBACK_IMAGE_PATH = '';

const disabledOgImageValues = new Set(['0', 'false', 'no', 'off', 'disabled']);

export function isAppOgImageEnabled(value: unknown) {
  if (value === undefined || value === null || value === '') {
    return true;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  return !disabledOgImageValues.has(String(value).trim().toLowerCase());
}

export function appOgFallbackImageUrl(siteUrl: string, fallbackPath: unknown = APP_OG_FALLBACK_IMAGE_PATH) {
  const path = typeof fallbackPath === 'string' ? fallbackPath.trim() : '';

  if (!path) {
    return '';
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}
