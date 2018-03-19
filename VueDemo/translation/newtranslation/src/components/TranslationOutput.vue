<template>
  <div id="translationOutput">
     {{result}}
  </div>
</template>

<script>
export default{
		props:{
			result:{
				type:String
			}
		},
		name:'translationOutput'
}
</script>


<style scoped>
	#translationOutput{
		  width:600px;
		  margin: 0 auto;
		  text-align: center;
		  margin-top: 40px;
	    border: 1px solid #fff;
	    height: 250px;
	    width: 27%;
	    overflow-y: auto;
	    border-radius: 5px;
	    box-sizing: border-box;
	    padding:10px;
	    min-width: 600px;
	    color: #ccc;
    	font-family: "微软雅黑";
	}
</style>
