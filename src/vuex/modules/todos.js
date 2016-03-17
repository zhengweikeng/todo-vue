import {todo} from '../../config/common'

const state = {
  items: JSON.parse(localStorage.getItem(todo.STORAGE_KEY) || '[]')
}

const mutations = {
  [todo.ADD_TODO] (state, value) {
    state.items.push({
      text: value,
      done: false
    })
  },
  [todo.DELETE_TODO] (state, value) {
    // $remove() is just syntax sugar for splice()
    state.items.$remove(value)
  },
  [todo.EDIT_TODO] (state, todo, value) {
    todo.text = value
  },
  [todo.UPDATE_TODO_STATE] (state, todo) {
    todo.done = !todo.done
  },
  [todo.CLEAR_ALL_TODO] (state) {
    state.items = []
  }
}
export default {
  state,
  mutations
}
