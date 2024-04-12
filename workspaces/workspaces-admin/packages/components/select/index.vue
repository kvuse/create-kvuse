<template>
  <el-select v-model="selectValue" placeholder="全部" v-bind="$attrs">
    <el-option label="全部" value="-1" v-if="showAll" />
    <el-option v-for="item in list" :key="item[valueKey] ?? item.value" :label="item[labelKey]" :value="item[valueKey] ?? item.value" />
  </el-select>
</template>

<script setup>
defineOptions({
  name: 'MSelect',
});

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  showAll: { type: Boolean, default: true },
  list: { type: Array, default: () => [] },
  valueKey: { type: String, default: 'id' },
  labelKey: { type: String, default: 'label' },
});

const emit = defineEmits(['update:modelValue', 'change']);
const selectValue = computed({
  get: () => (props.modelValue ? props.modelValue : '-1'),
  set: (val) => {
    const value = val === '-1' ? '' : val;
    emit('update:modelValue', value);
    emit('change', value);
  },
});

</script>

<style lang="scss" scoped>

</style>
