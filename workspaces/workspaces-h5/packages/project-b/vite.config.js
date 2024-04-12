import { defineConfig } from 'vite';
import path from 'path';
import { defineViteConfig } from '../../scripts/config';

const config = defineViteConfig({
  port: 8087,
  base: process.env.NODE_ENV === 'production' ? '/static/membercard/fans' : '/',
  // outDir: './dist/membercard/fans',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

export default defineConfig(config);
