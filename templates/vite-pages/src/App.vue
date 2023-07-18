<template>
  <el-container class="flex-column flex1 contain">
    <el-aside width="200px">
      <el-menu class="aside-menu" :default-active="activeIndex" mode="vertical">
        <el-menu-item v-for="(item, index) in routerList" :key="index" router :index="item.path" @click="handleClick(item)">
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
        <router-view name="aLeft"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
const router = useRouter();
const routerList = router.getRoutes().sort((a, b) => {
  const pathA = a.path.toLowerCase();
  const pathB = b.path.toLowerCase();
  if (pathA < pathB) {
    return -1;
  }
  if (pathA > pathB) {
    return 1;
  }
  return 0;
});

const activeIndex = ref('/');

const resultPath = (item) => {
  if (/\[\[id\]\]/.test(item.name)) return item.name.replace('[[id]]', '?id=11');
  if (/_\[id\]/.test(item.name)) return item.name.replace('_[id]', '_333');
  if (/\[id\]/.test(item.name)) return item.name.replace('[id]', '222');
  if (/\[classes\]/.test(item.name)) return item.name.replace('[classes]', 'aa/bb/11');
  return item.path;
};

const handleClick = (item) => {
  const key = resultPath(item);
  router.push(key);
};
</script>

<style>
html,
body,
#app,
.contain {
  height: 100%;
  width: 100%;
}

.aside-menu {
  height: 100%;
}
</style>
