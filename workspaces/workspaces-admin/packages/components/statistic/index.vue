<template>
  <div class="statistic p20 flex">
    <div class="flex1 flexs-center" v-for="item in list" :key="item.key">
      <div class="c-blue font-20 mb10">
        <span class="mr5" v-if="item.prefix">{{ item.prefix }}</span>
        <span>{{ item.value || data[item.key] || 0 }}</span>
        <span class="ml5" v-if="item.suffix">{{ item.suffix }}</span>
      </div>
      <div class="flex-align-center">
        <span>{{ item.title }}</span>
        <m-popover :width="width" v-if="item.tips">
          <div class="font-13 color-99">{{ item.tips }}</div>
        </m-popover>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'MStatistic' });

/**
 * item options
 * prefix: 数字之前
 * suffix: 数字之后
 */
defineProps({
  list: { type: Array, default: () => [] },
  data: { type: Object, default: () => ({}) },
  width: { type: String, default: '220px' },
});

</script>

<style lang="scss" scoped>
.statistic {
  background: #f5f5f5;
}
</style>
