<template>
	<div class="translationOutput">
		{{translated}}
	</div>
</template>

<script>
	export default{
		props:{
			translated:{
				type:String
			}
		},
		name:'translationOutput'
	}
</script>

<style scoped>
	.translationOutput{
		text-align: center;
		margin-top: 20px;
		color:#fff;
		font-size:40px;
		border: 1px solid #20B2AA;
		min-height: 100px;
		border-radius: 10px;
		background: #cccccc4d;
	}
</style>