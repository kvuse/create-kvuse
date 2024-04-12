# 前端项目（PC端）

## 安装vscode插件

因为项目配置格式化以及一些语法规范检查，所以需要安装vscode插件

+ 下载使用Vue - Official [vue3语法规范插件](https://marketplace.visualstudio.com/items?itemName=vue.volar)
+ 下载使用Stylelint 验证以及格式化scss、css文件 [stylelint插件](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## 下载依赖

```bash
pnpm install 
```

## 运行项目

+ 进入`cd packages`
+ 进入`cd project-a`(其他项目一样)
+ `pnpm dev`

## 项目结构

```bash
├── README.md
├── packages
│   ├── project-a // 项目a
│   ├── project-b // 项目b
├── scripts
│   ├── config.js // 公共配置
├── .stylelintrc.json
├── .eslintrc.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── package.json
```

## 项目说明

+ `src/assets` 存放静态资源
+ `src/components` 存放公共组件
+ `src/pages` 存放各个页面
+ `src/router` 路由配置
+ `src/store` 状态管理
+ `src/utils` 工具函数
+ `App.vue` 入口文件
+ `main.js` 入口文件
+ `vite.config.js` vite配置
+ `pnpm-lock.yaml` 依赖锁定文件
