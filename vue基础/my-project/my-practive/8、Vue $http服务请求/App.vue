	<!--本组件是一个跟组件。-->
	<template>
	  <div id="app">
	  	<!--<a href="/">Home</a>
	  	<a href="/helloworld">Hello World</a> 会重新加载当前页面-->
	  	<li>
	  		<router-link to="/">Home</router-link>
	  	</li>
	  	<li>
	  		<router-link to="/helloworld">Hellow World</router-link>
	  	</li>
	  	<router-view>
	  		<!--包裹路由目标组建的标记 -  路由视图-->
	  	</router-view>
	  </div>
	</template>
		
	<script>
	
	export default {
		name: 'app',
		data(){
			return {
		  	}
		},
		components:{
			
		},
		methods:{
		   
		}
	}
	</script>
		
	<style>
	*{
		margin: 0px; padding: 0px;
	}
	</style>