import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import BookingsView from '@/views/BookingsView.vue'
import ContactView from '@/views/ContactView.vue'
import UserView from '@/views/UserView.vue'
import SingleView from '@/views/SingleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: BookingsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: BookingsView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/singleview/products/:id',
    name: 'singleview/products/:id',
    component: SingleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
