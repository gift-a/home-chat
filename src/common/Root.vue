<template>
	<div class='root'>	
		<main>
			<div>
				content
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Root',
	components: {},
})
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.root {
	position: relative;
}

main {
	min-height: 100%;
	font-size: 1.2rem;
	overflow-y: auto;
	background-color: $secondary-bg-light;
}
</style>
