<template>
  <el-drawer v-model="showDrawer" :title="title" append-to-body @opened="openHandle" @closed="closeHandle" v-bind="$attrs">
    <slot></slot>
  </el-drawer>
</template>

<script setup>
defineOptions({ name: 'MDrawer' });

defineProps({
  title: { type: String, default: '提示' },
});

const showDrawer = defineModel('modelValue', { type: Boolean, default: false });

const emit = defineEmits(['opened', 'closed']);

const openHandle = () => {
  // eslint-disable-next-line no-restricted-globals
  parent.window.postMessage('openMask()', '*');
  window.top.postMessage('openMask()', '*');
  emit('opened');
};

const closeHandle = () => {
  // eslint-disable-next-line no-restricted-globals
  parent.window.postMessage('closeMask()', '*');
  window.top.postMessage('closeMask()', '*');
  emit('closed');
};
</script>

<style lang="scss" scoped>

</style>
