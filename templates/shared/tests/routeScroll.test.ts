import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const sharedRoot = resolve(testsDir, '..');

function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

test('route scroll waits for the destination page and handles anchors', () => {
  const routerOptions = readFileSync(sharedPath('app/router.options.ts'), 'utf8');

  assert.match(routerOptions, /scrollBehavior\(to, from, savedPosition\)/);
  assert.match(routerOptions, /hookOnce\('page:finish', settle\)/);
  assert.match(routerOptions, /setTimeout\(settle, READY_FALLBACK_MS\)/);
  assert.match(routerOptions, /to\.hash/);
  assert.match(routerOptions, /document\.getElementById\(to\.hash\.slice\(1\)\)/);
  assert.match(routerOptions, /HEADER_OFFSET/);
  assert.match(routerOptions, /to\.path === from\.path/);
  assert.match(routerOptions, /return \{ top: 0, behavior \};/);
});
