import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

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
    meta: {
      requiresLogin: true
    },
    component: () => import('../views/Todo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  await store.dispatch('User/getToken');
  if (store.state.User.token && !store.state.User.currentUser)
    await store.dispatch('User/fetchUser');

  const isLoggedIn = store.state.User.currentUser != null;
  const requiresLogin = to.matched.some(path => path.meta.requiresLogin);
  if (requiresLogin && !isLoggedIn) next({name:'Home'});
  else next();
})

export default router
