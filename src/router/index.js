import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/support',
    name: 'SupportMe',
    component: () => import('../views/SupportMe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
