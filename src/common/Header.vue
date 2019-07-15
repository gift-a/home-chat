<template>
	<header>
		<div @click="onMenuClick">
			<Burger :active="isMenuOpen"></Burger>
		</div>
		<span class="logo">Home Chat</span>
	</header>
</template>

<script lang="ts">
import Header from './Header';
export default Header;
</script>

<style lang="scss" scoped src="./Header.scss"></style>
