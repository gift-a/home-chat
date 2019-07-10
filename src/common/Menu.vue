<template>
	<aside>
		<ul>
			<li>Home</li>
			<li>Chat</li>
			<li>Notes</li>
		</ul>
	</aside>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Menu'
})
</script>

<style scoped>
	aside {
		width: 300px;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		background-color: antiquewhite;
		z-index: 100;
	}
	
	ul, li {
		padding: 0;
		margin: 0;
	}
	
	li {
		height: 2rem;
		width: 100%;
		background-color: lightgray;
		appearance: none;
	}
</style>
