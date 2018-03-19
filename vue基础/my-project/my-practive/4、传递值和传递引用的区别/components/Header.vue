<template>
	<header>
		<h3>{{title}}</h3>
		<h3 class="Yinyong">{{titleParent}}</h3>
		<button v-on:click="changeTitle">改变title</button>
	</header>
</template>

<script>
	
	export default {
		name:"app-header",
		props:{
			titleParent:{
				type:String
			}
		},
		data(){
			return {
				title:"传递值（string、boolean、number）则不会形成公用部分相互绑定，这类似于面向对象的原型继承的引用问题。"
			}
		},
		methods:{
			changeTitle:function(){
				this.titleParent = "我被改变了！"
			}
		}
	}
</script>

<style scoped>
	header{
		width:100%;
		height:100px;
		background: darkcyan;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		margin-bottom: 2px;
	}
	
	.Yinyong{
		color:#DAA520
	}
</style>