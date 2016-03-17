import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import middlewares from './middleware'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todos
  },
  middlewares,
  strict: debug
})
