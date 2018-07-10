import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {noAuth: true}
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
  console.log(to)
  console.log(store.getters.isLogin)
  if (to.meta.noAuth) {
    if (store.getters.isLogin) {
      next('/home')
    } else {
      next()
    }
  } else {
    if (store.getters.isLogin) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
