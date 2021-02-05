import axios from 'axios'

import {jwtHeader} from './helper'

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
    async fetchUser({ commit, dispatch, rootState, state }) {
      const response = await axios.get(rootState.Config.data.API_HOST+"/users/me", jwtHeader(state.token));
      dispatch('setToken', response.data.token)
      commit('setCurrentUser', response.data)
    },
    async loginUser({commit, dispatch, rootState}, form) {
      const response = await axios.post(rootState.Config.data.API_HOST+"/users/login", form)
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
    },
    async logout({commit, dispatch}) {
      dispatch('setToken', '')
      commit('setCurrentToken', null)
      commit('setCurrentUser', null)
    }
  }
}
