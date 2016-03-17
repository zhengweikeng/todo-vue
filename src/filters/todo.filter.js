const filterTodo = (todos, type) => {
  if (type === 'active') {
    return todos.filter(todo => !todo.done)
  } else if (type === 'completed') {
    return todos.filter(todo => todo.done)
  } else return todos
}

export {filterTodo}
