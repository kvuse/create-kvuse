import { createApp } from 'vue';
// 常用的class样式 https://www.npmjs.com/package/kucss
import 'kucss/src/index.css';
// import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

// 统一注册Icon图标
Object.keys(ElementPlusIconsVue).forEach((iconName) => {
  if (Reflect.has(ElementPlusIconsVue, iconName)) {
    const item = ElementPlusIconsVue[iconName];
    app.component(iconName, item);
  }
});

app.use(router).use(store).mount('#app');

app.config.errorHandler = (err, instance, info) => {
  console.log('err, instance, info: ', err, instance, info);
};
