// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import User from './components/User'
import Test from './components/Test'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

const router = new VueRouter({
	mode:"history",
	base:__dirname,//当前路径
	routes:[
		{path:"/",component:User},
		{path:"/test", component:Test}
	]
})
/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
