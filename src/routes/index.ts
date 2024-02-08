import { createRouter, createWebHistory } from 'vue-router'
import Game from '~/views/Game.vue'
import Start from '~/views/Start.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/play',
      name: 'play',
      component: Game
    },
   
  ]
})

export default router
