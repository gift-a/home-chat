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
