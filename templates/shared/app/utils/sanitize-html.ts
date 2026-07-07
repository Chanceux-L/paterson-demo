import DOMPurify, { type Config } from 'isomorphic-dompurify';

const richTextSanitizeConfig = {
  USE_PROFILES: { html: true },
  ADD_TAGS: ['iframe'],
  ADD_ATTR: [
    'allow',
    'allowfullscreen',
    'class',
    'frameborder',
    'loading',
    'style',
    'target'
  ],
  FORBID_TAGS: ['script', 'style'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
  ALLOW_DATA_ATTR: false
} satisfies Config;

export function sanitizeHtml(html: string | null | undefined): string {
  if (!html) {
    return '';
  }

  return DOMPurify.sanitize(html, richTextSanitizeConfig);
}

const richTextMediaSelector = [
  'audio[src]',
  'audio source[src]',
  'canvas',
  'embed[src]',
  'iframe[src]',
  'img[src]',
  'object[data]',
  'picture source[srcset]',
  'svg',
  'video[src]',
  'video source[src]'
].join(',');

export function hasRenderableHtmlContent(html: string | null | undefined): boolean {
  if (!html) {
    return false;
  }

  const fragment = DOMPurify.sanitize(html, {
    ...richTextSanitizeConfig,
    RETURN_DOM_FRAGMENT: true
  }) as DocumentFragment;
  const text = (fragment.textContent || '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim();

  if (text.length > 0) {
    return true;
  }

  return !!fragment.querySelector(richTextMediaSelector);
}
