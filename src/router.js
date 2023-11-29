import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Results from './views/Results.vue';
import Privacy from './views/Privacy.vue';
import Terms from './views/Terms.vue';
import Cookies from './views/Cookies.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/results', component: Results },
  { path: '/blog', component: Blog },
  { path: '/politica-de-privacidad-unfollowerstracker', component: Privacy },
  { path: '/terminos-y-condiciones-unfollowerstracker', component: Terms },
  { path: '/politica-de-cookies-unfollowerstracker', component: Cookies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;