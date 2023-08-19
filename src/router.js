import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/Results.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/results', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;