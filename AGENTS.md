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

## Project Commands

- Use `pnpm` for this repository. The site package uses `pnpm@11.9.0`.
- Run the Nuxt site with `pnpm dev` or `pnpm start`.
