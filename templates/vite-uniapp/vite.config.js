/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        'vue', 'pinia', 'uni-app',
      ],
      dts: './auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        // target: 'http://xxxx.com.cn', // 测试
        changeOrigin: true,
      },
    },
  },
});
