<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者: {{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="category in blog.categories">
				{{category}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"single-blog",
		data(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$http.get('https://vueblog-6622c.firebaseio.com/posts/' + this.id + ".json")
				.then(function(data){
					console.log(data);
					return data.json();
					// this.blog = data.body;
				})
				.then(function(data){
					this.blog = data;
				})
		}
	}
</script>
<style>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #aaa;
	}
</style>