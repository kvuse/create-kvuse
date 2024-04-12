<template>
  <div class="flex-align-center" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="search-style flex-align-center" v-if="showInput">
      <el-select v-model="searchType" placeholder="Select" class="border-shadow" @visible-change="visibleChange" @change="search = ''">
        <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="search" :placeholder="placeholder" clearable class="border-shadow-input" @change="emit('change', $event)" />
    </div>
    <el-icon size="18" color="#909399" class="pointer poniter-search mr15"><Search /></el-icon>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MSearchField',
});

const props = defineProps({
  list: {
    type: Array,
    default: () => [
      { value: 3, label: '卡号', placeholder: '请输入卡号' },
      { value: 2, label: '卡名称', placeholder: '请输入卡名称' },
      { value: 1, label: '绑定用户', placeholder: '请输入用户昵称/姓名/手机' },
    ],
  },
  isHide: { type: Boolean, default: true }, // 是否隐藏
});

const searchType = defineModel('select', { type: Number, default: 3 });
const placeholder = computed(() => props.list.find((item) => item.value === searchType.value)?.placeholder);

const search = defineModel({ type: String, default: '' });
const isOver = ref(false);

const isVisible = ref(false);
const showInput = computed(() => {
  if (props.isHide) return search.value || isVisible.value ? true : isOver.value;
  return true;
});

const visibleChange = (val) => {
  if (val) isVisible.value = val;
};

const mouseenter = () => {
  isOver.value = true;
};

const mouseleave = () => {
  isOver.value = false;
};

const emit = defineEmits(['change']);

</script>

<style lang="scss" scoped>
.search-style {
  position: relative;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #20a0ff;
    position: absolute;
    left: 0;
    bottom: -4px;
    z-index: 20;
  }
}

</style>
<style lang="scss">
.border-shadow-input {
  width: 240px;

  .el-input__wrapper {
    box-shadow: none !important;
  }
}

.border-shadow {
  width: 100px;

  .el-select__wrapper,
  .el-input__wrapper:hover {
    border: none;
    box-shadow: none !important;
  }
}

</style>
