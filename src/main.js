import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App.vue'
import router from './router.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})