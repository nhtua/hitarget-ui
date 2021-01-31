import { createStore } from 'vuex'
import {UserStoreModule} from './User'
import {ConfigStoreModule} from './Config'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Config: ConfigStoreModule,
    User: UserStoreModule
  }
})
