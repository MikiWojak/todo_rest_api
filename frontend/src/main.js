import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import LandingPage from './components/marketing/LandingPage'
import Master from './components/layouts/Master'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/todo', component: App }
];

const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  store: store,
  render: h => h(Master),
}).$mount('#app')
