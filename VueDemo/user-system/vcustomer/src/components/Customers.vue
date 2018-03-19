<!--主页组件-->
<template>
	<div id="customers" class="container">
		<h1 class="page-header">用户管理系统</h1>
		<table class="table table-striped  table-bordered">
			<thead>
				<tr>
					<th>姓名</th>
					<th>电话</th>
					<th>邮箱</th>
					
				</tr>
			</thead>
			
			<tbody>
				<tr v-for="customer in customers">
					<td>{{customer.name}}</td>
					<td>{{customer.phone}}</td>
					<td>{{customer.email}}</td>
					
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default{
		name:"customers",
		data : function(){
			return {
				customers:[
					
				]
			}
		},
		methods:{
			fetchCustomers:function(){
				
			}
		},
		created:function(){
			var address = this.$http.get("http://localhost:3000/users");
		  	address.then(function(data){
		  		console.log(data);
		  		this.customers= data.body;
		  	})
		}
	}
</script>

<style scoped>
</style>