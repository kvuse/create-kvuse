// src/router/index.js
// eslint-disable-next-line import/no-unresolved
import { createRouter, createWebHashHistory } from 'vue-router/auto';

function myOwnGenerateRouteName(name) {
  console.log('name: ', name);
}

const router = createRouter({
  extendRoutes: (routes) => {
    console.log('routes: ', routes);
    const collectRoute = routes.find((r) => r.name === '/collect');
    if (collectRoute) {
      collectRoute.meta ??= {};
      collectRoute.meta.title = '前台';
    }
    return routes;
  },
  getRouteName: (routeNode) => myOwnGenerateRouteName(routeNode),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
