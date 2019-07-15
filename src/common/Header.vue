<template>
	<header>
		<span class="logo">Home Chat</span>
		<button @click="onMenuClick">Menu</button>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../App.service';


export default Vue.extend({
	name: 'Header',
	data() {
		return {
		}
	},
	methods: {
		onMenuClick() {
			AppService.toggleMenu();
		},
	}
})
</script>

<style lang="scss" scoped>
@import "../styles/variables";

	header {
		display: flex;
		justify-content: space-between;
		background-color: $primary-bg-dark;
		color: $light-color;
	}
	.logo {
		font-size: 2rem;
	}
	button {
		text-transform: uppercase;
		font-weight: bolder;
		cursor: pointer;
	}
</style>

