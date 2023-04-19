import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import NotFound from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/:catchall(.*)*',
      name: '404',
      component: NotFound
    }
  ]
})

export default router
