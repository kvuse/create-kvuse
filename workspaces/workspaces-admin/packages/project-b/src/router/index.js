// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';

const routesModules = import.meta.glob('../views/**/router/*.js', { eager: true });
const modules = [];
Object.keys(routesModules).forEach((key) => {
  modules.push(...routesModules[key].default);
});

const routes = [
  {
    path: '/',
    redirect: '/guide',
    children: [
      ...modules,
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
