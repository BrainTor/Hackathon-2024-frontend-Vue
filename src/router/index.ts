import IndexView from '@/pages/IndexView.vue'
import LoginView from '@/pages/LoginView.vue'
import RegisterView from '@/pages/RegisterView.vue'
import GetCodeView from '@/pages/GetCodeView.vue'
import ProfileView from '@/pages/ProfileView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import GetAuth from '@/pages/getAuth.vue'


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
    },
    {
      path:'/profile',
      name:'Profile',
      component:ProfileView
    },
    {
      path: '/getAuth',
      name:'Auth', 
      component:GetAuth
    }
  ]
})

export default router
