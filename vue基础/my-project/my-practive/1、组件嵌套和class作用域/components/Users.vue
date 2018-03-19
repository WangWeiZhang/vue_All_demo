<template>
	<div class="users">
		
		<ul>
			<h1>这个是users组件的h1标签</h1>
			<li v-for="user in users">
				{{user}}
			</li>
		</ul>
	</div>
</template>


<script>
	export default {
	  name: 'users',
	  data () {
	    return {
	     users:["herry" , "Bucky" , "emily"]
	    }
	  }
	}
</script>

<style scoped>
	h1{
		color:red;
	}
</style>