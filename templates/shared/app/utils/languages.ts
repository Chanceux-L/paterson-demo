interface SiteLanguageShape {
  code: string;
  displayCode: string;
  flagIcon: string;
  localeName: string;
  file: string;
  language: string;
  dir: 'ltr' | 'rtl';
}

export const siteLanguages = [
  { code: 'zh-CN', displayCode: 'ZH', flagIcon: 'i-circle-flags-cn', localeName: '简体中文', file: 'zh-CN.ts', language: 'zh-CN', dir: 'ltr' },
  { code: 'en', displayCode: 'EN', flagIcon: 'i-circle-flags-us', localeName: 'English', file: 'en.ts', language: 'en', dir: 'ltr' }
] as const satisfies readonly SiteLanguageShape[];

export type SiteLanguage = (typeof siteLanguages)[number];
export type SiteLanguageCode = SiteLanguage['code'];

export interface SiteLanguageDisplayCopy {
  label: string;
  localeName: string;
  searchTerms?: readonly string[];
}

export function filterSiteLanguages(
  query: string,
  languages: readonly SiteLanguage[] = siteLanguages,
  displayCopy: Partial<Record<SiteLanguageCode, SiteLanguageDisplayCopy>> = {}
) {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return [...languages];
  }

  return languages.filter((language) => {
    const terms: string[] = [
      displayCopy[language.code]?.label,
      language.code,
      language.displayCode,
      displayCopy[language.code]?.localeName ?? language.localeName,
      ...(displayCopy[language.code]?.searchTerms ?? [])
    ].filter((term): term is string => Boolean(term));

    return terms.some(term => term.toLocaleLowerCase().includes(normalizedQuery));
  });
}

export function prioritizeSelectedLanguage(languages: readonly SiteLanguage[], selectedCode: string) {
  const selectedLanguage = languages.find(language => language.code === selectedCode);

  if (!selectedLanguage) {
    return [...languages];
  }

  return [
    selectedLanguage,
    ...languages.filter(language => language.code !== selectedCode)
  ];
}

export function getSiteLanguageDirection(code: string) {
  return siteLanguages.find(language => language.code === code)?.dir ?? 'ltr';
}

export function getLanguageFlagBundleIcons(languages: readonly SiteLanguage[] = siteLanguages) {
  return [
    ...new Set(languages.map(language => language.flagIcon.replace(/^i-circle-flags-/, 'circle-flags:')))
  ];
}
