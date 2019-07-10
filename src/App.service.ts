import Vue from 'vue';

export default new Vue({
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.$emit('toggleMenu', this.isMenuOpen);
    },
  },
});
