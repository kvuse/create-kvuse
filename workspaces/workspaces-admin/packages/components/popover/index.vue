<template>
  <el-popover placement="bottom" trigger="hover" width="auto" v-bind="$attrs">
    <slot></slot>
    <template #reference>
      <slot name="reference">
        <el-icon class="ml10" color="#cecece" size="18"><WarningFilled /></el-icon>
      </slot>
    </template>
  </el-popover>
</template>

<script setup>
defineOptions({
  name: 'MPopover',
});
</script>

<style lang="scss" scoped>

</style>
