import type { Directive, DirectiveBinding, VNode } from 'vue';
import type ViewerJs from 'viewerjs';

type ViewerOptions = ViewerJs.Options;
type ViewerDirective = Directive<HTMLElement, ViewerOptions | undefined>;
type ViewerDirectiveHookName = 'mounted' | 'updated' | 'unmounted';
type ViewerDirectiveHook = (
  el: HTMLElement,
  binding: DirectiveBinding<ViewerOptions | undefined>,
  vnode: VNode,
  prevVnode?: VNode | null
) => void | Promise<void>;
type ViewerDirectiveHooks = Partial<Record<ViewerDirectiveHookName, ViewerDirectiveHook>>;

let viewerDirectivePromise: Promise<ViewerDirective> | null = null;
let resolvedViewerDirective: ViewerDirective | null = null;

const defaultViewerOptions: ViewerOptions = {
  navbar: true,
  toolbar: true,
  title: false,
  transition: true,
  zIndex: 50
};

async function loadViewerDirective() {
  if (resolvedViewerDirective) {
    return resolvedViewerDirective;
  }

  viewerDirectivePromise ||= Promise.all([
    import('v-viewer'),
    import('viewerjs/dist/viewer.css')
  ]).then(([viewerModule]) => {
    resolvedViewerDirective = viewerModule.directive({
      defaultOptions: defaultViewerOptions
    }) as ViewerDirective;
    return resolvedViewerDirective;
  });

  return viewerDirectivePromise;
}

async function callViewerHook(
  hookName: ViewerDirectiveHookName,
  el: HTMLElement,
  binding: DirectiveBinding<ViewerOptions | undefined>,
  vnode: VNode,
  prevVnode?: VNode | null
) {
  if (!import.meta.client) {
    return;
  }

  const viewerDirective = await loadViewerDirective();
  const hook = (viewerDirective as ViewerDirectiveHooks)[hookName];
  await hook?.(el, binding, vnode, prevVnode);
}

export const vLazyViewer: ViewerDirective = {
  getSSRProps() {
    return {};
  },
  mounted(el, binding, vnode) {
    void callViewerHook('mounted', el, binding, vnode);
  },
  updated(el, binding, vnode, prevVnode) {
    void callViewerHook('updated', el, binding, vnode, prevVnode);
  },
  unmounted(el, binding, vnode) {
    void callViewerHook('unmounted', el, binding, vnode);
  }
};
