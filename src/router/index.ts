import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/taken'
      },
      {
        path: 'taken',
        name: 'taken',
        component: () => import('@/views/TaskPage.vue'),
      },
      {
        path: 'zoeken',
        name: 'zoeken',
        component: () => import('@/views/SearchPage.vue')
      },
      {
        path: 'informatie',
        name: 'informatie',
        component: () => import('@/views/InformationPage.vue')
      },
      {
        path: 'instellingen',
        name: 'instellingen',
        component: () => import('@/views/SettingsPage.vue')
      },
      {
        path: 'rapporten',
        name: 'rapporten',
        component: () => import('@/views/AppointedReports.vue')
      },
      {
        path: 'uitgevoerd',
        name: 'uitgevoerd',
        component: () => import('@/views/CheckedReports.vue')
      },
      {
        path: 'documentatie',
        name: 'documentatie',
        component: () => import('@/views/DocumentationPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
