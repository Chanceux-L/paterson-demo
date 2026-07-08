# Agent Guidelines

## TailwindCSS

- Prefer standard Tailwind utility classes over arbitrary value classes.
- Do not use classes such as `text-[clamp(36px,4.4vw,60px)]` for typography. Use responsive utility steps instead, for example `text-4xl md:text-5xl xl:text-6xl`.
- For common spacing, sizing, container width, and layout values, prefer utilities such as `px-5 sm:px-8 lg:px-14`, `max-w-7xl`, `gap-6 lg:gap-8`, and `py-16 lg:py-24`.
- Keep arbitrary value classes only when a standard utility cannot express the design accurately, such as complex gradients, precise image positioning, or one-off visual effects.
- Do not use static `class` and dynamic `:class` on the same element. Use `:class="cn(...)"`, inline when the expression is simple, through the shared helper from `app/utils/cn.ts`:

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Rich Text

- Any HTML or rich text from CMS, API, Markdown conversion, user input, or other external sources must be sanitized with `sanitizeHtml()` from `app/utils/sanitize-html.ts` before rendering.
- Do not bind raw external content directly to `v-html` or `innerHTML`. Use sanitized computed values or sanitize at the adapter boundary before the value reaches the template.
- `innerHTML` is only acceptable for trusted non-HTML payloads such as JSON-LD generated with `JSON.stringify()`.

## Nuxt Icon

- For GitHub Pages or other static deployments, any `UIcon` that only appears after client-side interaction, for example inside `v-if`, menus, modals, drawers, cookie preferences, or scroll-only controls, must be listed in `templates/shared/nuxt.config.ts` under `icon.clientBundle.icons`.
- Keep the icon name in the component unchanged. Add the matching `lucide:*` entry to the client bundle instead of swapping to a different icon that already appears in SSR HTML.

## Paterson Website Redesign

- Before implementing or reviewing Paterson website UI, read `docs/paterson-redesign-plan.md` and follow its design positioning, color system, typography, layout, animation, content, and conversion guidance.
- The site must support both Chinese and English content. When adding navigation, page copy, SEO metadata, forms, buttons, labels, and structured content, provide Chinese and English versions instead of hard-coding Chinese-only text.
- Use the official website, `https://www.paterson.com.cn/`, as the source of truth for brand assets, product imagery, space photos, logos, and visual references.
- Paterson page copy should read like the official website’s visitor-facing marketing copy, not like implementation notes, admin labels, or code logic. Avoid wording such as “按服务分类查看不同产品目录”, “切换 tab”, “筛选维度”, or explaining how UI state changes; use natural product/brand showcase language instead.
- Download required official website assets into the repository and reference local files from the app. Do not hotlink images or other production assets from the official website.
- Optimize downloaded assets before committing them. Images should be compressed appropriately for web usage and converted to `.webp` unless there is a specific technical reason to preserve another format.
- Keep original asset naming understandable and stable enough to identify source and purpose, for example `hero-living-room.webp`, `logo-paterson.webp`, or `product-bedroom-system.webp`.

## Project Commands

- Use `pnpm` for this repository. The site package uses `pnpm@11.9.0`.
- Run the Nuxt site with `pnpm dev` or `pnpm start`.
