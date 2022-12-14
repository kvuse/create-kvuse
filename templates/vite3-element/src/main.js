import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as ElIconModules from '@element-plus/icons-vue';
import router from './router';
import store from './store';
import App from './App.vue';
// 常用的class样式 https://www.npmjs.com/package/kucss
import 'kucss/src/index.css';
import 'element-plus/dist/index.css';
// 修改element主题颜色 https://juejin.cn/post/7128226836751843358

const app = createApp(App);
app.use(router).use(store).use(ElementPlus).mount('#app');

// 统一注册Icon图标
Object.keys(ElIconModules).forEach((iconName) => {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName];
    app.component(iconName, item);
  }
});
