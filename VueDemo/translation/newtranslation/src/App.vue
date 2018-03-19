<template>
  <div id="app">
  	<translationTitle></translationTitle>
  	<translationInput v-on:TextAndLanguage = "TextAndLanguage"></translationInput>
  	<translationOutput v-bind:result="result"></translationOutput>
  </div>
</template>

<script>
import TranslationTitle from "./components/TranslationTitle"
import TranslationInput from "./components/TranslationInput"
import TranslationOutput from "./components/TranslationOutput"
export default {
  name: 'App',
  data:function(){
  	return {
  		result:""
  	}
  },
  components: {
  	TranslationTitle,
    TranslationInput, 
    TranslationOutput
  },
  methods:{
  	TextAndLanguage:function(InputText , language){
  		console.log(InputText);
  		console.log(language)
  			var http = this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180208T080908Z.c3410b0ba5b4bf2f.01aea4f846c93b9cce2f13aabef0f76c4ecb9c27&text="+InputText+"&lang="+language)
  					http.then(function(response){
							this.result = response.body.text[0];
  					})
  	}
  }
}
</script>

<style>
		#app{
			margin-top: 100px;
		}
</style>
