<template>
	<main>
		<div>
			content
		</div>
	</main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Root'
})
</script>

<style scoped>
	main {
		padding-top: 32px;
		position: relative;
		font-size: 1.2rem;
		background-color: lightcyan;
		min-height: 100vh;
		overflow-y: auto;
	}
</style>
