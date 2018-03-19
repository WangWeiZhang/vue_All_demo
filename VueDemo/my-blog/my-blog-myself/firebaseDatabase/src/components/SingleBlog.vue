<template>
	<div id='single-blog' >
		<div>
			<h1>{{blog.title}}</h1>
			<article>{{blog.content}}</article>
		</div>
	</div>
</template>

<script>
	export default{
		name:"single-blog",
		data:function(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$http.get("https://vueblog-6622c.firebaseio.com/posts/"+this.id+".json")
				.then(function(data){
					this.blog = data.body;
				})
		}
	}
</script>

<style scoped>
	#single-blog{
		box-sizing: border-box;
		max-width: 800px;
		margin: 30px auto;
		padding:20px;
		background:#999;
		border:1px dotted #aaa;
		color:#000;
		margin-bottom: 120px;
	}
	
	#single-blog>div{
		padding:20px;
		background:#eee
	}
</style>