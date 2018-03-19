
import Vue from 'vue'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import App from './App'
import Routes from "./routes"

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
/*
 下面注释的全局指令 和 过滤器 需要的放在这
 * */

//配置路由 history 去掉地址栏多余的#符号
const router = new VueRouter({
	mode:"history",
	routes:Routes
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})










//全局自定义指令（哪都可以使用）
//	Vue.directive("changecolor" , {
//		bind(el , binding , vnode){
//				//el, 触发这个指令的 对象dom
//				el.style.color = "#" + Math.random().toString(16).slice(2,8);
//		}
//	})
//	Vue.directive("theme" , {
//		bind(el , binding , vnode){
//				//binding , 参数对象
//				//如果传入的是字符串 需要在调用指令的部分 将其加上引号 转换字符串 模型 v-xxx="'yyy'" yyy是字符串
//				if(binding.value == "wide"){
//					el.style.maxWidth = "1000px"
//				}else if(binding.value == "normal"){
//					el.style.maxWidth = "560px"
//				}
//				
//				//如果穿入的参数是column 这个参数 模型是 v-xxx:yyy = ""  yyy就是参数
//				if ( binding.arg == "column"){
//					el.style.background = "#6677cc";
//					el.style.padding = "20px";
//				}
//		}
//	})

//全局自定义过滤器（哪里都可以使用）
//	Vue.filter("to-uppercase" , function(value){
//			return value.toUpperCase();
//	})
	
//	Vue.filter("snippet" , function(value){
//			return value.slice(0,100) + "...";
//	})

//创建路由