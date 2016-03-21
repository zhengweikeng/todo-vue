<template lang="jade">
.list
  ul
    li.item(v-for="(index, todo) in todos") 
      input.todo-checkbox(type="checkbox"
        v-bind:checked="todo.done"
        @change="updateTodoState(todo)")
      .text(@dblclick="editItem(index, $event)" 
        v-text="todo.text"
        v-bind:class="{'finish': todo.done}")
      input.form-control(type="text" 
        v-bind:value="todo.text" 
        style="display: none;"
        @blur="cancelEdit"
        @keyup.enter="doneEdit(todo, $event)"
        @keyup.esc="cancelEdit")
      span.glyphicon.glyphicon-remove.remove(
        aria-hidden="true"
        @click="deleteTodo(todo)")
</template>

<script>
import {deleteTodo, editTodo, updateTodoState} from '../vuex/actions/todo.action'

export default {
  props: ['todos'],
  vuex: {
    actions: {
      deleteTodo,
      editTodo,
      updateTodoState
    }
  },
  methods: {
    editItem (index, e) {
      e.target.style.display = 'none'
      let input = e.target.nextElementSibling
      let checkbox = e.target.previousElementSibling
      let glyphicon = input.nextElementSibling
      input.style.display = ''
      checkbox.style.display = 'none'
      glyphicon.style.display = 'none'
    },
    cancelEdit (e) {
      let input = e.target
      input.style.display = 'none'
      let text = input.previousElementSibling
      text.style.display = ''
      let checkbox = text.previousElementSibling
      checkbox.style.display = ''
      input.nextElementSibling.style.display = ''
    },
    doneEdit (todo, e) {
      this.cancelEdit(e)
      const val = e.target.value
      if (val.trim()) return this.editTodo(todo, val)
      this.deleteTodo(val)
    }
  }
}
</script>

<style lang="less">
.list {
  ul {
    margin-top: 20px;
    padding-left: 0;
  }
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  .text {
    width: 100%;
  }
  .todo-checkbox {
    margin-right: 10px;
  }
  .finish {
    text-decoration: line-through;
  }
}
</style>