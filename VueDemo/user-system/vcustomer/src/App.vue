<!--跟组件-->
<template>
  <div id="app">
  		<!--导航-->
  		<nav-header></nav-header>
	    <!--路由控制区域显示-->
  		<router-view></router-view>
  </div>
</template>

<script>
//引入导航组件
import NavHeader from "./components/Nav-header"

export default {
	  name: 'App',
	  data:function(){
	  	return{
	  		
	  	}
	  },
		//注册组件	  
	  components:{
	  		NavHeader
	  }
}
</script>

<style>

</style>
