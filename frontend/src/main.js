import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from './components/layouts/Master'
import { store } from './store/store'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router: router,
  store: store,
  render: h => h(Master),
}).$mount('#app')
