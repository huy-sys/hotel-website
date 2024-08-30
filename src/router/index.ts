import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'hotel-container',
    component: () => import('@/views/HotelContainer.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/MainView.vue')
      },
      {
        path: '/propertyList',
        name: 'property-list',
        component: () => import('@/views/PropertyListView.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: () => import('../views/AboutView.vue')
  //   },
  //   {
  //     path: '/main',
  //     name: 'main',
  //     component: () => import('../views/MainView.vue')
  //   }
  // ]
})

export default router
