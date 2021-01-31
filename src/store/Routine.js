import axios from 'axios'

import Config from '../config.json'

export const RoutineStoreModule = {
  namespaced: true,
  state: {
    todoList: []
  },
  mutations: {
    setTodoList(state, todoList) {
      state.todoList = todoList
    }
  },
  actions: {
    async fetchTodoList( {commit}, token ) {
      const result = await axios.get(Config.API_HOST)
    }
  }
}
