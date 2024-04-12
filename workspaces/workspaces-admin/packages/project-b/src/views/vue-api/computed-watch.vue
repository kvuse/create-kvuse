<template>
  <div>
    <div class="font-16 mb20">
      获取数量：{{ count }}
    </div>
    <div class="font-16 mb20">
      computed: {{ computedVal }}
    </div>
    <div class="font-16 mb20">
      watch：{{ changeCount }}
    </div>
    <el-button type="primary" @click="setCountHandle">改变count</el-button>
  </div>
</template>

<script setup>
const count = ref(0);

const setCountHandle = () => {
  count.value = Math.random();
};

const computedVal = computed(() => `com - ${count.value}`);

const changeCount = ref(0);
watch(() => count.value, (val) => {
  changeCount.value = `$: ${val}`;
});
</script>

<style lang="scss" scoped>

</style>
