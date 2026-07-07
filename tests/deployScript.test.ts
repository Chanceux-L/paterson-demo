import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const testsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(testsDir, '..');

function sharedPath(path = '') {
  return resolve(repoRoot, 'templates/shared', path);
}

function repoPath(path = '') {
  return resolve(repoRoot, path);
}

test('deploy script fails loudly when remote hosts are missing', () => {
  const source = readFileSync(repoPath('scripts/deploy.cjs'), 'utf8');

  assert.match(source, /const hosts = \(APP_SSH_HOST \|\| ''\)\.split\(','\)\.map\(host => host\.trim\(\)\)\.filter\(Boolean\);/);
  assert.match(source, /if \(hosts\.length === 0 && !localOnly\) \{/);
  assert.match(source, /Missing APP_SSH_HOST/);
  assert.match(source, /process\.exit\(1\);/);
  assert.match(source, /localOnly/);
  assert.doesNotMatch(source, /if \(APP_SSH_HOST\) \{/);
});

test('deploy script clears persisted Nitro cache before PM2 reload', () => {
  const source = readFileSync(repoPath('scripts/deploy.cjs'), 'utf8');

  assert.match(source, /APP_RESPONSE_CACHE_BASE = '\/var\/www\/aida-website-template\/\.cache\/nitro'/);
  assert.match(source, /const clearResponseCacheOnDeploy = String\(env\.APP_CLEAR_RESPONSE_CACHE_ON_DEPLOY \?\? 'true'\) !== 'false';/);
  assert.match(source, /function assertSafeRemoteCachePath\(value\) \{/);
  assert.match(source, /normalized\.includes\('\/\.cache\/'\)/);
  assert.match(source, /find \$\{shellQuote\(cacheBase\)\} -mindepth 1 -maxdepth 1 -exec rm -rf -- \{\} \+/);
  assert.match(source, /async function afterUpload\(ssh\) \{[\s\S]*await clearNitroCache\(ssh\);[\s\S]*await reloadPm2\(ssh\);[\s\S]*\}/);
  assert.match(source, /afterUpload,/);
});

test('deploy script keeps PM2 env limited to process settings', () => {
  const source = readFileSync(repoPath('scripts/deploy.cjs'), 'utf8');
  const config = readFileSync(sharedPath('nuxt.config.ts'), 'utf8');
  const processConfig = readFileSync(repoPath('deploy/ecosystem.config.cjs'), 'utf8');
  const docs = readFileSync(repoPath('docs/deployment-env.md'), 'utf8');

  assert.match(processConfig, /PORT:\s*'8010'/);
  assert.match(processConfig, /NODE_ENV:\s*'production'/);
  assert.doesNotMatch(processConfig, /APP_[A-Z0-9_]+:/);
  assert.match(docs, /PM2 只负责启动进程/);
  assert.match(docs, /不要在 PM2 里放这些业务变量/);
  assert.match(docs, /APP_PUBLIC_API_BASE=https:\/\/api\.aida\.yun/);
  assert.doesNotMatch(docs, /APP_API_BASE/);
  assert.match(config, /runtimeConfig:\s*\{[\s\S]*nitro:\s*\{[\s\S]*envPrefix:\s*'APP_'[\s\S]*\}/);
  assert.doesNotMatch(config, /compatibilityDate:[\s\S]*nitro:\s*\{[\s\S]*envPrefix:\s*'APP_'/);
  assert.match(config, /ogImage:\s*\{[\s\S]*secret:\s*process\.env\.APP_OG_IMAGE_SECRET \|\| ''[\s\S]*\}/);
  assert.doesNotMatch(source, /runtimeEnvPrefix|APP_API_BASE=\$\{shellQuote/);
  assert.match(source, /pm2 startOrReload \$\{APP_PM2_ECOSYSTEM_CONFIG\} --update-env/);
  assert.doesNotMatch(source, /outputEcosystemConfigPath/);
  assert.doesNotMatch(source, /copyFileSync\(ecosystemConfigPath/);
});

test('nginx template compresses text responses and keeps upstream connections reusable', () => {
  const nginxConfig = readFileSync(repoPath('deploy/nginx.conf'), 'utf8');

  assert.match(nginxConfig, /gzip on;/);
  assert.match(nginxConfig, /gzip_vary on;/);
  assert.match(nginxConfig, /gzip_types[\s\S]*text\/css[\s\S]*application\/javascript[\s\S]*application\/json[\s\S]*image\/svg\+xml/);
  assert.match(nginxConfig, /map \$http_upgrade \$connection_upgrade \{/);
  assert.match(nginxConfig, /proxy_set_header Connection \$connection_upgrade;/);
  assert.doesNotMatch(nginxConfig, /proxy_set_header Connection "upgrade";/);
});
