/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 自动引入 https://juejin.cn/post/7050668133404639268
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';

import path from 'path';

// 详情 https://juejin.cn/post/6994310850290909214
export default ({ mode }) => defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({
      imports: [
        'vue', 'vue-router', 'pinia',
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  base: mode === 'production' ? '/static/' : '/',
  build: {
    outDir: mode === 'production' ? 'static' : 'dist',
    chunkSizeWarningLimit: 1500,
  },
  server: {
    open: true,
    port: 8088, // 配置启用的端口号
    proxy: {
      '/api': {
        // target: 'http://xxxx.com.cn', // 测试
        changeOrigin: true,
      },
    },
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: 'px',
          viewportWidth: 375,
          propList: ['*'],
          selectorBlackList: ['van'],
          // exclude: [/node_modules\/vant/], // 排除 vant 相关文件 如果viewportWidth是750添加这行
        }),
      ],
    },
  },
});
