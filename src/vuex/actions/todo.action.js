import {todo} from '../../config/common'
function makeAction (type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}

const addTodo = makeAction(todo.ADD_TODO)
const deleteTodo = makeAction(todo.DELETE_TODO)
const editTodo = makeAction(todo.EDIT_TODO)
const updateTodoState = makeAction(todo.UPDATE_TODO_STATE)
const clearAll = makeAction(todo.CLEAR_ALL_TODO)

export {addTodo, deleteTodo, editTodo, updateTodoState, clearAll}
