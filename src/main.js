// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://lar.test/api/v1'
if (localStorage.getItem('apiToken')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('apiToken')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
