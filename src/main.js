import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

Vue.config.productionTip = false

const baseUrl = '176.122.105.118:3000'

const ax = new Axios({baseUrl}) 

Vue.prototype.$http = ax

new Vue({
  render: h => h(App),
}).$mount('#app')
