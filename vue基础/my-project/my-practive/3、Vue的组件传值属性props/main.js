//组件传值
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*
 组件传值，父组件向子组件传值
 
 	1、例如很多组件都会用到的，不可能在每一个子组件中写上，那么我们需要将他抽离出来，写到父组件上。
 		那么，需要的儿子使用时，如何传值呢？
 		答：在调用子组件的标记上，绑定一个自定义属性，属性值设置成我们 需要传递的对象或者数组。
 				
 				<app-header v-bind:自定义属性名="data中的对象，需要传递的"></app-header>
 			   
 			   在接收端，也就是儿子上，需要在vue对象中添加props对象
 			   				props:{
 			   					自定义属性名：{
 			   						type:Array/Object/String..... , 
 			   						required:true
 			   					}
 			   				}
 			   				或
 			   				props:["自定义属性名"]
 			   				
 			  这样的话，在我们子组件中就可以使用了。
 			  
 			  注意：第一种对象props的方式是官方推荐的，需要指定对象类型，和布尔值
 
 
 * */
