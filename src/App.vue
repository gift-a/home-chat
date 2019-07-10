<template>
  <div id='app'>
    <Header></Header>
    <Root></Root>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './common/Header.vue';
import Root from './common/Root.vue';


export default Vue.extend({
  name: 'app',
  components: {
    Header,
    Root,
  }
});
</script>

<style>
@import './styles/main.css';

#app {
  height: 100%;
  display: grid;
  grid-template-rows: 32px 1fr;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
