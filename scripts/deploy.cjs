const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');
const dayjs = require('dayjs');
const urlJoin = require('proper-url-join');
const { NodeSSH, DeployToOss } = require('node-deploy');
const { loadEnv } = require('vite');
const argv = require('minimist')(process.argv.slice(2));

const { mode } = argv;
const env = {
  ...loadEnv(mode, process.cwd(), ''),
  ...process.env,
  ...argv
};
const { APP_OSS_ACCESS_KEY_ID, APP_OSS_ACCESS_KEY_SECRET } = env;
const localOnly = Boolean(argv.localOnly);
const {
  APP_SSH_HOST,
  APP_OSS_BUCKET,
  APP_OSS_CDN_URL,
  APP_OSS_ENDPOINT,
  APP_OSS_ASSETS_NAMESPACE,
  APP_RESPONSE_CACHE_BASE = '/var/www/aida-website-template/.cache/nitro',
  APP_PM2_ECOSYSTEM_CONFIG = '/var/www/aida-website-template/ecosystem.config.cjs'
} = env;
const clearResponseCacheOnDeploy = String(env.APP_CLEAR_RESPONSE_CACHE_ON_DEPLOY ?? 'true') !== 'false';
const hosts = (APP_SSH_HOST || '').split(',').map(host => host.trim()).filter(Boolean);
const outputDir = path.resolve('.output');
const outputPublicDir = path.join(outputDir, 'public');
const ossNamespace = (APP_OSS_ASSETS_NAMESPACE || 'frontend').replace(/^\/+|\/+$/g, '');
const ossConfig = {
  ossAccessKeyId: APP_OSS_ACCESS_KEY_ID,
  ossAccessKeySecret: APP_OSS_ACCESS_KEY_SECRET,
  ossBucket: APP_OSS_BUCKET,
  ossEndpoint: APP_OSS_ENDPOINT
};
const hasOssConfig = Object.values(ossConfig).every(Boolean);

function getHost(value) {
  if (!value) {
    return '';
  }

  return new URL(value.includes('://') ? value : `https://${value}`).host;
}

function getOssOrigin(bucket = '', endpoint = '') {
  const endpointHost = getHost(endpoint);

  if (!bucket || !endpointHost) {
    return '';
  }

  const host = endpointHost.startsWith(`${bucket}.`) ? endpointHost : `${bucket}.${endpointHost}`;
  return `https://${host}`;
}

function getAssetCdnURL() {
  if (env.APP_CDN_URL) {
    return urlJoin(env.APP_CDN_URL, { trailingSlash: true });
  }

  const origin = APP_OSS_CDN_URL || getOssOrigin(APP_OSS_BUCKET, APP_OSS_ENDPOINT);
  return origin ? urlJoin(origin, APP_OSS_ASSETS_NAMESPACE, { trailingSlash: true }) : '';
}

function shellQuote(value) {
  return `'${String(value).replaceAll('\'', '\'\\\'\'')}'`;
}

function assertSafeRemoteCachePath(value) {
  const normalized = path.posix.normalize(String(value || ''));

  if (
    !normalized.startsWith('/')
    || normalized === '/'
    || normalized.length < 12
    || !normalized.includes('/.cache/')
  ) {
    throw new Error(`Refusing to clear unsafe Nitro cache path: ${value}`);
  }

  return normalized;
}

const assetCdnURL = getAssetCdnURL();

if (assetCdnURL) {
  // eslint-disable-next-line no-console
  console.log(`Using asset CDN URL: ${assetCdnURL}`);
}

if (hosts.length === 0 && !localOnly) {
  // eslint-disable-next-line no-console
  console.error(`Missing APP_SSH_HOST for ${mode || 'default'} deploy. Set it in the matching env file or pass --localOnly for packaging checks.`);
  process.exit(1);
}

if (!localOnly && !hasOssConfig) {
  // eslint-disable-next-line no-console
  console.error('Missing OSS config. Pass --APP_OSS_ACCESS_KEY_ID/--APP_OSS_ACCESS_KEY_SECRET and set APP_OSS_BUCKET/APP_OSS_ENDPOINT in the matching env file.');
  process.exit(1);
}

async function uploadPublicAssetsToOss() {
  if (!fs.existsSync(outputPublicDir)) {
    throw new Error(`Missing ${outputPublicDir}. Run the matching build command before deploy, for example: pnpm build:${mode}`);
  }

  await DeployToOss.deploy({
    ...ossConfig,
    ossNamespace,
    ossPattern: `${outputPublicDir}/**/*`,
    ossClearLocalFile: false,
    local_target: outputPublicDir,
    versionsRetainedNumber: 3
  });
}

async function reloadPm2(ssh) {
  const pm2Command = `pm2 startOrReload ${APP_PM2_ECOSYSTEM_CONFIG} --update-env && pm2 save`;
  const command = `bash -lc ${shellQuote(pm2Command)}`;
  const result = await ssh.execCommand(command);

  if (result.stdout) {
    // eslint-disable-next-line no-console
    console.log(result.stdout);
  }

  if (result.stderr) {
    // eslint-disable-next-line no-console
    console.error(result.stderr);
  }

  if (result.code !== 0) {
    throw new Error(`Failed to reload PM2 with command: ${command}`);
  }
}

async function clearNitroCache(ssh) {
  if (!clearResponseCacheOnDeploy) {
    return;
  }

  const cacheBase = assertSafeRemoteCachePath(APP_RESPONSE_CACHE_BASE);
  const clearCommand = `mkdir -p -- ${shellQuote(cacheBase)} && find ${shellQuote(cacheBase)} -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +`;
  const command = `bash -lc ${shellQuote(clearCommand)}`;
  const result = await ssh.execCommand(command);

  if (result.stdout) {
    // eslint-disable-next-line no-console
    console.log(result.stdout);
  }

  if (result.stderr) {
    // eslint-disable-next-line no-console
    console.error(result.stderr);
  }

  if (result.code !== 0) {
    throw new Error(`Failed to clear Nitro cache with command: ${command}`);
  }
}

async function afterUpload(ssh) {
  await clearNitroCache(ssh);
  await reloadPm2(ssh);
}

// 将 APP_SSH_HOST 解析为数组（支持逗号分隔的多个地址）
const ssh_configs = hosts.map(host => ({
  host: '120.78.199.28', // 跳板服务器 ip
  forwardOut: {
    host // 实际服务器 ip
  }
}));

(async () => {
  if (!localOnly) {
    await uploadPublicAssetsToOss();
  }

  await NodeSSH.deploy({
    project_dir: '/var/www/aida-website-template',
    namespace: 'current',
    release_name: dayjs().format('YYYY-MM-DD_HH_mm_ss'),
    local_target: outputDir,
    tar: true,
    localOnly,
    globOptions: {
      follow: true
    },
    afterUpload,
    ssh_configs
  });
})().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
