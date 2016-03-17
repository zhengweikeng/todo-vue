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
    todo(:todos="todoItems | filterTodo itemsType")  
  .panel-footer
    label
      | Remaining: {{rest}} items
    .todo-btn-group
      button.btn.btn-default(@click="itemsType='all'" v-bind:class="{'active': itemsType==='all'}") All
      button.btn.btn-default(@click="itemsType='active'" v-bind:class="{'active': itemsType==='active'}") Active
      button.btn.btn-default(@click="itemsType='completed'" v-bind:class="{'active': itemsType==='completed'}") Completed
      button.btn.btn-default(@click="clearAll") Clear All
</template>

<script>
import {addTodo, clearAll} from '../vuex/actions/todo.action'
import Todo from './todo.vue'
export default {
  data () {
    return {
      itemsType: 'all'
    }
  },
  vuex: {
    getters: {
      todoItems: ({todos}) => todos.items
    },
    actions: {
      addTodo,
      clearAll
    }
  },
  components: {Todo},
  methods: {
    addItem (e) {
      let val = e.target.value
      if (val.trim()) this.addTodo(val)
      e.target.value = ''
    }
  },
  computed: {
    rest () {
      return this.todoItems.filter(todo => !todo.done).length
    }
  }
}
</script>

<style lang="less">
.panel {
  margin-top: 30px;
  .panel-footer {
    display: flex;
    justify-content: space-between;
    .todo-btn-group {
      width: 350px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>