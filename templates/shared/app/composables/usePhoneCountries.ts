import {
  getCountries,
  getCountryCallingCode,
  type CountryCode
} from 'libphonenumber-js';
import { toValue, type MaybeRefOrGetter } from 'vue';

export type PhoneCountryItem = {
  label: string;
  value: CountryCode;
  callingCode: string;
  flag: string;
};

export const defaultPhoneCountry: CountryCode = 'CN';

const preferredPhoneCountries: CountryCode[] = ['CN', 'HK', 'MO', 'TW', 'US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'JP', 'VN', 'AE', 'AU'];
const phoneCountryOptionsCache = new Map<string, PhoneCountryItem[]>();

function getCountryFlag(country: CountryCode) {
  const flagCountry = country === 'TW' ? 'CN' : country;

  return flagCountry
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

function buildPhoneCountryOptions(locale: string) {
  const cacheKey = locale || 'zh-CN';
  const cachedOptions = phoneCountryOptionsCache.get(cacheKey);

  if (cachedOptions) {
    return cachedOptions;
  }

  const preferred = new Set(preferredPhoneCountries);
  const displayNames = new Intl.DisplayNames([cacheKey], { type: 'region' });
  const options = getCountries()
    .toSorted((left, right) => {
      const leftPreferredIndex = preferredPhoneCountries.indexOf(left);
      const rightPreferredIndex = preferredPhoneCountries.indexOf(right);

      if (leftPreferredIndex !== -1 || rightPreferredIndex !== -1) {
        return (leftPreferredIndex === -1 ? preferredPhoneCountries.length : leftPreferredIndex)
          - (rightPreferredIndex === -1 ? preferredPhoneCountries.length : rightPreferredIndex);
      }

      return (displayNames.of(left) || left).localeCompare(displayNames.of(right) || right, cacheKey);
    })
    .map((country) => {
      const callingCode = `+${getCountryCallingCode(country)}`;
      const countryName = displayNames.of(country) || country;

      return {
        callingCode,
        flag: getCountryFlag(country),
        label: `${countryName} ${callingCode}`,
        value: country
      };
    })
    .filter((option, index, items) => preferred.has(option.value) || items.findIndex(item => item.value === option.value) === index);

  phoneCountryOptionsCache.set(cacheKey, options);
  return options;
}

export function getPhoneCallingCode(country: CountryCode) {
  return `+${getCountryCallingCode(country)}`;
}

export function usePhoneCountries(locale: MaybeRefOrGetter<string>) {
  const phoneCountryOptions = computed(() => buildPhoneCountryOptions(toValue(locale)));

  return {
    phoneCountryOptions
  };
}
