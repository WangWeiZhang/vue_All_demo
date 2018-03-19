<template>
	<footer>
		<p>{{ titleParent }}</p>
	</footer>
</template>

<script>
	export default{
		name:"app-footer",
		props:{
			titleParent:{
				type:String,
				required:true
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	footer{
		width:100%;
		padding: 30px;
		background: #000;
		box-sizing: border-box;		
	}
	
	p{
		color:darkcyan;
		text-align: center;
	}
</style>