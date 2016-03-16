import Vue from 'vue'
import App from './components/app.vue'
import store from './vuex/store'

require('bootstrap/dist/css/bootstrap.css')

/* eslint-disable no-new */
new Vue({
  el: '#todo',
  store,
  components: { App }
})
