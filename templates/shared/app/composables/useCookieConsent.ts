import {
  cookieConsentMaxAgeSeconds,
  cookieConsentName,
  createCookieConsentSettings,
  parseCookieConsentSettings,
  type CookieConsentSettings,
  type CookieConsentStatistics
} from '#shared-template/utils/cookie-consent';

export function useCookieConsent() {
  const consentCookie = useCookie<CookieConsentSettings | null>(cookieConsentName, {
    maxAge: cookieConsentMaxAgeSeconds,
    path: '/',
    sameSite: 'lax',
    watch: true
  });
  const settings = useState<CookieConsentSettings | null>('cookie-consent-settings', () => null);
  const visible = useState('cookie-consent-visible', () => false);
  const preferencesOpen = useState('cookie-consent-preferences-open', () => false);
  const statisticsEnabled = useState('cookie-consent-statistics-enabled', () => true);
  const statisticsConsent = computed(() => settings.value?.statistics);
  const hasStatisticsConsent = computed(() => statisticsConsent.value === 'granted');

  function syncFromCookie() {
    const storedSettings = parseCookieConsentSettings(consentCookie.value);

    if (consentCookie.value && !storedSettings) {
      consentCookie.value = null;
    }

    settings.value = storedSettings;
    statisticsEnabled.value = storedSettings?.statistics !== 'denied';
    preferencesOpen.value = false;
    visible.value = !storedSettings;
  }

  function openSettings() {
    const storedSettings = parseCookieConsentSettings(consentCookie.value);

    settings.value = storedSettings;
    statisticsEnabled.value = storedSettings?.statistics !== 'denied';
    preferencesOpen.value = true;
    visible.value = true;
  }

  function saveChoice(statistics: CookieConsentStatistics) {
    const savedSettings = createCookieConsentSettings(statistics);

    consentCookie.value = savedSettings;
    settings.value = savedSettings;
    statisticsEnabled.value = statistics === 'granted';
    visible.value = false;
  }

  function savePreferences() {
    saveChoice(statisticsEnabled.value ? 'granted' : 'denied');
  }

  return {
    hasStatisticsConsent,
    openSettings,
    preferencesOpen,
    saveChoice,
    savePreferences,
    settings,
    statisticsConsent,
    statisticsEnabled,
    syncFromCookie,
    visible
  };
}
