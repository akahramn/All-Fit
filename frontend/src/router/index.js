import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customers from '../views/Customers.vue'
import FitnessCenters from '../views/FitnessCenters.vue'
import CustomerView from '../views/Customer.vue'
import FitnessCenter from '../views/FitnessCenter.vue'
import Register from '../views/Register.vue'
import Rate from '../views/Rate.vue'
import Booking from '../views/Booking.vue'
import LogIn from '../views/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/customers/:customerId',
    name: 'CustomerView',
    component: CustomerView
  },
  {
    path: '/fitnessCenters',
    name: 'Fitness Centers',
    component: FitnessCenters
  },
  {
    path: '/fitnessCenters/:fitnessCenterId',
    name: 'FitnessCenterView',
    component: FitnessCenter
  },
  {
    path: '/fitnessCenters/:fitnessCenterId/rate',
    name: 'RateView',
    component: Rate
  },
  {
    path:'/customers/:customerId/bookings',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
