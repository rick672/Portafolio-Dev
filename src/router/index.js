import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 👈 Cuando el usuario vuelve (navegación hacia atrás), se restaura la posición previa
      return savedPosition
    } else {
      // 👈 Para navegación normal, va al inicio
      return { top: 0 }
    }
  }
})

export default router
