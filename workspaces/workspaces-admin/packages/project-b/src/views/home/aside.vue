<template>
  <el-menu
    :default-active="activeIndex" class="el-menu-demo"
    mode="vertical" @select="handleSelect"
  >
    <template v-for="(item, index) in menuList" :key="index">
      <el-sub-menu :index="item.key" v-if="item.items">
        <template #title>{{ item.name }}</template>
        <el-menu-item v-for="child in item.items" :key="child.key" :index="child.key" @click="clickHandle(child)">{{ child.name }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="item.key" @click="clickHandle(item)" v-else>{{ item.name }}</el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import { useHomeStore } from './store';

const menuList = ref([
  { key: 'guide', name: '指南' },
  {
    key: 'vue',
    name: 'VUE API',
    items: [
      { key: 'ref', name: 'ref' },
      { key: 'reactive', name: 'reactive' },
      { key: 'computed-watch', name: 'computed' },
    ],
  },
]);

const { setActiveItem } = useHomeStore();

const { activeItem } = storeToRefs(useHomeStore());

const activeIndex = ref(activeItem.value?.key ?? 'guide');

const clickHandle = (item) => {
  setActiveItem(item);
};

const { loadPage } = useCommon();
const handleSelect = (key) => {
  loadPage(`/${key}`);
};

const setActiveItemInfo = (key = activeIndex.value) => {
  if (!activeItem.value?.key) {
    const currentItem = menuList.value.find((item) => item.key === key);
    setActiveItem(currentItem);
  }
};

onMounted(() => {
  setActiveItemInfo();
});
</script>

<style lang="scss" scoped>
.el-menu-demo {
  height: 100%;
}
</style>
