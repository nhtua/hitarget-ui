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
    },
    replaceTask(state, task) {
      state.todoList.forEach((v,i)=>{
        if (v.id == task.id) state.todoList[i] = task
      })
    }
  },
  actions: {
    async fetchTodoList( {commit, rootState}) {
      const result = await axios.get(rootState.Config.data.API_HOST+'/routine', jwtHeader(rootState.User.token))
      const data = result.data.map(item=>{
        if (item.end_date) {
          item.end_date = new Date(item.end_date+" 23:59:59")
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
    },
    async addCheckpoint( {commit, rootState}, checkpoint) {
      const result = await axios.put(rootState.Config.data.API_HOST+'/routine/checkpoint',
        checkpoint,
        jwtHeader(rootState.User.token))
      const task = result.data
      task['end_date'] = task['end_date'] ?new Date(task.end_date+' 23:59:59') :null
      commit('replaceTask', task)
    }
  }
}
