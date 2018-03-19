<template>
	<div>
		<nav id="blog-header">
			<ul>
				<li>
					<router-link to="/index" exact>博客</router-link>
					<router-link to="/AddBlog" exact>写博客</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default{
		name:"blog-header"
	}
</script>

<style scoped>
	nav{
		background:#805244;
		padding: 30px;
		margin: 0 0 0px 0;
	}
	ul{
		list-style: none;
		text-align: center;
		margin: 0;
	}
	
	li{
		display: inline-block;
		margin: 0 10px;
	}
	
	a{
		text-decoration: none;
		color:#fff;
		border-radius: 4px;
		padding:10px;
	}
	
	.router-link-active{
		background:rgba(255,255,255,0.8);
		color:#444;
	}
	h1{
		text-align: center;
		margin-top:100px;
		color:#fff;
	}
</style>