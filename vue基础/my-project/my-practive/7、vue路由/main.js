//组件传值
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

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

new Vue({
	router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*
		事件传值，子组件 -- >  传递给  -- > 父组件
			this.$emit("TitleChange" , "子像父组件传值");
			//注册事件（“注册事件的名字随便写” ， "事件传递的内容是什么"）
			// 触发到这部分的时候。vue会去父级中找TitleChange这个事件（这个事件在父级中）
 * */
