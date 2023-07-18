<template>
  <div class="flex-center font-18">
    {{ activeItem?.name ?? '指南' }}
  </div>
</template>

<script setup>
import { useHomeStore } from './store';

const { activeItem } = storeToRefs(useHomeStore());
</script>

<style lang="scss" scoped>

</style>
