	<template>
	  <div id="app">
	  	<!--<a href="/">Home</a>
	  	<a href="/helloworld">Hello World</a> 会重新加载当前页面-->
	  	<li><router-link to="/">Home</router-link></li>
	  	<li><router-link to="/helloworld">Hellow World</router-link></li>
	  	
	  	<router-view></router-view>
	  </div>
	</template>
		
	<script>
	import Home from "./components/Home"
	export default {
		name: 'app',
		data(){
			return {
	
		  	}
		},
		components:{
		  	 "app-home":Home,
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