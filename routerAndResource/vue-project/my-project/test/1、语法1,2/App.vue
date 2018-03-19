<template>
  <div id="app">
  <test msg = "我是App.vue中的 test组件的属性msg"></test>
  </div>
</template>

<script>

import Test from './components/Test'

export default {
  name: 'App',
  components: {
  	Test
  }
}
</script>

<style>

</style>
