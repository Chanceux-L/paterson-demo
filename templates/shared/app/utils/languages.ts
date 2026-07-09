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
  { code: 'zh-TW', displayCode: 'TW', flagIcon: 'i-circle-flags-tw', localeName: '繁體中文', file: 'zh-TW.ts', language: 'zh-TW', dir: 'ltr' },
  { code: 'en', displayCode: 'EN', flagIcon: 'i-circle-flags-us', localeName: 'English', file: 'en.ts', language: 'en', dir: 'ltr' },
  { code: 'ru', displayCode: 'RU', flagIcon: 'i-circle-flags-ru', localeName: 'Русский', file: 'ru.ts', language: 'ru', dir: 'ltr' },
  { code: 'de', displayCode: 'DE', flagIcon: 'i-circle-flags-de', localeName: 'Deutsch', file: 'de.ts', language: 'de', dir: 'ltr' },
  { code: 'it', displayCode: 'IT', flagIcon: 'i-circle-flags-it', localeName: 'Italiano', file: 'it.ts', language: 'it', dir: 'ltr' },
  { code: 'es', displayCode: 'ES', flagIcon: 'i-circle-flags-es', localeName: 'Español', file: 'es.ts', language: 'es', dir: 'ltr' },
  { code: 'fr', displayCode: 'FR', flagIcon: 'i-circle-flags-fr', localeName: 'Français', file: 'fr.ts', language: 'fr', dir: 'ltr' }
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
