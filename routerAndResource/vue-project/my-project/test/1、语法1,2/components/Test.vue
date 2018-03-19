<template>
	<!--模板 绑定数据 if for v-text-->
	<div class='test'>
		<!--获取数据-->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>
		
		<!--v-if -->
		<p v-if="showName">{{user.firstName}}</p>
		<!--v-else-->
		<p v-else="showName">NoBody</p>
		<!--v-for-->
		<ul>
			<li style="list-style: none;" v-for='item in items'>{{item}}</li>
			<li style="list-style: none;" v-for='item in items'>{{item.title}}</li>
		</ul>
		
		<!-- v-on -->
		<button v-on:click="greet('Hello EveryBody')">Say Greeting</button>
		
		<!-- 键盘事件 -->
		<input type="text" v-on:keyup="pressKey" 
			               v-on:keyup.enter="enterHit"
						   v-on:keyup.alt.enter="AltEnter"
		/>
		
		<hr />
		
		<!--计算属性 computed-->
		<label for="">firstName: </label><input type="text" v-model="user.firstName" />
		<br />
		<label>lastName: </label><input type="text" v-model="user.lastName" />
		
		<h3>{{fullName}}</h3>
		
		<!--props 属性-->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default {
		name:"test",
		props:{
			msg:{
				type:String,
				default:"默认就是当前这些文字",
			}
		},
		data:function(){
			return {
				title:"Hello Vue.js",
				user:{
					firstName:"Weizhang",
					lastName:"Wang"
				},
				showName:false,
				items:[
					{title:"item 1"},
					{title:"item 2"},
					{title:"item 3"}
				]
			}
		},
		methods:{
			greet:function(greeting){
				alert(greeting)
			},
			pressKey:function(){
				console.log("zhixing");
			},
			enterHit:function(){
				console.log("你触发了回车键")
			},
			AltEnter:function(){
				console.log('你触发了alt enter键')
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " " + this.user.lastName;
			}
		}
	}
</script>

<style scoped>
	h1{
		text-align: center;
	}
</style>