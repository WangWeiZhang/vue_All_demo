<template>
  <div id="app">
  	<ul>
			<li>
				<router-link to="/">User</router-link>
				<router-link to="/test">Test</router-link>
			</li>
		</ul>
		<router-view></router-view>
  	
  </div>
</template>

<script>

import User from './components/User'

export default {
  name: 'App'
}
</script>

<style>

</style>
