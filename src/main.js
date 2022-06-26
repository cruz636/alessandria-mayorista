import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ProductList from './components/ProductList';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';


import { createPinia, PiniaVuePlugin } from 'pinia';

// import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

const routes = [
  { path: '/items', component: ProductList },
  { path: '/items/:category', component: ProductList },
  { path: '/', component: MainPage },
  { path: '/item/:itemId', component: ProductPage },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/cart', component: Cart },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  pinia,
}).$mount('#app')
