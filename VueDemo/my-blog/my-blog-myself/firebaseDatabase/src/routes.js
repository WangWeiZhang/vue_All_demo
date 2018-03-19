import ShowBlogs from "./components/ShowBlogs.vue"
import AddBlog from "./components/AddBlog.vue"
import SingleBlog from "./components/SingleBlog.vue"
export default[
	{path:"/index" , component:ShowBlogs},
	{path:"/AddBlog" , component:AddBlog},
	{path:"/blog/:id" , component:SingleBlog}
]
