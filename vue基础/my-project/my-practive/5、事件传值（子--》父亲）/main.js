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
		事件传值，子组件 -- >  传递给  -- > 父组件
			this.$emit("TitleChange" , "子像父组件传值");
			//注册事件（“注册事件的名字随便写” ， "事件传递的内容是什么"）
			// 触发到这部分的时候。vue会去父级中找TitleChange这个事件（这个事件在父级中）
 * */
