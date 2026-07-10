type MotionRevealOptions = {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
};

export function useMotionReveal(options: MotionRevealOptions = {}) {
  const {
    selector = '.motion-reveal',
    rootMargin = '0px 0px -12% 0px',
    threshold = 0.16
  } = options;
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = [...document.querySelectorAll<HTMLElement>(selector)];

    if (elements.length === 0) {
      return;
    }

    if (motionQuery.matches || !('IntersectionObserver' in window)) {
      for (const element of elements) {
        element.classList.add('is-visible');
      }

      return;
    }

    document.documentElement.classList.add('motion-reveal-ready');

    const revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }, {
      rootMargin,
      threshold
    });
    observer = revealObserver;

    for (const element of elements) {
      revealObserver.observe(element);
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    document.documentElement.classList.remove('motion-reveal-ready');
  });
}
