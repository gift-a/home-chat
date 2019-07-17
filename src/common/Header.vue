<template>
	<header>
		<div class="menu-button" @click="onMenuClick">
			<Burger :active="isMenuOpen"></Burger>
		</div>
		<span class="logo">Home Chat</span>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import AppService from '../App.service';
import Burger from '../shared/Burger.vue';


export default Vue.extend({
  name: 'Header',
  components: {
    Burger,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    onMenuClick() {
      AppService.toggleMenu();
    },
  },
  created() {
    AppService.$on('toggleMenu', (isOpen: boolean) => this.isMenuOpen = isOpen);
  },
});
</script>

<style lang="scss" scoped src="./Header.scss"></style>
