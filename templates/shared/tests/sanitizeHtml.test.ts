import assert from 'node:assert/strict';
import { test } from 'node:test';

// @ts-expect-error Node's test runner loads local TypeScript sources with --experimental-strip-types.
import { hasRenderableHtmlContent, sanitizeHtml } from '../app/utils/sanitize-html.ts';

test('sanitizeHtml removes dangerous scripts and event attributes from rich text', () => {
  const html = sanitizeHtml(`
    <p onclick="alert(1)">正文</p>
    <img src="/placeholder-image" onerror="alert(1)" style="width: 100%">
    <script>alert(1)</script>
    <a href="javascript:alert(1)" target="_blank">链接</a>
  `);

  assert.match(html, /<p>正文<\/p>/);
  assert.match(html, /<img src="\/placeholder-image" style="width: 100%">/);
  assert.match(html, /<a target="_blank">链接<\/a>/);
  assert.doesNotMatch(html, /onclick|onerror|script|javascript:/);
});

test('hasRenderableHtmlContent treats empty rich text tags as empty', () => {
  assert.equal(hasRenderableHtmlContent(''), false);
  assert.equal(hasRenderableHtmlContent('<p><br></p>'), false);
  assert.equal(hasRenderableHtmlContent('<div><span>&nbsp;</span></div>'), false);
  assert.equal(hasRenderableHtmlContent('<section><p>&#160;</p><p>\u200B</p></section>'), false);
  assert.equal(hasRenderableHtmlContent('<p>商品详情</p>'), true);
  assert.equal(hasRenderableHtmlContent('<p><img src="/detail-image" alt=""></p>'), true);
  assert.equal(hasRenderableHtmlContent('<video></video>'), false);
  assert.equal(hasRenderableHtmlContent('<video src="/detail.mp4"></video>'), true);
  assert.equal(hasRenderableHtmlContent('<video><source src="/detail.mp4" type="video/mp4"></video>'), true);
});
