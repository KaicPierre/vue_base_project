import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home/Example.vue"),
    meta: {

    },
    
  },
   {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Home" */ "../views/Authentication/Login.vue"),
    meta: {

    },
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
