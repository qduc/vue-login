import axios from 'axios'

const auth = {
  state: {
    apiToken: localStorage.getItem('apiToken') || '',
    status: ''
  },
  mutations: {
    loginRequest: (state) => {
      state.status = 'loading'
    },
    loginSuccess: (state, token) => {
      state.status = 'success'
      state.apiToken = token

      localStorage.setItem('apiToken', state.apiToken)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    },
    loginError: (state) => {
      state.status = 'error'
    },
    logout: (state) => {
      state.apiToken = ''
      state.status = ''

      localStorage.removeItem('apiToken')
    }
  },
  actions: {
    login ({state, commit}, data) {
      commit('loginRequest')
      return new Promise((resolve, reject) => {
        axios.post('/user/login', {
          'username': data.email,
          'password': data.password
        }).then(function (res) {
          commit('loginSuccess', res.data.data.api_token)
          resolve()
        }).catch(function (err) {
          commit('loginError')
          reject(err)
        })
      })
    },
    logout ({commit}) {
      commit('logout')
      return new Promise((resolve, reject) => {
        axios.get('/user/logout')
          .then(function (res) {
            delete axios.defaults.headers.common['Authorization']
            resolve()
          })
          .catch(function (err) {
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin: state => !!state.apiToken,
    loginStatus: state => state.status
  }
}
export default auth
