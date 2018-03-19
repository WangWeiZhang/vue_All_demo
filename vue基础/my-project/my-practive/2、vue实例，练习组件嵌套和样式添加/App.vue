<template>
  <div id="app">
  	<app-header></app-header>
  	<app-users></app-users>
  	<app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'
export default {
  name: 'app',
  components:{
  	 "app-header":Header,
  	 "app-footer":Footer,
  	 "app-users":Users
  },
  data(){
    return{
      
    }
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