<template>
  <el-switch v-model="active" :active-value="1" :inactive-value="0" v-bind="$attrs" />
</template>

<script setup>
defineOptions({
  name: 'MSwitch',
});

const props = defineProps({
  modelValue: { type: Number, default: 0, required: true },
});
const emit = defineEmits(['update:modelValue']);
const active = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style lang="scss" scoped>

</style>
