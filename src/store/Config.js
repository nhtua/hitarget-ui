import axios from 'axios'

export const ConfigStoreModule = {
  namespaced: true,
  state: {},
  mutations: {
    setData(state, data) {
      state.data  = data
    }
  },
  actions: {
    async fetchConfig({commit}) {
      try {
        const response = await axios.get(process.env.BASE_URL+"config.json")
        commit('setData', response.data)
      } catch (err) {
        console.error("Cannot load configuration")
        throw err
      }
    }
  }
}
