<template>
  <div id="users">
  	
  	<h1>传递引用，会形成绑定，一旦有一处修改，所有用到的部分全部改变</h1>
  	
  	<ul>
  		<li v-for="user in users">
  			<h2>{{user.name}}</h2>
  			<h3>{{user.emali}}</h3>
  		</li>
  	</ul>
  	
  	<button v-on:click="deleteOneList">删除</button>
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
	      title:"ssss"
	    }
	  },
	  methods:{
			deleteOneList:function(){
				 this.users.pop();
			}
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
