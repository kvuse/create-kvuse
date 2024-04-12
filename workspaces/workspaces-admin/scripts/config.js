/* eslint-disable import/no-unresolved */
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueDevTools from 'vite-plugin-vue-devtools';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import mkcert from 'vite-plugin-mkcert';

const getProxyUrl = (target) => {
  const urlList = ['/phone', '/authorization', '/socket', '/activities'];
  const proxyUrl = {};
  urlList.forEach((item) => {
    proxyUrl[`${item}`] = {
      target: target ?? 'https://xx.com.cn', // 测试
      changeOrigin: true,
    };
  });
  return proxyUrl;
};

export function defineViteConfig(options) {
  return {
    plugins: [
      VueDevTools(),
      vue(),
      AutoImport({
        imports: [
          'vue', 'vue-router', 'pinia',
          {
            '@kvuse/core': [
              'useCommon', 'useMessage', 'usePage', 'useFilters', 'useRequest', 'useForm',
            ],
            '@/store': ['useHomeStore'],
            '@/utils': ['useUtils', 'useDirectives'],
            '@common/core': ['useEnvHost', 'useQueryPage', 'useDownload', 'useCardImageUrl'],
          },
        ],
        dts: '../.././auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '../.././.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        // resolvers: [
        //   ElementPlusResolver(),
        // ],
      }),
      Components({
        // resolvers: [
        //   ElementPlusResolver(),
        // ],
        dirs: ['src/components', 'src/views/**/components'],
      }),
      mkcert({ hosts: ['a.deeptel.com.cn', 'a.duofiend.com'] }),
    ],
    // base: '/static/admin',
    build: {
      outDir: options?.outDir ?? './dist/admin',
      chunkSizeWarningLimit: 1500,
    },
    server: {
      host: 'a.deeptel.com.cn',
      https: true,
      open: true,
      port: options?.port ?? 8086, // 配置启用的端口号
      proxy: getProxyUrl(options?.target),
    },
    ...options,
  };
}
