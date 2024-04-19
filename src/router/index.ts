import IndexView from '@/pages/IndexView.vue'
import LoginView from '@/pages/LoginView.vue'
import RegisterView from '@/pages/RegisterView.vue'
import GetCodeView from '@/pages/GetCodeView.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView
    },
    {
      path:'/login',
      name: 'Login',
      component: LoginView
    },
    {
      path:'/register',
      name:'Register',
      component:RegisterView
    },
    {
      path:'/getCode', 
      name:'GetCode',
      component:GetCodeView
    }
  ]
})

export default router
