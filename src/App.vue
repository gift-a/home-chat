<template>
  <div id="app">
    <Header class="app__header"></Header>
    <div class="app__menu">
      <Menu></Menu>
    </div>
    <Root class="app__root"></Root>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './common/Header.vue';
import Menu from './common/Menu.vue';
import Root from './common/Root.vue';


export default Vue.extend({
  name: 'app',
  components: {
    Header,
    Menu,
    Root,
  }
});
</script>

<style lang="scss">
@import './styles/main.scss';

#app {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 0px 1fr;
  grid-template-areas: 
    " header header "
    " menu root ";
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.app {
  &__header {
    grid-area: header;
  }
  
  &__menu {
    grid-area: menu;
    position: relative;
  }
  
  &__root {
    grid-area: root;
  }
}
</style>
