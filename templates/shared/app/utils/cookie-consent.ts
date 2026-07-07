import dayjs from 'dayjs';

export type CookieConsentStatistics = 'granted' | 'denied';

export interface CookieConsentSettings {
  necessary: true;
  statistics: CookieConsentStatistics;
  updatedAt: string;
  version: number;
}

export const cookieConsentName = 'clasself_cookie_consent';
export const cookieConsentVersion = 1;
export const cookieConsentMaxAgeSeconds = 60 * 60 * 24 * 180;

export function parseCookieConsentSettings(value: CookieConsentSettings | null | undefined): CookieConsentSettings | null {
  if (
    value?.necessary !== true
    || (value.statistics !== 'granted' && value.statistics !== 'denied')
    || typeof value.updatedAt !== 'string'
    || value.version !== cookieConsentVersion
  ) {
    return null;
  }

  return {
    necessary: true,
    statistics: value.statistics,
    updatedAt: value.updatedAt,
    version: cookieConsentVersion
  };
}

export function createCookieConsentSettings(statistics: CookieConsentStatistics): CookieConsentSettings {
  return {
    necessary: true,
    statistics,
    updatedAt: dayjs().toISOString(),
    version: cookieConsentVersion
  };
}
