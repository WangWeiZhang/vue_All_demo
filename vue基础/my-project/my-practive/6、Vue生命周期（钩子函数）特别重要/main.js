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
		生命周期，也就是vue执行的整个过程， 和渲染顺序。
		能够根据不同需求，在相应的方法中编写不同的操作
 * */
