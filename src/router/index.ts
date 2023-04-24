import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/login'
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
        path: 'taken',
        name: 'taken',
        component: () => import('@/views/TaskPage.vue')
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
      },
      {
        path: 'change/:id',
        name: 'change',
        component: () => import('@/views/ChangeReport.vue')
      }
    ]
  },
  {
    path: '/login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
