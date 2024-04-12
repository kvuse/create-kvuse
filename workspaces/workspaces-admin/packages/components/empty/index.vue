<template>
  <div class="m-empty flexs-center p20 border-radius" :class="{ 'border': border }">
    <el-icon color="#cecece" size="30"><WarningFilled /></el-icon>
    <div class="mt20 color-99">
      <slot>暂无数据</slot>
    </div>
  </div>
</template>

<script setup>
import { WarningFilled } from '@element-plus/icons-vue';

defineOptions({ name: 'MEmpty' });

defineProps({
  border: { type: Boolean, default: true },
});
</script>

<style lang="scss" scoped>
.m-empty {
  margin: 40px;
}
</style>
