import type { VueMessageType } from 'vue-i18n';

type I18nMessageNode = Extract<VueMessageType, object>;

function isI18nMessageNode(value: unknown): value is I18nMessageNode {
  return !!value
    && typeof value === 'object'
    && 'type' in value
    && 'start' in value
    && 'end' in value
    && 'body' in value;
}

function resolveLiteralText(value: string) {
  return value.replace(/\{'@'\}/g, '@');
}

function isArrayRecord(value: object) {
  const entries = Object.entries(value);

  return entries.length > 0 && entries.every(([key]) => /^\d+$/.test(key));
}

export function useI18nMessageTree() {
  const { locale, rt } = useI18n();

  function resolveTranslatedMessageTree<T>(value: T, watchLocale = locale.value): T {
    if (Array.isArray(value)) {
      return value.map(item => resolveTranslatedMessageTree(item, watchLocale)) as T;
    }

    if (value && typeof value === 'object') {
      if (isI18nMessageNode(value)) {
        return rt(value) as T;
      }

      if (isArrayRecord(value)) {
        return Object.entries(value)
          .sort(([left], [right]) => Number(left) - Number(right))
          .map(([, item]) => resolveTranslatedMessageTree(item, watchLocale)) as T;
      }

      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, resolveTranslatedMessageTree(item, watchLocale)])
      ) as T;
    }

    if (typeof value === 'string') {
      return resolveLiteralText(value) as T;
    }

    return value;
  }

  return {
    resolveTranslatedMessageTree
  };
}
