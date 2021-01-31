import { createStore } from 'vuex'
import {ConfigStoreModule} from './Config'
import {UserStoreModule} from './User'
import {RoutineStoreModule} from './Routine'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Config: ConfigStoreModule,
    User: UserStoreModule,
    Routine: RoutineStoreModule
  }
})
