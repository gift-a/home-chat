<template>
	<aside v-show="isOpen">
		<div class="animation-cover">
			<ul>
				<li v-for="( item, i ) in menuItems" :key="item" :style="{ 'animation-delay': i * 0.5 + 's' }">{{ item }}</li>
			</ul>
		</div>
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
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 10;
		width: 280px;
	}
	
	ul {
		position: relative;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	li {
		width: 100%;
		padding: 1rem;
		background-color: $primary-bg;
		animation-name: shift-right;
		animation-duration: 0.5s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
		transform: translateX(-100%) rotateX(-90deg);
		transform-origin: 0% 0%;
		margin: 4px;
	}
	
	li:hover {
		color: $light-color;
		background-color: $light-grey;
	}
	
	.animation-cover {
		width: 100%;
		height: 100%;
		background-color: $primary-bg-dark;
		box-shadow: -12px 6px 6px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		animation-name: shift-bottom;
		animation-duration: 1s;
	}
	
	@keyframes shift-right {
		0% {
			transform: translateX(-100%) rotateX(-90deg);
			transform-origin: 0% 0%;
			
		}
		100% {
			transform: translateX(0) rotateX(0);
			transform-origin: 0% 0%;
		}
	}
		
	@keyframes shift-bottom {
		0% {
			height: 0;
		}
		100% {
			height: 100%;
		}
	}
</style>
