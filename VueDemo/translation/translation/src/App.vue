<template>
  <div id="app">
			<translationTitle></translationTitle>
			<translationInput v-on:requestApi="requestApi"></translationInput>
			<translationOutput v-bind:translated="translated"></translationOutput>
  </div>
</template>

<script>
import TranslationTitle from './components/TranslationTitle'
import TranslationInput from './components/TranslationInput'
import TranslationOutput from './components/TranslationOutput'

export default {
  name: 'App',
  data:function(){
  	return {
  		translated:""
  	}
  },
  components: {
    TranslationTitle , TranslationInput , TranslationOutput
  },
  methods:{
  	requestApi:function(text , launage){
  		  this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180208T080908Z.c3410b0ba5b4bf2f.01aea4f846c93b9cce2f13aabef0f76c4ecb9c27&text="+text+"&lang="+launage+"")
									.then(function(response){
										  console.log(response.body.text[0]);
										  this.translated = response.body.text[0];
									})
  	}
  }
}
</script>

<style>

</style>
