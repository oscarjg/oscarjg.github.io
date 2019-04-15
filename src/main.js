import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap';
import BootstrapVue from 'bootstrap-vue'
import './styles/custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
