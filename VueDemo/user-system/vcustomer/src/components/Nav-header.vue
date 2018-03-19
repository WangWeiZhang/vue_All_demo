<!--导航组件-->
<template>
	<div id="nav-header">
		<nav class="navbar navbar-inverse">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="/">用户管理系统</a>
	        </div>
	        <div id="navbar" class="collapse navbar-collapse">
	          <ul class="nav navbar-nav">
	            <li><router-link to="/">主页</router-link></li>
	            <li><router-link to="/about">关于我们</router-link></li>
	          </ul>
	        </div>
	      </div>
	    </nav>
	</div>
</template>

<script>
	export default{
		name:"nav-header",
		data:function(){
			return {
				
			}
		}
	}
</script>

<style scoped>
</style>