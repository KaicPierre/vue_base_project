import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './app/router'
import store from './app/store'
import vuetify from './plugins/vuetify'
import { ValidationProvider, ValidationObserver } from './plugins/veeValidation'

Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
