<template>
  <el-container class="flex-column flex1 contain">
    <el-aside width="140px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header class="flex-center border-bottom">
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from './views/home/aside.vue';
import Header from './views/home/header.vue';
</script>

<style>
html,
body,
#app,
.contain {
  height: 100%;
  width: 100%;
}
</style>
