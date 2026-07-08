# paterson-demo

Nuxt 4 + Vue 3 + TypeScript 企业官网模板。用于快速交付多语言企业站，并内置 public_api、SEO / GEO、Schema.org、OG Image、站点地图、询盘表单、访问埋点和部署脚本。

## 文档导航

- [环境要求](#环境要求)
- [本地开发](#本地开发)
- [目录说明](#目录说明)
- [API 集成](#api-集成)
- [环境变量](#环境变量)
- [构建部署](#构建部署)
- [LLM 工作流](#llm-工作流)
- [设计约束](#设计约束)

扩展文档：

- [项目目录结构](docs/project-structure.md)
- [模板描述](docs/template.md)
- [部署环境变量说明](docs/deployment-env.md)
- [Nitro 缓存存储配置](docs/nitro-cache-storage.md)
- [OG Image 配置说明](docs/og-image.md)
- [询盘表单生成契约](docs/inquiry_public_form_spec.md)

## 环境要求

| 工具 | 要求 |
|------|------|
| asdf | 使用 `.tool-versions` 安装项目指定工具链 |
| Node.js | 使用 `.tool-versions` 中的 `nodejs 24.16.0` |
| pnpm | 使用 `.tool-versions` / `package.json` 中的 `pnpm 11.9.0` |

```bash
asdf install
pnpm install
```

## 本地开发

```bash
# 1. 安装依赖
pnpm install

# 2. 配置环境变量
# 按实际站点直接修改 .env.development 中的 APP_PUBLIC_API_BASE、APP_CODE、APP_PORT 等变量

# 3. 启动开发服务器
pnpm dev
# 默认 http://localhost:8000，可通过 APP_PORT 修改

# 4. 生产构建与本地预览
pnpm build
pnpm preview
```

常用命令：

| 命令 | 说明 |
|------|------|
| `pnpm dev` / `pnpm start` | 使用 `.env.development` 启动 Nuxt 开发服务器 |
| `pnpm build` | 默认生产构建 |
| `pnpm build:staging` | 使用 `.env.staging` 构建 |
| `pnpm build:production` | 使用 `.env.production` 构建 |
| `pnpm deploy:staging` | 执行 staging 发布脚本 |
| `pnpm deploy:production` | 执行 production 发布脚本 |
| `pnpm lint` | ESLint 检查 |
| `pnpm typecheck` | Nuxt / Vue 类型检查 |
| `pnpm test` | 单元测试、lint、typecheck 全量检查 |

## 目录说明

完整目录说明见 [docs/project-structure.md](docs/project-structure.md)，模板定位和适用场景见 [docs/template.md](docs/template.md)。根 `nuxt.config.ts` 在未指定 `APP_TEMPLATE` 时会选择 `default`，也就是 `templates/default` 这套默认模板；它会继承 `templates/shared` 的共享功能。`default` 只代表当前默认启用的模板，不代表共享层或基础模板。

| 顶层目录 | 说明 |
|----------|------|
| `templates/shared` | 共享 Nuxt Layer，放 config、public、router options、composables、utils、types、plugins、server API 等功能底座 |
| `templates/<template-name>` | 具体站点模板 Nuxt Layer，模板描述见 [docs/template.md](docs/template.md) |
| `docs` | 项目文档 |
| `deploy` | PM2 与 Nginx 部署配置 |
| `scripts` | 发布脚本 |
| `tests` | 仓库级 Node test runner 单元测试 |
| `templates/*/tests` | 各 layer 自己的 Node test runner 单元测试 |

## 多语言路由

模板使用 `@nuxtjs/i18n`，默认语言为 `zh-CN`，英文使用路径前缀。不同模板的路由由各自 `app/pages` 决定。

语言列表维护在 `templates/shared/app/utils/languages.ts`，页面文案维护在当前模板的 `i18n/locales` 下，例如 `templates/default/i18n/locales/*.ts` 或 `templates/personal-site/i18n/locales/*.ts`。

## API 集成

模板内置 clawme_b2b public_api 对接。通用请求封装在 `templates/shared/app/composables/useRequest.ts`，会自动处理：

- `/public_api/v1` base path
- `AppCode` header
- `Locale` header
- SSR 出错时禁用当前响应缓存
- 开发环境 API 代理，避免浏览器 CORS 问题

主要模块：

| 模块 | 文件 | 说明 |
|------|------|------|
| 通用请求 | `templates/shared/app/composables/useRequest.ts` | alova + axios adapter 请求封装 |
| 数据分类 | `templates/shared/app/composables/useDataCategory.ts` | content_items、categories、filter_schema |
| GEO 文章 | `templates/shared/app/utils/geo-articles.ts` | 文章列表和详情 |
| 询盘表单 | `templates/shared/app/composables/useInquiries.ts` | 验证码、询盘提交、附件直传 |
| 访问埋点 | `templates/shared/app/utils/visit-tracker.ts` | 页面访问上报 |
| 站点地图 | `templates/shared/app/utils/sitemap.ts`、`templates/shared/server/api/sitemap-dynamic-urls.get.ts` | 动态 URL 汇总 |

常用端点：

```text
GET  /public_api/v1/data_categories/:slug/content_items
GET  /public_api/v1/data_categories/:slug/content_items/:id
GET  /public_api/v1/data_categories/:slug/categories
GET  /public_api/v1/data_categories/:slug/filter_schema
GET  /public_api/v1/geo_articles
GET  /public_api/v1/geo_articles/:slug
GET  /public_api/v1/captcha
POST /public_api/v1/active_storage/direct_upload
POST /public_api/v1/inquiries
POST /public_api/v1/visits/track
```

询盘表单接口说明见 [docs/inquiry_public_form_spec.md](docs/inquiry_public_form_spec.md)。

## Data Category 配置

企业站的数据分类 slug 由 `templates/shared/config/site-profile.ts` 统一配置：

```ts
dataCategories: {
  article: 'article'
}
```

为具体客户生成站点时，根据 CMS 实际 article data_category slug 调整这里。文章页面和 sitemap 会通过该配置读取文章内容。

## 环境变量

本地开发最少需要：

```env
APP_PORT=8000
APP_PUBLIC_API_BASE=https://api.aida.yun
APP_CODE=<app-code>
```

生产构建常用变量：

```env
APP_PUBLIC_API_BASE=https://api.aida.yun
APP_CODE=<app-code>
APP_BASE_PATH=[[BASE_PATH]]
APP_SITE_URL=https://example.com
APP_TRACKER_API=https://api.aida.yun/public_api/v1
APP_RESPONSE_CACHE_BASE=/var/www/aida-website-template/.cache/nitro
APP_OG_IMAGE_CACHE_BASE=/var/www/aida-website-template/.cache/og-image
APP_OG_IMAGE_ENABLED=true
APP_OG_IMAGE_FALLBACK_PATH=https://placehold.co/1200x630/png?text=OG+Image
```

`APP_BASE_PATH` 用于部署到子路径，例如 `/frontend/`。默认占位符 `[[BASE_PATH]]` 未替换时会按 `/` 处理。

CDN / OSS 部署相关变量：

```env
APP_SSH_HOST=<server-ip>
APP_OSS_BUCKET=<bucket>
APP_OSS_ENDPOINT=https://oss-cn-guangzhou.aliyuncs.com
APP_OSS_CDN_URL=https://cdn.example.com
APP_OSS_ASSETS_NAMESPACE=aida-website-template/production
APP_OSS_ACCESS_KEY_ID=<access-key-id>
APP_OSS_ACCESS_KEY_SECRET=<access-key-secret>
```

部署变量细节见 [docs/deployment-env.md](docs/deployment-env.md)，Nitro 缓存说明见 [docs/nitro-cache-storage.md](docs/nitro-cache-storage.md)，OG Image 配置见 [docs/og-image.md](docs/og-image.md)。

## 构建部署

### Vercel

项目已提供 `vercel.json`，Vercel 会按 Nuxt SSR 项目部署，使用 `pnpm build` 构建。

Vercel Project Settings 建议保持：

```text
Framework Preset: Nuxt.js
Install Command: corepack enable && pnpm install --frozen-lockfile
Build Command: pnpm build
```

Vercel 环境变量至少配置：

```env
APP_PUBLIC_API_BASE=https://api.aida.yun
APP_CODE=<app-code>
APP_BASE_PATH=/
APP_SITE_URL=https://<project>.vercel.app
APP_TRACKER_API=https://api.aida.yun/public_api/v1
APP_OG_IMAGE_ENABLED=true
APP_OG_IMAGE_FALLBACK_PATH=https://placehold.co/1200x630/png?text=OG+Image
```

`APP_SITE_URL` 需要随 Vercel 生产域名或正式域名调整，否则 canonical、robots、sitemap、OG URL 会指向错误域名。Vercel 函数环境不适合依赖本地文件系统做持久缓存，`APP_RESPONSE_CACHE_BASE` 和 `APP_OG_IMAGE_CACHE_BASE` 通常不需要配置。

### PM2 / Nginx

```bash
# Staging
pnpm build:staging
pnpm deploy:staging

# Production
pnpm build:production
pnpm deploy:production
```

发布脚本会读取对应环境文件，上传 Nuxt 构建产物和静态资源，并在远端执行 PM2 reload。PM2 只保留 `PORT`、`NODE_ENV` 等进程级变量，业务变量应在构建阶段注入。

## SEO / GEO / AI 可读性

模板已经接入：

- `@nuxtjs/seo`
- Schema.org Organization 信息
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- 动态 OG Image
- AI / answer-engine crawler allowlist
- GEO citation booster

这些能力主要读取 `templates/shared/config/site-profile.ts`。上线前必须替换其中所有 `[[PLACEHOLDER]]`，包括公司名称、官网域名、SEO 标题、联系方式、权威引用、AI 可引用摘要等。

## LLM 工作流

### 1. 填写站点配置

优先修改 `templates/shared/config/site-profile.ts`：

- 公司名称、简称、英文名、法定名称
- 生产域名、备案信息、会员中心 URL
- 联系方式、地址、社交账号
- SEO 标题、描述、关键词
- GEO 行业、服务区域、权威引用
- data_category slug
- AI crawler 和 citeable summary

### 2. 修改语言文案

修改当前模板的 `i18n/locales/*.ts`，例如 `templates/default/i18n/locales/*.ts` 或 `templates/personal-site/i18n/locales/*.ts`。

保持中英页面结构一致。导航、页脚、表单、错误页、Cookie 弹窗、页面 SEO 都从这里读取。

### 3. 调整主题与视觉

修改当前模板的 `app/assets/css/main.css`。如果模板有独立 Tailwind 入口，也同步检查对应 `app/styles/tailwind.css`。

优先使用标准 Tailwind utility，避免不必要的 arbitrary value。常用间距、字号、容器宽度应使用 Tailwind 的响应式阶梯。

### 4. 填充页面内容

页面位于当前模板的 `app/pages`，复用组件位于当前模板的 `app/components`。

页面中如仍有 `[[PLACEHOLDER]]`，上线前必须替换或删除对应 section。

### 5. 接入真实 API 数据

根据 CMS 配置更新 `templates/shared/config/site-profile.ts` 的 `pages.dataCategories.article`，页面通过 `useDataCategory()`、`listGeoArticles()`、`getGeoArticle()` 获取数据。没有真实数据时，不要展示虚假客户、认证、案例或统计数字。

### 6. 富文本安全

CMS、API、Markdown 转换、用户输入等外部来源的 HTML / 富文本，渲染前必须使用 `templates/shared/app/utils/sanitize-html.ts` 中的 `sanitizeHtml()` 处理。当前默认文章详情页会先清洗 `content`，再通过 `v-html` 渲染 HTML 内容；它不解析 Markdown，如果后续增加 Markdown 转换，也必须先生成 sanitized value，再绑定到模板。

不要把原始外部内容直接绑定到 `v-html` 或 `innerHTML`。可以在 computed 中生成 sanitized value，也可以在 adapter 边界先清洗再传给模板。`innerHTML` 仅用于 `JSON.stringify()` 生成的 JSON-LD 这类可信非 HTML payload。

### 7. 运行检查

```bash
pnpm test
```

若只改文案或配置，至少运行：

```bash
pnpm lint
pnpm typecheck
```

## 设计约束

### 硬禁止

- 不使用渐变文字、默认紫色主题、无意义毛玻璃
- 不使用 Emoji 作为 UI 元素
- 不做卡片嵌套卡片
- 不填无来源的客户、认证、统计数字
- 不写空泛文案，例如“欢迎”“专业团队”“质量第一”
- 不为了排版滥用 Tailwind arbitrary value
- 不直接渲染未经过 `sanitizeHtml()` 处理的外部富文本

### 推荐做法

- Hero 优先清晰表达品牌、主营业务和可信证据
- 企业站语气保持精确、可信、克制
- 有真实图片或数据时优先使用真实资产
- 没有数据就删掉对应模块，不用占位内容撑页面
- 页面内容与 SEO、Schema.org、llms.txt 信息保持一致

## 技术栈

| 项目 | 说明 |
|------|------|
| Nuxt | 4.x |
| Vue | 3.x，Composition API |
| TypeScript | 6.x |
| Tailwind CSS | 4.x |
| Nuxt UI | 4.x |
| @nuxtjs/i18n | 多语言路由 |
| @nuxtjs/seo | SEO、robots、sitemap、Schema.org |
| alova + axios | API 请求 |
| VueUse | 常用组合式工具 |
| nuxt-swiper | 轮播交互 |
| nuxt-skew-protection | 新版本提示 |
| nuxt-llms | llms.txt |
| @takumi-rs/core | OG Image 渲染 |
