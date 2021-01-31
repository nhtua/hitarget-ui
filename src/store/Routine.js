import axios from 'axios'

import {jwtHeader} from './helper'

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
    async fetchTodoList( {commit, rootState}) {
      const result = await axios.get(rootState.Config.data.API_HOST+'/routine', jwtHeader(rootState.User.token))
      const data = result.data.map(item=>{
        item.endDate = new Date(item.end_date+" 00:00:00");
        delete item.end_date;
        return item
      })
      commit('setTodoList', data)
    }
  }
}
