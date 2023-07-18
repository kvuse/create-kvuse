<template>
  <div class="guide">
    <h2>一：技术栈</h2>
    <div class="mt20 font-16">
      pnpm + vite4 + pinia +  elementPlus + Eslint + StyleLint
    </div>
    <h2 class="mt30"> 二：开发前的准备工作</h2>
    <h4 class="mt20">
      1. 工具
    </h4>
    <ul class="mt20 font-16">
      <li class="mt10 mb10 ml20">
        下载使用Vue Language Features (Volar)
        <el-link type="primary" href="https://marketplace.visualstudio.com/items?itemName=vue.volar" target="_blank">vue3语法规范插件</el-link>
      </li>
      <li class="ml20">
        下载使用Stylelint 验证以及格式化scss、css文件
        <el-link type="primary" href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank">stylelint插件</el-link>
      </li>
    </ul>
    <h2 class="mt30"> 三：使用依赖</h2>
    <ul class="mt20 font-16">
      <li class="mt10 mb10 ml20">
        <el-link type="primary" href="https://github.com/antfu/unplugin-auto-import" target="_blank"> unplugin-auto-import 自动导入</el-link>
      </li>
      <li class="ml20">
        <el-link type="primary" href="https://github.com/antfu/unplugin-vue-components" target="_blank"> unplugin-vue-components 自动导入组件</el-link>
      </li>
      <li class="ml20 mt10">
        <el-link type="primary" href="https://www.npmjs.com/package/pinia-plugin-persistedstate" target="_blank"> pinia-plugin-persistedstate pinia持久化</el-link>
      </li>
      <li class="ml20 mt10">
        <el-link type="primary" href="https://www.npmjs.com/package/@kvuse/core" target="_blank">
          @kvuse/core 常用的 vue3 组合式 API
        </el-link>
      </li>
      <li class="ml20 mt10">
        <el-link type="primary" href="https://www.npmjs.com/package/@kvuse/eslint-config" target="_blank">
          @kvuse/eslint-config eslint验证
        </el-link>
      </li>
      <li class="ml20 mt10">
        <el-link type="primary" href="https://www.npmjs.com/package/@kvuse/stylelint-config" target="_blank">
          @kvuse/stylelint-config stylelint验证
        </el-link>
      </li>
      <li class="ml20 mt10">
        <el-link type="primary" href="https://www.npmjs.com/package/kucss" target="_blank">
          kucss 常用的样式以及一些公用的class名
        </el-link>
      </li>
    </ul>
    <h2 class="mt30"> 四：其他使用文档</h2>
    <ul class="mt20 font-16">
      <li class="mt10 mb10 ml20">
        <el-link type="primary" href="https://cn.vuejs.org/" target="_blank">
          vue
        </el-link>
      </li>
      <li class="mt10 mb10 ml20">
        <el-link type="primary" href="https://router.vuejs.org/zh/introduction.html" target="_blank">
          vue-router
        </el-link>
      </li>
      <li class="mt10 mb10 ml20">
        <el-link type="primary" href="https://element-plus.gitee.io/zh-CN/guide/design.html" target="_blank">
          element-plus
        </el-link>
      </li>
      <li class="mt10 mb10 ml20">
        <el-link type="primary" href="https://juejin.cn/post/6972087154398724127" target="_blank">
          vue3.0从入门到实战
        </el-link>
      </li>
      <li class="mt10 mb10 ml20">
        <el-link type="primary" href="https://juejin.cn/post/7047762419019415559" target="_blank">
          安装使用pinia
        </el-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
li {
  list-style: inside;
}
</style>
