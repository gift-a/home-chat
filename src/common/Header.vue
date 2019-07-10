<template>
	<header>Home Chat</header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Header',
})
</script>

<style scoped>
	header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 32px;
		font-size: 2rem;
		z-index: 50;
		background-color: darkslategrey;
		color: white;
	}
</style>

