// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
Vue.use(VueRouter);
Vue.use(VueResource);
//设置路由

const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/" , component:Customers},
		{path:"/about" , component:About},
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
