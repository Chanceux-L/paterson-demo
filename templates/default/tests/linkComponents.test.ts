import assert from 'node:assert/strict';
import { readFileSync, globSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const templateRoot = resolve(testsDir, '..');
function templatePath(path = '') {
  return resolve(templateRoot, path);
}

const appVueFiles = globSync(templatePath('app/**/*.vue'));

test('app vue files use NuxtLinkLocale instead of ULink or NuxtLink', () => {
  const offenders = appVueFiles.flatMap((file) => {
    const source = readFileSync(file, 'utf8');
    const matches = source.match(/<\/?(?:ULink|NuxtLink)(?=[\s>])/g) ?? [];

    return matches.map(match => `${file}: ${match}`);
  });

  assert.deepEqual(offenders, []);
});
