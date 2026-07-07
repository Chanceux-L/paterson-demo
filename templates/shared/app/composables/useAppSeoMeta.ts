import {
  APP_OG_FALLBACK_IMAGE_PATH,
  appOgFallbackImageUrl,
  isAppOgImageEnabled
} from '../utils/og-image';
import { limitSeoDescription, limitSeoTitle } from '../utils/seo-meta';
import { siteProfile } from '@site-profile';

type SeoMetaInput = Parameters<typeof useSeoMeta>[0];
type SeoTextLimiter = (value: unknown) => string;
type OgImageMetaInput = SeoMetaInput & {
  title?: unknown;
  description?: unknown;
  ogImage?: unknown;
  ogImageDescription?: unknown;
  ogImageTitle?: unknown;
  twitterImage?: unknown;
};
type AppSeoMetaInput = SeoMetaInput & {
  ogImageDescription?: unknown;
  ogImageTitle?: unknown;
};

export const APP_OG_IMAGE_COMPONENT = 'Default';
export const APP_OG_IMAGE_ALT = siteProfile.seo.ogImage.alt;
export const APP_OG_IMAGE_FONT_FAMILY = 'Noto Sans SC';

const titleKeys = ['title', 'ogTitle', 'twitterTitle'] as const;
const descriptionKeys = ['description', 'ogDescription', 'twitterDescription'] as const;

function limitSeoMetaValue(value: unknown, limit: SeoTextLimiter) {
  return () => limit(toValue(value));
}

function hasProvidedSocialImage(meta: OgImageMetaInput) {
  return 'ogImage' in meta || 'twitterImage' in meta;
}

export function useAppSeoMeta(input: AppSeoMetaInput) {
  const meta = { ...input } as Record<string, unknown> & OgImageMetaInput;
  const ogImageTitle = meta.ogImageTitle;
  const ogImageDescription = meta.ogImageDescription;

  delete meta.ogImageTitle;
  delete meta.ogImageDescription;

  for (const key of titleKeys) {
    if (key in meta) {
      meta[key] = limitSeoMetaValue(meta[key], limitSeoTitle);
    }
  }

  for (const key of descriptionKeys) {
    if (key in meta) {
      meta[key] = limitSeoMetaValue(meta[key], limitSeoDescription);
    }
  }

  const runtimeConfig = useRuntimeConfig();
  const ogImageEnabled = isAppOgImageEnabled(runtimeConfig.public.ogImageEnabled);

  if (!ogImageEnabled) {
    const image = () => appOgFallbackImageUrl(runtimeConfig.public.siteUrl, runtimeConfig.public.ogImageFallbackPath || APP_OG_FALLBACK_IMAGE_PATH);
    if (image()) {
      meta.ogImage = image;
      meta.twitterImage = image;
    }
  } else if (!hasProvidedSocialImage(meta)) {
    defineOgImage(APP_OG_IMAGE_COMPONENT, {
      fontFamily: APP_OG_IMAGE_FONT_FAMILY,
      title: () => limitSeoTitle(toValue(ogImageTitle ?? meta.ogTitle ?? meta.title)),
      description: () => limitSeoDescription(toValue(ogImageDescription ?? meta.ogDescription ?? meta.description))
    }, {
      alt: APP_OG_IMAGE_ALT
    });
  }

  return useSeoMeta(meta as SeoMetaInput);
}
