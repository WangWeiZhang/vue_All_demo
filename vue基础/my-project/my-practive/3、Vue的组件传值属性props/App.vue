<template>
  <div id="app">
  	<app-header></app-header>
  	<app-users v-bind:users="users"></app-users>
  	<app-footer></app-footer>
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
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false},
      	{name:'王维璋' , positions:"web开发" , show:false}
      ]
  	}
  },
  components:{
  	 "app-header":Header,
  	 "app-footer":Footer,
  	 "app-users":Users
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