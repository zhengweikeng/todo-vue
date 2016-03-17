import {todo} from '../config/common'
const todoMiddleware = {
  onMutation (mutation, {todos}) {
    localStorage.setItem(todo.STORAGE_KEY, JSON.stringify(todos.items))
  }
}

export default [todoMiddleware]
