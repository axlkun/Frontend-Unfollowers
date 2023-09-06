import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Results from './views/Results.vue';
import Privacy from './views/Privacy.vue';
import Cookies from './views/Cookies.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/results', component: Results },
  { path: '/politica-de-privacidad-unfollowerstracker', component: Privacy },
  { path: '/politica-de-cookies-unfollowerstracker', component: Cookies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;