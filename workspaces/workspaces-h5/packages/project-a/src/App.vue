<template>
  <router-view />
</template>

<script setup>
import eruda from 'eruda';

onMounted(() => {
  // 调试模式
  if (import.meta.env.MODE === 'development') {
    eruda.init();
  }
});
</script>

<style lang="scss">
html,
body,
#app,
.home {
  height: 100%;
  width: 100%;
}
</style>
