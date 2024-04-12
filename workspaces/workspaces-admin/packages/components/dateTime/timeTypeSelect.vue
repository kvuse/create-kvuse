<template>
  <el-select v-model="timeType" placeholder="请选择" class="width-140 ml10 mr10" v-bind="$attrs">
    <el-option v-for="item in receiveLimitCycleList" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script setup>

const props = defineProps({
  modelValue: { type: [Number, String], default: 1 },
  list: { type: Array, default: () => [] },
});
const emit = defineEmits(['update:modelValue']);
const timeType = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const receiveLimitCycleList = computed(() => (props.list.length ? props.list : [
  { value: 1, label: '每天' },
  { value: 2, label: '每周' },
  { value: 3, label: '每月' },
  { value: 4, label: '每24小时' },
]));
</script>

<style lang="scss" scoped>
.width-140 {
  width: 140px !important;
}
</style>
