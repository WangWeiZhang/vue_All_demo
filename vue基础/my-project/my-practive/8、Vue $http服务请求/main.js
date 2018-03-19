//组件传值
import Vue from 'vue'
import VueResource from 'vue-resource' //$http服务模块
import VueRouter from 'vue-router'     //Vue 简单路由模块
import App from './App'				   //跟组件模块，入口模块
import HelloWorld from './components/HelloWorld' // 目标组件 HelloWorld
import Home from './Home'        //目标组件Home

Vue.config.productionTip = false

//使用路由
Vue.use(VueRouter)

//配置路由
const router =new VueRouter({
	routes:[
		{path:'/' , component:Home},
		{path:'/helloworld' , component:HelloWorld}
	],
	mode:"history"
})


//使用服务 进行交互
Vue.use(VueResource)


new Vue({
	router,
  el: '#app',
  template: '<App/>',
  components: { App }
})