<template>
	<div class="burger-button" :class="{ active: active }"></div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
	props: {
		active: Boolean
	},
});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

	.burger-button {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 30;
		width: 30px;
		height: 25px;
		border-top: 2px solid $secondary-bg;
		cursor: pointer;
		
		&:before, &:after {
			content: "";
			position: absolute;
			left: 0;
			width: 30px;
			height: 2px;
			background: $secondary-bg;
			transition: all 0.3s ease-in;
		}
		
		&:before {
			top: 10px;
		}
		
		&:after{
			bottom: 0;
		}
		
		&.active {
			border-color: transparent;
			
			&:before {
				transform: rotate(45deg);
				width: 33px;
				left: -2px;
			}
			
			&:after {
				transform: rotate(135deg);
				bottom: 11px;
				width: 33px;
				left: -2px;
			}
		}
	}
</style>

