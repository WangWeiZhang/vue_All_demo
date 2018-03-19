<template>
  <div class="hello">
     <h1>hello Vue！ 欢迎大家来到vue。</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<!-- 添加 scoped 可以单独设置 组件的样式，不受父组件的控制，和继承。 -->
<style scoped>
	h1{
		color: chartreuse;
	}
</style>
