<template>
  <div>
    <span>[classes]+.vue</span>
    <div class="mt20">可重复参数：{{ classes }}</div>
  </div>
</template>

<script setup>
definePage({
  props: true,
});

defineProps({
  classes: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped>

</style>
