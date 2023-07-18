<template>
  <div>
    <div class="font-18 mb20">
      数量: {{ count }}
    </div>
    <el-button type="primary" @click="addClick">添加count</el-button>
  </div>
</template>

<script setup>
const count = ref(0);

const addClick = () => {
  count.value++;
};
</script>

<style lang="scss" scoped>

</style>
