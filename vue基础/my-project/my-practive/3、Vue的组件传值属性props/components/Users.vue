<template>
  <div id="users">
  	
  	<h1>hello Users</h1>
  	
  	<ul>
  		<li v-for="user in users" v-on:click="user.show = !user.show">
  			<h2>{{user.name}}</h2>
  			<h3 v-show="user.show">{{user.positions}}</h3>
  		</li>
  	</ul>
  
  </div>
</template>

<script>

export default {
		name:"users",
		props:{
			users:{
				type:Array,
				required:true
			}
		},
	  data(){
	    return{
	     
	    }
	  },
	  methods:{
	
	  }
}
</script>

<style scoped>
	#users{
		width:100%;
		max-width:1200px;
		margin: 30px auto;
		border:1px solid #000;
		padding: 0 20px;
		box-sizing: border-box;
	}
	
	ul{
		list-style: none;
		margin:0;padding:0;
		display: flex;
		flex-wrap: wrap;
	}
	li{
		flex-grow:1;
		flex-basis: 200px;
		text-align: center;
		margin:10px;
		padding: 30px;
		border:1px solid #000
	}
</style>
