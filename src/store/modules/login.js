import users from '../../api/user'

// initial state
const state = {
  isLoggedin: false,
  user: {}
}

// getters
const getters = {
  isLoggedin: (state, getters, rootState) => {
    return state.isLoggedin
  },
  userData: (state, getters, rootState) => {
    return state.user
  }
}

// actions
const actions = {
  doLogin ({ state, commit }, user) {
    commit('setLoginDatas', user)
  },
  doLogout ({ state, commit }) {
    commit('setLogoutDatas')
  }
}

// mutations
const mutations = {
  setLoginDatas (state, data) {
    state.user = data
    state.isLoggedin = true
  },
  setLogoutDatas (state) {
    state.user = {}
    state.isLoggedin = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}