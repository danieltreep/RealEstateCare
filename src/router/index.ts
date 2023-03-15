import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/task'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/task'
      },
      {
        path: 'task',
        component: () => import('@/views/ActiveTask.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/SearchPage.vue')
      },
      {
        path: 'information',
        component: () => import('@/views/InformationPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
