<script setup lang="ts">
import { useRouteHelpers } from '@/components/useRouteHelpers';
import { onUnmounted, watch } from 'vue';

const { isAnyRoute } = useRouteHelpers();

// watch(
//   isAnyRoute,
//   () => {
//     console.log('watch - isAnyRoute', isAnyRoute.value);
//   },
// );


onUnmounted(() => {
  console.log('Unmounted Home - isAnyRoute:', isAnyRoute.value);
  if (!isAnyRoute.value) console.log('To the unknown~');
})
</script>

<template>
  <div class="home">
    <h1>This is a home page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
