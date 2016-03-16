import {todo} from '../../config/common'

const STORAGE_KEY = 'todos'
const state = {
  items: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
  [todo.ADD_TODO] (state, value) {
    state.items.push(value)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
  }
}

export default {
  state,
  mutations
}
