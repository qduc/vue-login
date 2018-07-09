import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiToken: null
  },
  mutations: {
    updateToken (state, token) {
      state.apiToken = token
    }
  },
  actions: {
    login ({commit}, data) {
      return new Promise((resolve, reject) => {
        axios.post('/verifyPassword?key=AIzaSyAKluC1MOBc9b0_fDSElaRSYhMBVB9Xf0M', {
          'email': data.email,
          'password': data.password
        }).then(function (res) {
          console.log(res)
          commit('updateToken', res.data.idToken)
          resolve()
        }).catch(function (res) {
          console.log('Error: ' + res)
          reject()
        })
      })
    }
  },
  getters: {

  }
})
