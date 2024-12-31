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
      },
      {
        path:'/property/:id',
        name: 'property-detail',
        component: () => import('@/components/PropertyDetail.vue'),
      },
      {
        path: '/register',
        name: 'register-page',
        component: () => import('@/views/LoginOrSignUp.vue')
      },
      {
        path: '/property/:id/reservation',
        name: 'reservation-page',
        component: () => import('@/views/ReservationView.vue')
      },
      {
        path: '/stories',
        name: 'stories',
        component: () => import('@/views/StoriesView.vue')
      },
      {
        path: '/host',
        name: 'host-page',
        component: () => import('@/views/HostView.vue')
      },
      {
        path: '/search',
        name: 'search-page',
        component: () => import('@/views/SearchView.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
