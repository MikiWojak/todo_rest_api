import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  store: store,
  render: h => h(Master),
}).$mount('#app')
