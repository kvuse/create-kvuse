export default [
  {
    path: '/vue-api',
    name: 'vue-api',
    component: () => import('../index.vue'),
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../ref.vue'),
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../reactive.vue'),
  },
  {
    path: '/computed-watch',
    name: 'computed-watch',
    component: () => import('../computed-watch.vue'),
  },
];
