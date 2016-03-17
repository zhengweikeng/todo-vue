import Vue from 'vue'
import App from './components/app.vue'
import store from './vuex/store'
import {filterTodo} from './filters/todo.filter'

require('bootstrap/dist/css/bootstrap.css')

Vue.filter('filterTodo', filterTodo)

/* eslint-disable no-new */
new Vue({
  el: '#todo',
  store,
  components: { App }
})
