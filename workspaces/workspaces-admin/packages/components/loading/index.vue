<template>
  <div class="custom-loading mt20">
    <div class="flexs-center mt40" v-if="loading">
      <img :src="loadsvg" />
      <p class="c-blue">{{ loadingText }}</p>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup>
import loadsvg from './loading.gif';

defineOptions({
  name: 'MLoading',
});

defineProps({
  loading: { type: Boolean, default: false },
  loadingText: { type: String, default: '数据努力加载中，请稍等...' },
});

</script>

<style lang="scss">

</style>
