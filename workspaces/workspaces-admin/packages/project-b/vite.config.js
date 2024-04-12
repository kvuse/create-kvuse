import { defineConfig } from 'vite';
import path from 'path';
import { defineViteConfig } from '../../scripts/config';

const config = defineViteConfig({
  port: 8088,
  base: process.env.NODE_ENV === 'production' ? '/static/benefitcard' : '/',
  outDir: './dist/benefitcard',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

export default defineConfig(config);
