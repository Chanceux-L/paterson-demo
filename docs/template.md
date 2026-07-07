# 模板描述

[返回 README](../README.md)

本项目通过根 `nuxt.config.ts` 读取 `APP_TEMPLATE`，并加载 `templates/<template-name>` 作为当前 Nuxt Layer。未设置 `APP_TEMPLATE` 时默认使用 `default`。

```bash
APP_TEMPLATE=default pnpm dev
APP_TEMPLATE=personal-site pnpm dev
```

## 模板总览

| 模板 | 类型 | 适合场景 | 说明 |
|------|------|----------|------|
| `templates/shared` | 共享 Layer | 所有模板复用 | 放 Nuxt 公共配置、API 请求、SEO / GEO、i18n 基础能力、sitemap、Cookie、sanitize、访问埋点和类型定义，不作为独立站点模板直接启动 |
| `templates/default` | 企业官网模板 | B2B 企业官网、产品展示站、品牌官网、询盘型站点 | 当前默认模板，覆盖企业站常见页面、data_category 数据列表 / 详情、GEO 文章、联系询盘、设计系统预览和法务页 |
| `templates/personal-site` | 个人网站模板 | 独立开发者、设计师、顾问、创作者、个人品牌官网 | 新增个人站模板，覆盖个人介绍、作品集、文章、联系入口和法务页，适合快速搭建可持续更新的个人主页 |

## shared

`templates/shared` 是所有模板的功能底座，不直接作为 `APP_TEMPLATE` 使用。新增模板时应优先继承它，只把页面、视觉组件、文案和模板级样式放进新模板目录。

主要职责：

- 公共 Nuxt 配置、模块配置和 alias。
- public_api 请求封装、data_category、询盘、文章数据适配。
- SEO / GEO、Schema.org、OG Image 入口、sitemap 工具。
- Cookie 状态、访问埋点、语言配置、sanitize 工具。
- 共享类型、公共静态资源和服务端 API。

## default

`templates/default` 是仓库默认启用的企业官网模板。它适合以公司、品牌、产品、服务为主体的官网项目，重点服务“介绍可信度、展示内容、承接询盘”的企业站路径。

启动方式：

```bash
APP_TEMPLATE=default pnpm dev
```

模板特点：

- 默认承载现有企业站页面和视觉结构。
- 与 public_api、询盘表单、GEO 文章和 data_category 集成更完整。
- 适合从 CMS 或 API 拉取产品、案例、场景、图库、文章等内容。
- 自带设计系统预览页，便于检查 token、按钮、卡片和组件状态。

## personal-site

`templates/personal-site` 是个人网站模板，适合独立专业人士快速建立个人主页、作品集、写作入口和合作联系路径。它与 `default` 平级继承 `templates/shared`，不是 `default` 的子模板。

启动方式：

```bash
APP_TEMPLATE=personal-site pnpm dev
```

模板特点：

- 信息架构更轻，围绕个人身份、作品、写作和合作方式组织。
- 适合个人品牌、自由职业、顾问服务、创作者主页和作品集。
- 使用独立的 i18n 文案、Header / Footer、OG Image 组件和模板样式。
- 可替换头像、项目、文章、社交链接和联系方式后快速上线。
