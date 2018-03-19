<template>
	<div v-theme:column="'wide'" id="show-blogs" >
		<h1>博客总览</h1>
		<input type="text" placeholder="快速检索" v-model="search"/>
		<div class="single-blog" v-for="blog in fillteredBlogs">
			<router-link v-bind:to=" '/blog/' + blog.id ">
				<h2 v-changecolor>{{blog.title | to-uppercase}}</h2> <!--| 是管道符号-->
			</router-link>
			
			<article>
				{{blog.body | snippet}}
			</article>
		</div>
	</div>
</template>
 
<script>
	export default{
		name:"show-blogs",
		data:function(){
			return{
				blogs:[],
				search:""
			}
		},
		created:function(){
			//../../static/posts.json  请求本地json文件 必须放在static目录下
			this.$http.get("http://jsonplaceholder.typicode.com/posts")
				.then(function(data){
					this.blogs = data.body.slice(0,20);
				})
		},
		computed:{
			fillteredBlogs:function(){
				//this.blogs.filter((blog) => {})这个作用 能够拿到数组中的每一个数据。
				//blog.title.match(this.search) 在数组的每一项里检索title 是否有this.search这个输入的字符串 有的话 返回值，没有返回null
				return this.blogs.filter((blog) => {
					//在 每一个title中检索 this.search
					return blog.title.match(this.search);
				});
			}
		},
		
		//局部组件使用（自定义 过滤器 指令）
		//自定义 过滤器
		filters:{
			"to-uppercase":function(value){
				return value.toUpperCase();//小写转换大写
			},
			"snippet":function(value){
				return value.slice(0,100) + "..."; //字符串截取100个长度超出部分显示省略号
			}
		},
		
		//自定义指令
		directives:{
			"changecolor":{
				bind(el , binding , vnode){
					//el, 触发这个指令的 对象dom
					el.style.color = "#" + Math.random().toString(16).slice(2,8);//随机生成颜色
				}
			},
			"theme":{
				bind(el , binding , vnode){
					//binding , 参数对象
					//如果传入的是字符串 需要在调用指令的部分 将其加上引号 转换字符串 模型 v-xxx="'yyy'" yyy是字符串
					if(binding.value == "wide"){
						el.style.maxWidth = "800px"
					}else if(binding.value == "normal"){
						el.style.maxWidth = "560px"
					}
					
					//如果穿入的参数是column 这个参数 模型是 v-xxx:yyy = ""  yyy就是参数
					if ( binding.arg == "column"){
						el.style.background = "#414456";
						el.style.padding = "20px";
					}					
				}
			}
		}
	}
</script>

<style scoped>
	#show-blogs *{
		box-sizing: border-box;
	}
	#show-blogs{
		max-width: 800px;
		margin: 30px auto;
		margin-bottom: 120px;
	}
	
	#show-blogs .single-blog{
		padding: 20px;
		margin:20px 0;
		box-sizing: border-box;
		background:#eee;
		border-radius: 4px;
	}
	
	input[type="text"]{
		width:100%;
		padding:10px;
		box-sizing: border-box;
		border: none;
		border-radius: 4px;
	}
	
	h1{
		color:#fff;
		text-shadow:5px 5px 5px #000;
	}
	
	a{
		text-decoration: none;
	}
	
	
</style>