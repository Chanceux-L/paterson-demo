export function usePublicAsset() {
  const runtimeConfig = useRuntimeConfig();
  const basePath = runtimeConfig.public.basePath || '/';
  const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;

  return (path: string) => {
    if (!path || /^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) {
      return path;
    }

    if (path.startsWith(normalizedBasePath)) {
      return path;
    }

    const normalizedPath = path.replace(/^\/+/, '');

    return `${normalizedBasePath}${normalizedPath}`;
  };
}
