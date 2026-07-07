# 部署环境变量说明

[返回 README](../README.md)

相关文档：[项目目录结构](project-structure.md) · [Nitro 缓存存储配置](nitro-cache-storage.md) · [OG Image 配置说明](og-image.md)

## 目标

前端部署只把进程启动参数放在 PM2，业务配置统一放在构建环境变量里。这样可以避免同一个变量一会儿来自 `.env.production`，一会儿来自 `ecosystem.config.cjs`，排查 SSR 和客户端请求时也更清楚。

## PM2 只负责启动进程

`deploy/ecosystem.config.cjs` 只保留进程级配置：

```js
env: {
  PORT: '8010',
  NODE_ENV: 'production'
}
```

不要在 PM2 里放这些业务变量：

```bash
APP_PUBLIC_API_BASE
APP_PUBLIC_APP_CODE
APP_OG_IMAGE_*
APP_SITE_*
```

这些变量应该在构建时由 `.env.production` 或部署环境注入。

## 生产构建变量

生产构建时至少需要：

```bash
APP_PUBLIC_API_BASE=https://api.aida.yun
APP_CODE=<app-code>
APP_SITE_URL=https://aida-website-template.aida.yun
APP_BASE_PATH=[[BASE_PATH]]
APP_RESPONSE_CACHE_BASE=/var/www/aida-website-template/.cache/nitro
APP_OG_IMAGE_CACHE_BASE=/var/www/aida-website-template/.cache/og-image
APP_OG_IMAGE_FALLBACK_PATH=https://placehold.co/1200x630/png?text=OG+Image
```

含义：

- `APP_PUBLIC_API_BASE`：唯一 API 域名配置，SSR 和浏览器客户端都使用它。线上接口不是同域，所以应指向公网 API 域名，例如 `https://api.aida.yun`。如果希望服务器上的 SSR 走本机或内网后端，在服务器 hosts/DNS 里把这个域名解析到本机或内网地址。
- `APP_CODE`：构建时写入 `runtimeConfig.public.appCode`，请求时作为 `AppCode` header。
- `APP_BASE_PATH`：站点部署子路径，写入 Nuxt `app.baseURL` 和 `runtimeConfig.public.basePath`。例如部署在 `https://example.com/frontend/` 时设置为 `/frontend/`。默认占位符 `[[BASE_PATH]]` 未替换时按 `/` 处理。
- `APP_RESPONSE_CACHE_BASE`：Nitro SSR/SWR response cache 目录。
- `APP_OG_IMAGE_CACHE_BASE`：OG Image 缓存目录。
- `APP_OG_IMAGE_FALLBACK_PATH`：动态 OG Image 关闭时使用的静态 fallback 图片，可使用 `placehold.co` 这类绝对 URL。

## 本地开发

本地开发使用：

```bash
APP_PUBLIC_API_BASE=https://api.aida.yun
APP_CODE=<app-code>
```

开发环境下，浏览器不会直接请求 `APP_PUBLIC_API_BASE`。Nuxt 会让客户端请求同域：

```text
http://localhost:8000/public_api/v1/...
```

然后由 Nuxt dev proxy 转发到：

```text
https://api.aida.yun/public_api/v1/...
```

这样可以避免浏览器 CORS 问题。

## 生产请求链路

生产环境统一使用公网 API 域名：

```text
SSR 首屏 / sitemap:
Nuxt Node 进程 -> APP_PUBLIC_API_BASE=https://api.aida.yun -> 由服务器 hosts/DNS 决定解析到本机/内网/公网

浏览器交互 / 翻页 / 筛选:
Browser -> APP_PUBLIC_API_BASE=https://api.aida.yun -> 公网 API
```

如果需要让 SSR 在服务器上走本机后端，可以在服务器配置 hosts，例如：

```text
127.0.0.1 api.aida.yun
```

或者解析到内网后端 IP。这样代码和构建变量仍然统一使用 `https://api.aida.yun`，不需要在前端配置里写 localhost。

因此线上如果看到浏览器请求：

```text
https://aida-website-template.aida.yun/public_api/v1/...
```

说明 `APP_PUBLIC_API_BASE` 没有在构建产物里生效，客户端退回了同域相对路径。

## APP_CODE 和 APP_PUBLIC_APP_CODE

当前约定使用 `APP_CODE` 作为构建时变量。

Nuxt runtime config 的运行时覆盖规则中，`runtimeConfig.public.appCode` 对应的覆盖变量是 `APP_PUBLIC_APP_CODE`。但我们现在不在 PM2 里注入业务变量，所以线上不要依赖 `APP_PUBLIC_APP_CODE`，而是确保构建时有：

```bash
APP_CODE=<app-code>
```

## 部署检查

构建前检查：

```bash
grep -E 'APP_PUBLIC_API_BASE|APP_CODE' .env.production
```

PM2 检查应只看到进程级变量：

```bash
pm2 env 0 | grep -E 'PORT|NODE_ENV|APP_PUBLIC_API_BASE|APP_PUBLIC_APP_CODE'
```

期望：

```text
PORT: 8010
NODE_ENV: production
```

不应再看到 `APP_PUBLIC_API_BASE`、`APP_PUBLIC_APP_CODE`。

发布后如页面仍然拿旧数据，先清 Nitro response cache：

```bash
rm -rf /var/www/aida-website-template/.cache/nitro/*
pm2 startOrReload /var/www/aida-website-template/ecosystem.config.cjs --update-env
```
