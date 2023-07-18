<template>
  <div v-if="$route.query.id">
    <span>user [[id]] </span>
    <div class="mt20">query：{{ $route.query.id }}</div>
  </div>
  <div v-else> users index </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
