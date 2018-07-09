import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
})

export default router
