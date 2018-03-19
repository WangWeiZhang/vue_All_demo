<template>
	<div class="translationInput">
		<form v-on:submit.prevent ="submits">
			<input v-model="inputText" class="textInput" type="text" placeholder="请输入任意一种语言进行翻译"/>
			<select v-model="launage">
				  <option value="en">English</option>
		          <option value="ru">Russian</option>
		          <option value="ko">Korean</option>
		          <option value="zh">Chinese</option>
		          <option value="ko">Korean</option>
		          <option value="xh">Xhosa</option>
			</select>
			<input class="button" type="submit" value="翻译"   />
		</form>
	</div>
</template>

<script>
	export default{
		name:'translationInput',
		data:function(){
			return {
				inputText:"",
				launage:""
			}
		},
		methods:{
			submits:function(e){
				console.log(this.launage);
				this.$emit("requestApi" , this.inputText , this.launage);
			}
		}
	}
</script>

<style>
	.translationInput{
		text-align: center;
		width: 600px;
		margin: 0 auto;
		background: #ccc;
		padding: 20px 0;
		border-radius: 10px;
		border: 1px solid #aaa;
	}
	.translationInput input.textInput{
		width:200px;
		padding: 10px;
		border-radius: 10px;
	}
	.translationInput select{
		width: 100px;
		padding: 10px;
		border-radius: 10px;
	}
	.translationInput .button{
		width:60px;
		padding: 10px;
		border-radius: 10px;
		background: lightseagreen;
		color: #fff;
	}
</style>