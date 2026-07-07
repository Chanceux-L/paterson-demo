# 项目目录结构

[返回 README](../README.md)

相关文档：[模板描述](template.md) · [部署环境变量说明](deployment-env.md) · [Nitro 缓存存储配置](nitro-cache-storage.md) · [OG Image 配置说明](og-image.md) · [询盘表单生成契约](inquiry_public_form_spec.md)

## 总览

```text
aida-website-template/
├── templates/
│   ├── shared/              # 共享 Nuxt Layer：功能底座
│   ├── default/             # 默认 Nuxt Layer
│   └── personal-site/       # 个人网站 Nuxt Layer
├── deploy/                  # PM2 / Nginx 部署配置
├── docs/                    # 项目文档
├── scripts/                 # 发布脚本
├── app.html                 # Nuxt HTML 模板入口
├── nuxt.config.ts           # 根配置：选择当前模板 layer
├── package.json
└── pnpm-workspace.yaml
```

根 `nuxt.config.ts` 通过 `APP_TEMPLATE` 选择模板，默认是 `default`：

```bash
APP_TEMPLATE=default pnpm dev
```

`templates/default` 和 `templates/personal-site` 都会继承 `templates/shared`。模板定位和适用场景见 [模板描述](template.md)。公共 Nuxt 配置集中在 shared，模板自己的 `nuxt.config.ts` 通常只需要继承 `../shared`。

## Layer 职责

| Layer | 职责 |
|------|------|
| `templates/shared` | 共享功能和公共 Nuxt 配置：模块、runtimeConfig、routeRules、API 请求、public_api 适配、SEO/GEO composables、Cookie 状态、询盘逻辑、sitemap 工具、sanitize、访问埋点、类型 |
| `templates/default` | 当前默认模板 Layer，具体描述见 [template.md](template.md) |
| `templates/personal-site` | 个人网站模板 Layer，具体描述见 [template.md](template.md) |

## 根目录文件

| 路径 | 说明 |
|------|------|
| `AGENTS.md` | 本仓库开发约束，包括 Tailwind、class 合并、富文本 sanitize、项目命令 |
| `README.md` | 项目入口文档 |
| `app.html` | Nuxt HTML 模板入口 |
| `nuxt.config.ts` | 只负责选择 `templates/${APP_TEMPLATE}` |
| `package.json` | pnpm 脚本、依赖和 package manager 版本 |
| `eslint.config.mjs` | ESLint 配置 |
| `tsconfig.json` | TypeScript 配置 |
| `.env*` | 本地、staging、production 环境变量 |

## shared

```text
templates/shared/
├── nuxt.config.ts
├── app/
│   ├── router.options.ts
│   ├── composables/
│   ├── plugins/
│   ├── types/
│   └── utils/
├── config/
├── public/
└── server/
```

| 路径 | 说明 |
|------|------|
| `templates/shared/nuxt.config.ts` | 公共 Nuxt 配置，注册 `#shared-template` 和 `#app-template` alias，并从 `APP_TEMPLATE` 解析当前模板资源 |
| `templates/shared/app/router.options.ts` | 路由滚动行为 |
| `templates/shared/app/composables/useRequest.ts` | alova + axios 请求封装 |
| `templates/shared/app/composables/useDataCategory.ts` | public_api data_category 请求 |
| `templates/shared/app/composables/useInquiries.ts` | 询盘、验证码、附件直传 |
| `templates/shared/app/composables/usePublicApiBundles.ts` | 文章 API 数据聚合与适配 |
| `templates/shared/app/composables/useAppSeoMeta.ts` | 统一 SEO / OG Image 入口 |
| `templates/shared/app/composables/useGeoSchemas.ts` | Schema.org / GEO 结构化数据 |
| `templates/shared/app/composables/useResolvedSiteConfig.ts` | 运行时站点配置聚合 |
| `templates/shared/app/utils/cn.ts` | `clsx` + `tailwind-merge` class 合并工具 |
| `templates/shared/app/utils/sanitize-html.ts` | 富文本 sanitize 和可渲染内容判断 |
| `templates/shared/app/utils/sitemap.ts` | 动态 sitemap URL 构建 |
| `templates/shared/app/plugins/visit-tracker.client.ts` | 访问埋点插件 |
| `templates/shared/config/site-profile.ts` | 站点身份、域名、SEO、GEO、导航、data_category 等核心配置 |
| `templates/shared/public/*` | 静态资源 |
| `templates/shared/server/api/sitemap-dynamic-urls.get.ts` | 动态 sitemap URL API |

共享代码内部使用 `#shared-template/...` 互相引用。模板代码如果需要公共能力，也使用这个 alias。shared 配置内部使用 `#app-template/...` 指向当前模板的 `app` 目录，避免绑定到 `default`。

## 模板目录约定

具体模板说明见 [模板描述](template.md)。模板目录只放该模板自己的页面、布局、视觉组件、样式 token 和文案；API、数据适配、sanitize、SEO/GEO 逻辑放在 shared。

模板组件约定：

- 视觉和布局组件放在具体模板里。
- API、数据适配、sanitize、SEO/GEO 逻辑放在 shared。
- 同一元素不要同时写 `class` 和 `:class`，需要动态合并时用 `cn()`。

## 常见修改入口

| 需求 | 优先修改 |
|------|----------|
| 新增一套模板 | `templates/<template-name>`，并在其 `nuxt.config.ts` 继承 `../shared` |
| 切换模板 | `APP_TEMPLATE=<template-name> pnpm dev` |
| 改公司名称、域名、联系方式、SEO 基础信息 | `templates/shared/config/site-profile.ts` |
| 改页面文案 | 当前模板的 `i18n/locales/*.ts`，例如 `templates/default/i18n/locales/*.ts` 或 `templates/personal-site/i18n/locales/*.ts` |
| 改页面结构 | 当前模板的 `app/pages/*`，例如 `templates/default/app/pages/*` 或 `templates/personal-site/app/pages/*` |
| 改 Header / Footer | 当前模板的 `app/components/site/AppHeader.vue`、`app/components/site/AppFooter.vue` |
| 改主题色、字体、圆角 | 当前模板的 `app/assets/css/main.css` |
| 改 API 请求 | `templates/shared/app/composables/useRequest.ts`、`templates/shared/app/composables/useDataCategory.ts` |
| 改文章数据适配 | `templates/shared/app/composables/usePublicApiBundles.ts` |
| 改询盘逻辑 | `templates/shared/app/composables/useInquiries.ts` |
| 改询盘 UI | 当前模板的询盘组件，例如 `templates/default/app/components/contact/InquiryForm.vue` |
| 改 OG Image 逻辑 | `templates/shared/app/composables/useAppSeoMeta.ts`、`templates/shared/app/utils/og-image.ts` |
| 改 OG Image 视觉 | 当前模板的 OG 组件，例如 `templates/default/app/components/OgImage/Default.takumi.vue` 或 `templates/personal-site/app/components/OgImage/Default.takumi.vue` |
| 改 sitemap | `templates/shared/app/utils/sitemap.ts`、`templates/shared/server/api/sitemap-dynamic-urls.get.ts` |

## 测试

```bash
pnpm test:unit
```

测试按归属放置：仓库级测试放在 `tests`，layer 级测试放在 `templates/shared/tests`、`templates/default/tests`、`templates/personal-site/tests` 等目录。这样部署脚本这类根级约束和各模板自己的页面/视觉约束不会混在一起。
