	<template>
	  <div id="home">
	  	<app-header v-bind:titleParent="titleParent" v-on:TitleChange="updateTitle($event)"></app-header>
	  	<app-users v-bind:users="users"></app-users>
	  	<app-users v-bind:users="users"></app-users>
	  	<app-footer v-bind:titleParent="titleParent"></app-footer>
	  </div>
	</template>
		
	<script>
	import Header from './Header'
	import Users from './Users'
	import Footer from './Footer'
	export default {
		name: 'home',
		data(){
			  	return {
			  		users:[
			      	{name:'王维璋' , positions:"web开发" , show:false}
			    ],
			    titleParent:"我是传递过来的引用，（string、number、boolean等）"
		  	}
		},
		components:{
		  	 "app-header":Header,
		  	 "app-footer":Footer,
		  	 "app-users":Users
		},
		methods:{
		    updateTitle:function(title){
		    	this.titleParent = title;
		    }
		}
	}
	</script>
		
	<style>
	*{
		margin: 0px; padding: 0px;
	}
	</style>