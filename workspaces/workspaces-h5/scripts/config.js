/* eslint-disable import/no-unresolved */
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// import mkcert from 'vite-plugin-mkcert';

const getProxyUrl = (target) => {
  const urlList = ['/phone', '/member', '/app'];
  const proxyUrl = {};
  urlList.forEach((item) => {
    proxyUrl[`${item}`] = {
      target: target ?? 'https://XXX.com.cn', // 测试
      changeOrigin: true,
    };
  });
  return proxyUrl;
};

export function defineViteConfig(options) {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue', 'vue-router', 'pinia',
          {
            '@/store': ['useHomeStore', 'useStore'],
          },
          {
            '@kvuse/core': ['useCommon', 'useRequest'],
          },
          {
            '@common/core': ['useEnvHost', 'useApp', 'useCardImageUrl', 'useSubscribe', 'useShare', 'useRequestHeader'],
          },
        ],
        dts: '../.././auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '../.././.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        resolvers: [VantResolver()],
        dirs: ['src/components', 'src/views/**/components'],
      }),
      // mkcert({ hosts: ['a.deeptel.com.cn', 'a.duofiend.com'] }),
    ],
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
    build: {
      outDir: options?.outDir ?? './dist/fans',
      chunkSizeWarningLimit: 1500,
    },
    server: {
      // host: 'a.deeptel.com.cn',
      // https: true,
      open: true,
      port: options?.port ?? 8086, // 配置启用的端口号
      proxy: getProxyUrl(options?.target),
    },
    ...options,
  };
}
