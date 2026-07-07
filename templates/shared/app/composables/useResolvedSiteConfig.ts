import { siteProfile } from '@site-profile';

const defaultSiteUrl: string = siteProfile.urls.production;

type SiteCopy = {
  companyName: string;
  footerColumns: Array<{ title: string; links: Array<{ label: string; path: string }> }>;
  footerIntro: string;
  navigation: Array<{ label: string; path: string }>;
  shortName: string;
  siteDescription: string;
  siteTitle: string;
};

type FooterCopy = {
  addressValue: string;
};

export type ResolvedSiteConfig = ReturnType<typeof createResolvedSiteConfig>;

function createResolvedSiteConfig(
  siteCopy: SiteCopy,
  footerCopy: FooterCopy,
  siteUrl: string = defaultSiteUrl,
  copyrightYear: number,
  apiConfig: { appCode?: string; baseUrl?: string; trackerApi?: string } = {}
) {
  return {
    companyName: siteCopy.companyName,
    shortName: siteCopy.shortName,
    industry: siteProfile.geo.industry,
    siteTitle: siteCopy.siteTitle,
    siteDescription: siteCopy.siteDescription,
    canonical: siteUrl.replace(/\/$/, ''),
    locale: 'zh-CN' as string,

    api: {
      baseUrl: apiConfig.baseUrl || '',
      appCode: apiConfig.appCode || '',
      trackerApi: apiConfig.trackerApi || ''
    },

    dataCategories: siteProfile.pages.dataCategories,

    navigation: siteCopy.navigation,

    footer: {
      intro: siteCopy.footerIntro,
      phone: siteProfile.contact.phone,
      email: siteProfile.contact.email,
      address: footerCopy.addressValue,
      year: copyrightYear,
      columns: siteCopy.footerColumns
    },

    social: siteProfile.social
  } as const;
}

export function useResolvedSiteConfig() {
  const { tm } = useI18n();
  const runtimeConfig = useRuntimeConfig();
  const { resolveTranslatedMessageTree } = useI18nMessageTree();
  const siteUrl = computed(() => runtimeConfig.public.siteUrl || defaultSiteUrl);
  const copyrightYear = computed(() => Number(runtimeConfig.public.copyrightYear) || new Date().getFullYear());
  const apiConfig = computed(() => ({
    baseUrl: runtimeConfig.public.apiBase,
    appCode: runtimeConfig.public.appCode,
    trackerApi: runtimeConfig.public.trackerApi
  }));

  const siteConfig = computed(() => createResolvedSiteConfig(
    resolveTranslatedMessageTree(tm('data.siteConfig')) as SiteCopy,
    resolveTranslatedMessageTree(tm('footer')) as FooterCopy,
    siteUrl.value,
    copyrightYear.value,
    apiConfig.value
  ));

  return {
    siteConfig
  };
}
