import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {},
    component: () => import('../view/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {},
    beforeEnter: () => {},
    component: () => import('../view/About.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
