# Nitro 缓存存储配置

[返回 README](../README.md)

相关文档：[部署环境变量说明](deployment-env.md) · [OG Image 配置说明](og-image.md)

## 背景

生产环境的前台请求会反代到单个 Nuxt/Nitro 进程，PM2 配置也是 `instances: 1`。如果 Nitro 响应缓存使用默认的内存存储，缓存增长会集中体现在这个 Node.js 进程上。

改法是把 Nitro 自己的 `cache:nitro` 存储挂载到文件系统，让 SSR/SWR 页面响应缓存写入磁盘，而不是长期留在进程内存里。

## 修改方式

在 `nuxt.config.ts` 中定义缓存目录，并用 `fsLite` 驱动挂载 Nitro 自己的 cache：

```ts
const responseCacheBase = process.env.APP_RESPONSE_CACHE_BASE || '../.cache/nitro';

export default defineNuxtConfig({
  nitro: {
    storage: {
      'cache:nitro': {
        driver: 'fsLite',
        base: responseCacheBase
      }
    }
  }
});
```

`fsLite` 是 `unstorage` 提供的文件系统驱动。Nitro response cache 只是简单的 key-value 缓存条目，用 `fsLite` 写本地文件就够了。

不要直接挂载整个 `cache`，否则 Nuxt payload cache 也会进入文件存储。多语言页面可能同时产生 `/vi` 和 `/vi/about` 这类父子路径 key，文件驱动会把父路径写成文件，后续子路径写入会报 `ENOTDIR`。

相关问题可参考 Nitro issue：[Caching routes with `fs` or `fs-lite` fails when a route is both a path and a prefix of another path](https://github.com/nitrojs/nitro/issues/4142)。

## 部署配置

缓存目录应该放在当前 release 目录外面，避免每次发布后缓存跟着 `current` 目录变化：

```bash
APP_RESPONSE_CACHE_BASE=/var/www/aida-website-template/.cache/nitro \
APP_OG_IMAGE_CACHE_BASE=/var/www/aida-website-template/.cache/og-image \
pnpm build:production
```

`APP_RESPONSE_CACHE_BASE` 控制 Nitro response cache，`APP_OG_IMAGE_CACHE_BASE` 控制 Nuxt OG Image 的运行期图片缓存。两者都在 `nuxt.config.ts` 中读取，并在构建时写进 `.output` 产物。

注意：PM2 的 `env` 是运行时环境，不能改变已经构建好的 `nitro.storage` 或 `ogImage.runtimeCacheStorage` 路径。如果构建时没有设置这些变量，产物会保留默认的相对路径，例如 `../.cache/nitro`。在带 release 目录的部署结构中，这个相对路径可能解析到 `/var/www/aida-website-template/current-releases/.cache/nitro`，而不是项目根目录下的 `/var/www/aida-website-template/.cache/nitro`。

发布脚本会在 PM2 reload 前清理 `APP_RESPONSE_CACHE_BASE` 指向目录下的旧 Nitro response cache 条目，避免不同 release 或损坏文件触发 Nitro 的 `[cache] Error: Malformed data read from cache.`。若临时需要保留 Nitro cache，可在部署环境设置：

```bash
APP_CLEAR_RESPONSE_CACHE_ON_DEPLOY=false
```

## 清理 `.cache`

线上已经出现 Nitro cache 读取错误时，可以只清理 Nitro response cache，然后重启进程：

```bash
rm -rf /var/www/aida-website-template/.cache/nitro/*
pm2 restart aida-website-template --update-env
```

如果需要完整重置站点级缓存目录，可以删除整个 `.cache`，再重建 Nitro cache 目录：

```bash
rm -rf /var/www/aida-website-template/.cache
mkdir -p /var/www/aida-website-template/.cache/nitro
pm2 restart aida-website-template --update-env
```

`.cache` 位于 `/var/www/aida-website-template/current` 外层，不属于单个 release 产物。完整删除适合用于缓存文件损坏、目录结构异常，或需要让下一次启动重新生成缓存目录的场景。
