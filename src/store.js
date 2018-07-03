import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    login (state, data) {
      axios.post('/verifyPassword?key=AIzaSyAKluC1MOBc9b0_fDSElaRSYhMBVB9Xf0M', {
        'email': data.email,
        'password': data.password
      }).then(function (res) {
        console.log(res)
      }).catch(function (res) {
        console.log(res)
      })
    }
  },
  getters: {

  }
})
