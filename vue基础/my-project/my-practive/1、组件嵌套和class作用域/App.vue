<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <users></users>
  </div>
</template>

<script>

//局部注册两个子组件。（想要在那个组件中使用就可以在那个组件中引入）
import HelloWorld from './components/HelloWorld'
import Users from './components/Users' 

export default {
  name: 'App',
  components: {
    HelloWorld,
    "users":Users  // '第一个users可以省略掉' ， 但是这个名字其实就是标签名，不能喝系统html标签冲突的名字。不然会有问题
  }
}
</script>

<!--样式-->
<style>
	h1{
		color:goldenrod;
	}
</style>
