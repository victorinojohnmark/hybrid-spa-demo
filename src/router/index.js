import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useSystemStore } from '../stores/system'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginForm.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const systemStore = useSystemStore()

  systemStore.reset()
  authStore.resetErrorAndStatus()

  if(to.meta.requiresAuth && !authStore.user) {
    next({ path: '/login', query: { auth: 'false' } });
  } else if(authStore.user && to.path == '/login') {
    next({ path: '/', query: { auth: 'true' } });
  } else {

    if(to.meta.permission) {
      authStore.hasPermission(to.meta.permission) ? next() : next({path: '/403', query: { permission: 'false' }})
    } else {
      next ()
    }
  }



})

export default router
