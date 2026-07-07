# OG Image 配置说明

[返回 README](../README.md)

相关文档：[部署环境变量说明](deployment-env.md) · [Nitro 缓存存储配置](nitro-cache-storage.md) · [项目目录结构](project-structure.md)

## 目标

模板默认启用动态 OG Image，用于给首页、文章详情、数据详情等页面生成 `og:image` 和 Twitter card 图片。图片尺寸固定为 `1200x630`，由 Nuxt OG Image 和 Takumi 组件渲染。

## 入口文件

| 文件 | 说明 |
|------|------|
| `templates/shared/app/composables/useAppSeoMeta.ts` | 页面统一 SEO 入口，自动调用 `defineOgImage()` |
| `templates/default/app/components/OgImage/Default.takumi.vue` | Nuxt OG Image 渲染组件 |
| `templates/default/app/components/site/AppOgImagePreview.vue` | 浏览器内预览组件 |
| `templates/default/app/pages/og-preview.vue` | 可视化预览页 |
| `templates/shared/app/utils/og-image.ts` | 尺寸、fallback、开关解析工具 |
| `templates/shared/config/site-profile.ts` | OG 文案、alt、slogan 等站点配置 |
| `templates/shared/nuxt.config.ts` | OG Image 缓存、尺寸、安全配置 |

## 页面使用方式

页面不要直接调用 `defineOgImage()`，统一使用 `useAppSeoMeta()`：

```ts
useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  ogImageTitle: pageTitle,
  ogImageDescription: pageDescription
});
```

`useAppSeoMeta()` 会做三件事：

- 限制 title 和 description 长度，避免社交平台截断过度。
- 没有显式传入 `ogImage` / `twitterImage` 时，自动生成动态 OG Image。
- 当 `APP_OG_IMAGE_ENABLED=false` 时，退回到 `APP_OG_IMAGE_FALLBACK_PATH` 对应的静态图片。

如果某个页面必须使用静态图，可以显式传入：

```ts
useAppSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogImage: '/images/share-cover.png',
  twitterImage: '/images/share-cover.png'
});
```

## 站点配置

OG Image 默认文案来自 `templates/shared/config/site-profile.ts`：

```ts
seo: {
  ogImage: {
    alt: '[[OG_IMAGE_ALT]]',
    defaultTitle: '[[OG_IMAGE_TITLE]]',
    defaultDescription: '[[OG_IMAGE_DESCRIPTION]]',
    sloganAlt: '[[COMPANY_SLOGAN]]'
  }
}
```

上线前必须替换这些占位符：

- `alt`：图片替代文本。
- `defaultTitle`：页面没有传入标题时的兜底标题。
- `defaultDescription`：页面没有传入描述时的兜底描述。
- `sloganAlt`：模板中的品牌口号。

品牌名默认读取 `siteProfile.identity.shortName`。如果需要展示 logo 或 slogan 图片，需要同时更新 `siteProfile.assets` 和 OG 模板组件。

## 模板修改

动态图片模板位于：

```text
templates/default/app/components/OgImage/Default.takumi.vue
```

它实际复用了：

```text
templates/default/app/components/site/AppOgImagePreview.vue
```

修改建议：

- 保持根画布 `width: 1200px`、`height: 630px`。
- 使用内联 style，Takumi 渲染对完整浏览器 CSS 支持有限。
- 字体优先使用本项目本地字体 `Noto Sans SC`，避免线上渲染时字体缺失。
- 不要在模板里请求跨域图片；`templates/shared/nuxt.config.ts` 已限制 runtime images 只能来自同源。
- 文案要控制长度，长标题优先在页面层通过 `ogImageTitle` 传入更短版本。

## 本地预览

启动开发服务：

```bash
pnpm dev
```

打开预览页：

```text
http://localhost:8000/og-preview
```

这个页面用于快速检查标题、描述、品牌、字体和口号在 `1200x630` 画布里的排版。

也可以直接访问任意页面，查看页面 head 中的 `og:image` URL，再打开该 URL 验证渲染结果。

## 环境变量

| 变量 | 说明 |
|------|------|
| `APP_OG_IMAGE_ENABLED` | 是否启用动态 OG Image。为空时默认启用；`false`、`0`、`no`、`off`、`disabled` 会禁用 |
| `APP_OG_IMAGE_FALLBACK_PATH` | 禁用动态图时使用的静态 fallback 图片路径，可为绝对 URL 或站内路径 |
| `APP_OG_IMAGE_CACHE_BASE` | OG Image 运行期图片缓存目录 |
| `APP_OG_IMAGE_SECRET` | Nuxt OG Image secret，用于运行时安全控制 |
| `APP_TAKUMI_CORE_NATIVE_TARGET` | 指定 Takumi native binding，跨平台构建时使用 |

本地 macOS Apple Silicon 常用：

```env
APP_TAKUMI_CORE_NATIVE_TARGET=@takumi-rs/core-darwin-arm64
APP_OG_IMAGE_ENABLED=true
```

生产建议：

```env
APP_OG_IMAGE_ENABLED=true
APP_OG_IMAGE_CACHE_BASE=/var/www/aida-website-template/.cache/og-image
APP_TAKUMI_CORE_NATIVE_TARGET=@takumi-rs/core-linux-x64-gnu
```

如果线上临时关闭动态 OG Image：

```env
APP_OG_IMAGE_ENABLED=false
APP_OG_IMAGE_FALLBACK_PATH=https://placehold.co/1200x630/png?text=OG+Image
```

## 缓存与部署

`templates/shared/nuxt.config.ts` 中的默认配置：

```ts
ogImage: {
  runtimeCacheStorage: {
    driver: 'fsLite',
    base: ogImageCacheBase
  },
  defaults: {
    width: 1200,
    height: 630,
    extension: 'png',
    cacheMaxAgeSeconds: 60 * 60 * 24 * 7
  },
  cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
  security: {
    restrictRuntimeImagesToOrigin: true,
    maxQueryParamSize: 4096
  }
}
```

`APP_OG_IMAGE_CACHE_BASE` 会在构建时写入产物。PM2 的运行时 `env` 不能修改已经构建好的缓存目录，因此生产构建时必须注入该变量。

缓存目录应放在 release 目录之外，例如：

```text
/var/www/aida-website-template/.cache/og-image
```

这样发布新 release 时，OG Image 缓存不会跟随 `current` 软链漂移。

## 排查清单

### 页面没有 `og:image`

- 确认页面使用的是 `useAppSeoMeta()`。
- 确认没有显式传入空的 `ogImage` 或 `twitterImage`。
- 确认 `APP_OG_IMAGE_ENABLED` 没有被设置为 `false`、`0`、`no`、`off` 或 `disabled`。

### 图片渲染失败

- 检查 `APP_TAKUMI_CORE_NATIVE_TARGET` 是否匹配当前构建 / 运行平台。
- 检查页面文案中是否有过长内容或无法渲染的字符。
- 检查模板是否使用了 Takumi 不支持的 CSS。
- 检查图片资源是否同源。

### 线上仍显示旧图

- 清理 OG Image 缓存目录：

```bash
rm -rf /var/www/aida-website-template/.cache/og-image/*
pm2 restart aida-website-template --update-env
```

- 同时检查社交平台自身缓存。部分平台会缓存 `og:image`，需要通过平台调试工具重新抓取。
