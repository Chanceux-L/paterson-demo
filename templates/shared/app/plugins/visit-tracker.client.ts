import { watch } from 'vue';
import { reportVisit } from '#shared-template/utils/visit-tracker';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.dev) {
    return;
  }

  const router = useRouter();
  const { hasStatisticsConsent, statisticsConsent, syncFromCookie } = useCookieConsent();

  function reportConsentedVisit(path: string) {
    if (hasStatisticsConsent.value) {
      reportVisit(path);
    }
  }

  nuxtApp.hook('app:mounted', () => {
    syncFromCookie();
    reportConsentedVisit(router.currentRoute.value.fullPath);
  });

  router.afterEach((to) => {
    reportConsentedVisit(to.fullPath);
  });

  watch(statisticsConsent, (statistics) => {
    if (statistics === 'granted') {
      reportVisit(router.currentRoute.value.fullPath);
    }
  });
});
