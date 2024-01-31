import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export function useRouteHelpers() {
    const route = useRoute();

    const isHome = computed(() => route.name === 'home');
    const isAbout = computed(() => route.name === 'about');
    const isAnyRoute = computed(() => {
      console.log('isAnyRoute', isHome.value, isAbout.value);
      return isHome.value || isAbout.value;
    });

  return {
    isAnyRoute,
    isHome,
  };
};
