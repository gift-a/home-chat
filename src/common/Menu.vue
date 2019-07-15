<template>
	<aside v-show="isOpen">
		<ul>
			<li v-for="item in menuItems" :key="item">{{ item }}</li>
		</ul>
	</aside>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../App.service';

export default Vue.extend({
	name: 'Menu',
	data() {
		return {
			isOpen: true,
			menuItems: [
				'Home',
				'Chat',
				'Notes'
			]
		};
	},
	created() {
		this.isOpen = AppService.isMenuOpen;
		AppService.$on('toggleMenu', (isOpen: boolean) => this.isOpen = isOpen);
	},
})
</script>

<style lang="scss" scoped>
@import "../styles/variables";

	aside {
		width: 280px;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		border-left: 1px solid gray;
		box-shadow: -12px 6px 6px rgba(0, 0, 0, 0.2);
		z-index: 10;
		background-color: $primary-bg-dark;
	}
		
	li {
		padding: 1rem;
		width: 100%;
		background-color: $primary-bg;
	}
	
	li:hover {
		color: $light-color;
		background-color: $light-grey;
	}
</style>
