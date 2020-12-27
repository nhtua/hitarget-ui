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
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/todo',
    name: 'PageTodo',
    component: () => import('../views/Todo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
