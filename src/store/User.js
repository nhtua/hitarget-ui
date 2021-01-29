import axios from 'axios'

import {Config} from '../config'

export const UserStoreModule = {
  namespaced: true,
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    async fetchUser({ commit }, token) {
      token;
      commit('setCurrentUser', null)
    },
    async loginUser({commit}, form) {
      const response = await axios.post(Config.API_HOST+"/users/login", form);
      commit('setCurrentUser', response.data)
    }
  }
}
