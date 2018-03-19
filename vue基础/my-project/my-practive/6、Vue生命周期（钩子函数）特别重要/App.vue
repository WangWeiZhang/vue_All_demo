	<template>
	  <div id="app">
	  	<app-header v-bind:titleParent="titleParent" v-on:TitleChange="updateTitle($event)"></app-header>
	  	<app-users v-bind:users="users"></app-users>
	  	<app-users v-bind:users="users"></app-users>
	  	<app-footer v-bind:titleParent="titleParent"></app-footer>
	  </div>
	</template>
		
	<script>
	import Header from './components/Header'
	import Users from './components/Users'
	import Footer from './components/Footer'
	export default {
		name: 'app',
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
		},
		//vue的整个执行过程就是生命周期，什么时间段执行那个方法，我们了解后知道根据不同的需求写在不同的地方
		beforeCreate:function(){
			alert("组件实例化之前执行的函数");
		} ,
		created:function(){
			alert("组件实例化完毕，但页面还未显示");//组件已经生成 dom还没生成 （vue组件 和 实例化完成）
		},
		beforeMount:function(){
			alert("组件挂载前，页面仍未显示，但虚拟dom已经配置");
		},
		mounted:function(){
			alert("组件挂载后，此方法执行后，页面显示（渲染Dom）");  //交互 在这里进行
		},
		beforeUpdate:function(){
			alert("组件更新（改变）前，页面仍未更新，但虚拟dom已经配置");
		},
		updated:function(){
			alert("组件更新（改变）（重新渲染Dom），此方法执行后，页面显示");
		},
		beforeDestory:function(){
			alert("组件销毁前");
		},
		destoryed:function(){
			alert("组件销毁");
		}
	}
	</script>
		
	<style>
	*{
		margin: 0px; padding: 0px;
	}
	</style>