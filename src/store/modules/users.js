import users from '../../api/user'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllUsers ({ commit }) {
    users.getUsers(data => {
      commit('setUsers', data)
    })
  }
}

// mutations
const mutations = {
  setUsers (state, data) {
    state.all = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}