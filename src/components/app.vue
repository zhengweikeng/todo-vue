<template lang="jade">
.panel.panel-primary
  .panel-heading 
    h4 Todos
  .panel-body
    .input
      input.form-control(
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addItem")
    todo(:todos="todoItems")  
  .panel-footer
</template>

<script>
import {addTodo} from '../vuex/actions/todo.action'
import Todo from './todo.vue'
export default {
  vuex: {
    getters: {
      todoItems: ({todos}) => todos.items
    },
    actions: {
      addTodo
    }
  },
  components: {Todo},
  methods: {
    addItem (e) {
      let val = e.target.value
      if (val.trim()) this.addTodo(val)
      e.target.value = ''
    }
  }
}
</script>

<style lang="less">
.panel {
  margin-top: 30px;
  
}
</style>