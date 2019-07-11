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
			isOpen: false,
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

<style scoped>
	aside {
		width: 280px;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		border-left: 1px solid gray;
		box-shadow: -12px 6px 6px rgba(0, 0, 0, 0.2);
		z-index: 100;
		background-color: var(--secondary-bg-dark);
	}
		
	li {
		padding: 1rem;
		width: 100%;
		border-top: 1px solid gray;
		border-bottom: 1px solid gray;
		background-color: var(--secondary-bg);
	}
	
	li:last-child {
		border-bottom: none;
	}
	
	li:first-child {
		border-top: none;
	}
	
	li:hover {
		color: white;
		background-color: gray;
	}
</style>
