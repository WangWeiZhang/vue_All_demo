<template>
	<div id="translationInput">
		<form v-on:submit.prevent = "submitTranslation">
			<input v-model="Inputtext" type="text" placeholder="请输入你要翻译的内容！" />
			
			<select name="translation" v-model = "language">
				<option value="en">English</option>
				<option value="az">Azerbaijan</option>
				<option value="zh">Chinese</option>
				<option value="sq">Albanian</option>
				<option value="am">Amharic</option>
				<option value="ar">Arabic</option>
				<option value="hy">Armenian</option>
				<option value="af">Afrikaans</option>
				<option value="eu">Basque</option>
				<option value="ba">Bashkir</option>
				<option value="be">Belarusian</option>
				<option value="bn">Bengali</option>
				<option value="my">Burmese</option>
				<option value="bg">Bulgarian</option>
				<option value="bs">Bosnian</option>
				<option value="cy">Welsh</option>
				<option value="hu">Hungarian</option>
				<option value="vi">Vietnamese</option>
				<option value="da">Danish</option>
				<option value="he">Hebrew</option>
				<option value="yi">Yiddish</option>
				<option value="id">Indonesian</option>
				<option value="tg">Tajik</option>
			</select>
			
			<input type="submit" value="翻译"  />
			<!--<p>{{language}}</p>
			<p>{{Inputtext}}</p>-->
		</form>
	</div>
</template>

<script>
	export default{
		name:"translationInput" , 
		data:function(){
			return {
				language:"",
				Inputtext:""
			}
		},
		methods:{
			submitTranslation:function(e){
				this.$emit("TextAndLanguage" , this.Inputtext , this.language );
				e.preventDefault();
			}
		}
	}
</script>

<style scoped>
	#translationInput{
		width: 600px;
	    margin: 0 auto;
	    text-align: center;
	    height: 80px;
	    background: #ccc;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    border-radius: 10px;
	}
	
	#translationInput input[type = text]{
		width: 200px;
	    padding: 8px;
	    border: none;
	    border-radius: 5px;
	}
	#translationInput select[name = translation]{
		padding: 7px;
	    border: none;
	    border-radius: 5px;
	}
    #translationInput input[type = submit]{
    	border: none;
	    width: 70px;
	    padding: 8px;
	    border-radius: 5px;
	    background: #60c3a3;
	    color: #fff;
    }
</style>