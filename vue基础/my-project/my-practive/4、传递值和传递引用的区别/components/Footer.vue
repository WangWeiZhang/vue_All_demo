<template>
	<footer>
		<p>{{ copyRight }}</p>
	</footer>
</template>

<script>
	export default{
		name:"app-footer",
		data(){
			return {
				copyRight:" @Copy 2017-2018 Vue's DEMO ! "
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