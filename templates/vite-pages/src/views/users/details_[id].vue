<template>
  <div>
    <span>details_[id].vue</span>
    <div class="mt20">params: {{ id }}</div>
  </div>
</template>

<script setup>
definePage({
  props: true,
});

defineProps({
  id: { type: String, default: '' },
});
</script>

<style lang="scss" scoped>

</style>
