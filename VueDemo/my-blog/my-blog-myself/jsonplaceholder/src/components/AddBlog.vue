<template>
	<div id='add-blog'>
		<h2>添加博客</h2>
		
		<form v-if="!submited">
			<label>博客标题</label>
			<input type="text" v-model="blog.title" required />
			<label >博客内容</label>
			<textarea v-model="blog.content">
				
			</textarea>
			
			<div id="checkboxes" >
				<label>Vue.js</label>
				<input type="checkbox" value="Vue.js" v-model="blog.categories"/>
				<label>react.js</label>
				<input type="checkbox" value="react.js" v-model="blog.categories" />
				<label>node.js</label>
				<input type="checkbox" value="node.js"  v-model="blog.categories"/>
				<label>Angular.js</label>
				<input type="checkbox" value="Angular.js" v-model="blog.categories" />
			</div>
			
			<label>作者：</label>
			<select v-model="blog.author">
				<option v-for="author in authors">
					{{author}}
				</option>
			</select>
			
			<button v-on:click.prevent="post">添加博客</button>
		</form>
		<div v-if='submited'>
			<h3>您的博客添加成功</h3>
		</div>
		
		<hr />
		
		<div id="preview">
			<h3>博客总览</h3>
			<p>博客标题: {{blog.title}}</p>
			<p>博客内容：</p>
			<p>{{blog.content}}</p>
			<p>博客分类：</p>
			<ul>
				<li v-for="category in blog.categories">
					{{category}}
				</li>
			</ul>
			<p>作者：{{blog.author}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		//http://jsonplaceholder.typicode.com/posts
		name:"add-blog",
		data:function(){
			return {
				blog:{
					title:"",
					content:"",
					categories:[
						
					],
					author:""
				},
				authors:[
					"WangWeizhang",
					"SunJiaying",
					"RuanYifeng"
				],
				submited:false
			}
		},
		methods:{
			post:function(){
				this.$http.post("http://jsonplaceholder.typicode.com/posts" , {
					title:this.blog.title,
					texts:this.blog.content,
					userId:1
				})
				.then(function(data){
					console.log(data)
					this.submited = true;
				})
			}
		}
	}
</script>

<style scoped>
	#add-blog *{
		box-sizing: border-box;
	}
	
	#add-blog{
		margin:30px auto;
		margin-bottom: 120px;
		max-width:800px;
		padding:20px;
		background:#ccc;
		border-radius: 4px;
	}
	
	label{
		display: block;
		margin:20px 0 10px;
	}
	
	input[type="text"],textarea,select{
		display: block;
		width:100%;
		max-width: 100%;
		padding:8px;
		border:none;
		border-radius: 4px;
	}
	
	textarea{
		min-height: 200px;
	}
	
	#checkboxes label{
		display: inline-block;
		margin-top: 0;
	}
	
	#checkboxes input{
		display: inline-block;
		margin-right:10px;
	}
	
	button{
		display: block;
		margin:20px 0;
		background:crimson;
		border:0;
		padding:14px;
		border-radius: 4px;
		font-size:18px;
		color:#fff;
		cursor: pointer;
	}
	
	#preview{
		padding:10px 20px;
		border:1px dotted #ccc;
		margin:30px 0;
	}
	
	h3{
		margin-top:10px;
	}
</style>

