import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/globalComponent',
      name: 'globalComponent',
      component: () => import('../views/GlobalComps/index.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/Article/index.vue')
    }
    ,
    {
      path: '/propandemit',
      name: 'propandemit',
      component: () => import('../views/PropsEmits/index.vue')
    },
    {
      path: '/slotscope',
      name: 'slotscope',
      component: () => import('../views/SlotScope/index.vue')
    }



  ]
})

export default router
