/* eslint-disable import/no-unresolved */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue', 'vue-router', 'pinia',
        {
          '@kvuse/core': [
            'useCommon', 'useMessage', 'usePage', 'useFilters', 'useRequest',
          ],
        },
      ],
      dts: './auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
  base: mode === 'production' ? '/static/' : '/',
  build: {
    outDir: mode === 'production' ? 'static' : 'dist',
    chunkSizeWarningLimit: 1500,
  },
  server: {
    host: 'shop1.deeptel.com.cn',
    // https: true,
    port: 8086, // 配置启用的端口号
    open: true,
    proxy: {
      '/erp': {
        // target: 'http://xxx.com.cn', // 测试
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
});
