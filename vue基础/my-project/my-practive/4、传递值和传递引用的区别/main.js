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
 传递值，和传递引用是不同的。
 
	1、 传递值，当在单个组件中改变了这个值，那么其他组件的值不会受影响，因为他们虽然值相等，但是不是同一个地址。
	2、传递引用，这个则不同。类似于我们创建一个数组，然后将数组赋值给一个新数组，那么在新数组上删除元素，自然就是删除刚开始创建的数组。
 					因为，数组，对象等赋值，给的只是引用-也就是我们说的地址内存控件。
 					而，string，number，boolane则是复制 获取传递过去的是真真切切的值。
 
 * */
