import {todo} from '../../config/common'
function makeAction (type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
export const addTodo = makeAction(todo.ADD_TODO)
