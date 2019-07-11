<template>
	<div class='root'>
		<Menu></Menu>		
		<main>
			<div>
				content
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './Menu.vue';

export default Vue.extend({
	name: 'Root',
	components: {
		Menu,
	},
})
</script>

<style scoped>
.root {
	position: relative;
}

main {
	min-height: 100%;
	font-size: 1.2rem;
	overflow-y: auto;
	background-color: var(--secondary-bg-light)
}
</style>
