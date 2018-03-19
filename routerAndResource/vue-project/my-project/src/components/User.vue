<template>
	
	<div class='user'>
		<h1>Users</h1>
		<!--添加用户信息-->
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter name"/>
			<input type="text" v-model="newUser.email" placeholder="Enter email"/>
			<input type="submit" vaule="submit"/>
		</form>
		<ul>
			<li v-for='user in users'>
				<input type="checkbox" v-model="user.contacted" />
				<span v-bind:class="{contacted:user.contacted}">
					{{user.name}} : {{user.email}}
					<button v-on:click="deleteUser(user)">删除</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"user",
		data:function(){
			return {
				newUser:{
					
				},
				users:[
					
				]
			}
		},
		methods:{
			addUser:function(e){
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				})
				e.preventDefault();
			},
			deleteUser:function(user){
				this.users.splice(this.users.indexOf(user) , 1);
			}
		},
		created:function(){
			this.$http.get("http://jsonplaceholder.typicode.com/users")
					  .then(function(response){
					  	this.users = response.body
					  })
		}
	}
</script>

<style scoped>
	h1{
		text-align: center;
	}
	.contacted{
		text-decoration:line-through;
	}
</style>