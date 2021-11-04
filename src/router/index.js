import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Education from '../views/Education.vue'
import Nature from '../views/Nature.vue'
import Marine from '../views/Marine.vue'
import Halal from '../views/Halal Tourism.vue'
import Account from '../views/Account.vue'
import Transaksi from '../views/Transaksi.vue'
import Pesanan from '../views/Pesanan.vue'
import Travel from '../views/Travel Agent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/nature',
    name: 'Nature',
    component: Nature
  },
  {
    path: '/marine',
    name: 'Marine',
    component: Marine
  },
  {
    path: '/halal',
    name: 'Halal',
    component: Halal
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/account/transaksi',
    name: 'Transaksi',
    component: Transaksi
  },
  {
    path: '/account/pesanan',
    name: 'Pesanan',
    component: Pesanan
  },
  {
    path: '/travelagent',
    name: 'Travel',
    component: Travel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
