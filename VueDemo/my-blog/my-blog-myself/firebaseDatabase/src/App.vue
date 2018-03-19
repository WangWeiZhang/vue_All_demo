<template>
  <div id="app">
  		<!--<add-blog></add-blog>-->
  		<!--<show-blogs></show-blogs>-->
  		<blog-header></blog-header>
  		<router-view></router-view>
  		<blog-footer></blog-footer>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'
import BlogFooter from './components/BlogFooter'
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
export default {
  name: 'App',
  components:{
  		AddBlog , ShowBlogs , BlogHeader , BlogFooter
  }
}
</script>

<style>

</style>
