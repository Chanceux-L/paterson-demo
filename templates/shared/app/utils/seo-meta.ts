export const SEO_TITLE_MAX_LENGTH = 60;
export const SEO_DESCRIPTION_MAX_LENGTH = 155;

export function limitSeoText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') {
    return '';
  }

  const chars = Array.from(value);
  return chars.length > maxLength ? chars.slice(0, maxLength).join('') : value;
}

export function limitSeoTitle(value: unknown) {
  return limitSeoText(value, SEO_TITLE_MAX_LENGTH);
}

export function limitSeoDescription(value: unknown) {
  return limitSeoText(value, SEO_DESCRIPTION_MAX_LENGTH);
}
