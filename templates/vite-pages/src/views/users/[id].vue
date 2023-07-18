<template>
  <div>
    <span>user  [id]</span>
    <div class="mt20 mb20">params:{{ $route.params.id }}</div>
  </div>
</template>

<script setup>
definePage({
  path: ':id(\\d+)',
});
</script>

<style lang="scss" scoped>

</style>
