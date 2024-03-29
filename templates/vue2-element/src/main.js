import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import './plugins/element.js';
import './styles/normalize.css';

import * as filters from './filters/index.js';

// 引用公用的方法
import Mixin from './mixins/index.js';
// 设置全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.mixin(Mixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
