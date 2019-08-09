import Vue from 'vue'
import App from './App.vue'


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
  theme: {
    primary: '#00C853',
    secondary: '#2E7D32',
    accent: '#558B2F',
    error: '#4CAF50'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')