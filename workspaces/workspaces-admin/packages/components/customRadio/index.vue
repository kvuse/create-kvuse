<template>
  <div class="custom-radio" :class="{'is-disabled':disabled,'flex':isFlex}">
    <div
      v-for="(item, index) in list" :key="item[valueKey] ?? index"
      class="border border-radius p20 mr20 flex-center"
      :class="[{'select-item':selectItem === item[valueKey] ?? index},itemClass, disabled ? 'not-allowed' : 'pointer',{'mb20':!isFlex}]"
      :style="itemStyle" @click="clickHandle(item[valueKey] ?? index)"
    >
      <slot :item="item" :index="index" :row="item">{{ item.label ?? item[valueKey] ?? index }}</slot>
      <div class="select-mask" :class="[placement === 'bottom' ? 'select-mask-bottom' : 'select-mask-top']" :style="{top:top}" v-if="showMask"></div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CustomRadio',
});
const props = defineProps({
  modelValue: { type: [Number, String], default: 1 },
  isFlex: { type: Boolean, default: false },
  list: { type: Array, default: () => [] },
  placement: { type: String, default: 'bottom' }, // 位置
  valueKey: { type: String, default: 'value' },
  itemStyle: { type: Object, default: () => ({}) },
  itemClass: { type: [Object, String], default: () => '' },
  disabled: { type: Boolean, default: false },
  showMask: { type: Boolean, default: true },
  top: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue', 'change']);
const selectItem = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const clickHandle = (value) => {
  if (props.disabled) return;
  selectItem.value = value;
  emit('change', value);
};

</script>

<style lang="scss" scoped>
.select-item {
  border: 1px solid #009dff;
  position: relative;

  .select-mask {
    position: absolute;
    right: 0;
    width: 0;
    height: 0;

    &::after {
      content: "✔";
      position: absolute;
      color: #fff;
      height: 20px;
      line-height: 20px;
    }
  }

  .select-mask-top {
    top: 0;
    border-left: 0 solid transparent;
    border-right: 32px solid #009dff;
    border-bottom: 32px solid transparent;

    &::after {
      right: -30px;
      top: 2px;
    }
  }

  .select-mask-bottom {
    bottom: -32px;
    right: -32px;
    border-left: 28px solid #009dff;
    border-right: 28px solid transparent;
    border-top: 28px solid transparent;
    border-bottom: 28px solid transparent;
    transform: rotate(45deg);

    &::after {
      right: 13px;
      top: -10px;
      transform: rotate(-45deg);
    }
  }
}

.is-disabled {
  .select-item {
    filter: grayscale(100%);
    background: #f5f7fa;
  }
}
</style>
