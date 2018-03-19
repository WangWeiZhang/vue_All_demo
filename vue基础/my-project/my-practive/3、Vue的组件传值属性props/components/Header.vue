<template>
	<header>
		<h1>{{title}}</h1>
	</header>
</template>

<script>
	
	export default {
		name:"app-header",
		data(){
			return {
				title:"Welcome to Vue Demo's Header!"
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
		color: blue;
	}
</style>