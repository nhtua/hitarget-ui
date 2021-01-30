import axios from 'axios'

import {Config} from '../config'

export const UserStoreModule = {
  namespaced: true,
  state: {
    currentUser: null,
    token: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    setCurrentToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async fetchUser({ commit, dispatch }, token) {      
      const response = await axios.get(Config.API_HOST+"/users/me", {
        headers: {'Authorization': 'Bearer '+token}
      });
      dispatch('setToken', response.data.token)
      commit('setCurrentUser', response.data)
    },
    async loginUser({commit, dispatch}, form) {
      const response = await axios.post(Config.API_HOST+"/users/login", form)
      dispatch('setToken', response.data.token)
      commit('setCurrentUser', response.data)
    },
    async getToken({ commit }) {
      const token = window.localStorage.getItem('user_token')
      commit('setCurrentToken', token)
    },
    async setToken({ commit }, token) {
      window.localStorage.setItem('user_token', token)
      commit('setCurrentToken', token)
    }
  }
}
