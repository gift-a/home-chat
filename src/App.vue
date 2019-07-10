<template>
  <div id='app'>
    <Header></Header>
    <Menu></Menu>
    <Root></Root>
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

<style>
html, body {
  font-size: 16px;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
