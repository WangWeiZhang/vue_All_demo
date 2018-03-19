<template>
	<div id="translationTitle">
		<h1>在线翻译</h1>
		<p>简单 / 方便  / 快捷</p>
	</div>
</template>

<script>
	export default{
		name:"translationTitle" , 
		data:function(){
			return {
				msg:"我是标题组件"
			}
		}
	}
</script>

<style scoped>
	#translationTitle{
		  width:600px;
		  margin: 0 auto;
		  text-align: center;
		  min-width: 600px;
	}
	#translationTitle h1{
		 font-size: 50px;
    	 font-weight: normal;
	}
	
	#translationTitle p{
		  font-size: 18px;
	}
	
</style>