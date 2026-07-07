import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const sharedRoot = resolve(testsDir, '..');

function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

test('request helper functions stay in useRequest composable', () => {
  const requestSource = readFileSync(sharedPath('app/composables/useRequest.ts'), 'utf8');

  assert.equal(existsSync(sharedPath('app/utils/request.ts')), false);
  assert.equal(existsSync(sharedPath('app/utils/request-helpers.ts')), false);
  assert.match(requestSource, /function isRequestCancelError/);
  assert.match(requestSource, /function buildSuccessResult/);
  assert.match(requestSource, /function appendParamsToUrl/);
  assert.match(requestSource, /function disableCurrentSsrResponseCache/);
  assert.match(requestSource, /setResponseHeader\(event, 'Cache-Control', 'no-store, no-cache, must-revalidate'\)/);
  assert.match(requestSource, /arrayFormat: 'brackets'/);
  assert.match(requestSource, /result\.meta\[snakeCase/);
  assert.doesNotMatch(requestSource, /from '\.\/request-helpers'/);
});
