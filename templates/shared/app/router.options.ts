import type { RouterConfig } from '@nuxt/schema';

// Fixed-header height; hash targets are aligned just below it.
const HEADER_OFFSET = 64;
// Safety net in case the page-ready hook never fires (e.g. error pages).
const READY_FALLBACK_MS = 600;

export default <RouterConfig>{
  // The default Nuxt scrollBehavior runs on `router.afterEach`, before the
  // destination page finishes its async setup. With pages keyed by fullPath
  // they fully remount, so the smooth scroll would animate the *old* page up
  // to the top while the new one is still resolving. Here we defer the scroll
  // until `page:finish`, so the animation always runs on the new page.
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();

    const resolveTarget = () => {
      const prefersReducedMotion
        = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

      // Browser back/forward: restore where the user was.
      if (savedPosition) {
        return savedPosition;
      }

      // In-page anchor links: offset for the fixed header.
      if (to.hash) {
        const element = document.getElementById(to.hash.slice(1));

        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          return { top: Math.max(top, 0), behavior };
        }

        return { el: to.hash, top: -HEADER_OFFSET, behavior };
      }

      // Same path with only a query change (e.g. list filters) — keep position.
      if (to.path === from.path) {
        return false;
      }

      return { top: 0, behavior };
    };

    return new Promise((resolve) => {
      let settled = false;

      const settle = () => {
        if (settled) {
          return;
        }

        settled = true;
        // One frame so the new page has laid out before we measure/scroll.
        requestAnimationFrame(() => resolve(resolveTarget()));
      };

      nuxtApp.hooks.hookOnce('page:finish', settle);
      setTimeout(settle, READY_FALLBACK_MS);
    });
  }
};
