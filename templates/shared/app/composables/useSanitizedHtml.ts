import type { Ref } from 'vue';

export function useSanitizedHtml(html: Ref<string | null | undefined>) {
  return useAsyncData(
    () => `sanitized-html:${html.value || ''}`,
    async () => {
      if (!html.value) {
        return '';
      }

      const { sanitizeHtml } = await import('#shared-template/utils/sanitize-html');
      return sanitizeHtml(html.value);
    },
    {
      default: () => '',
      watch: [html]
    }
  );
}
