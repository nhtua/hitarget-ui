import axios from 'axios'
import format from 'date-fns/format'
import {jwtHeader} from './helper'
import {dehumanize} from '@/helpers/time'

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
        if (item.end_date) {
          item.endDate = new Date(item.end_date+" 00:00:00")
          delete item.end_date
        } else {
          item.endDate = null
        }
        return item
      })
      commit('setTodoList', data)
    },
    async addRoutine( {commit, state, rootState}, data ) {
      if (data.endDate) {
        data.end_date = format(data.endDate, 'yyyy-MM-dd')
        delete data.endDate
      }
      let d = data.duration.toLowerCase()
      data.duration = dehumanize(d)
      const result = await axios.post(rootState.Config.data.API_HOST+'/routine', data, jwtHeader(rootState.User.token))
      commit('setTodoList', [result.data, ...state.todoList])
    }
  }
}
