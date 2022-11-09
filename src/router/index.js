import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/ListProduct.vue'
import Form from '../views/FormProduct.vue'
import Internal from '../views/InternalServerError.vue'
import Login from "@/views/Login";
import Guard from '@/services/middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
    beforeEnter: Guard.auth,
  },
  {
    path: '/create',
    name: 'create',
    component: Form,
    beforeEnter: Guard.auth,
  },
  {
    path: '/error',
    name: 'internalError',
    component: Internal,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
