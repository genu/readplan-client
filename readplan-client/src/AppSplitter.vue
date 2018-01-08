<template lang="pug">
  v-ons-page
    v-ons-splitter
      v-ons-splitter-side(swipeable, side="left", collapse="", :open.sync="isOpen")
        SideMenu
      v-ons-splitter-content
        AppTabbar
</template>
<script>
import SideMenu from "./components/SideMenu";
import AppTabbar from "./AppTabbar";

export default {
  computed: {
    isOpen: {
      get() {
        return this.$store.state.splitter.open;
      },
      set(newValue) {
        this.$store.commit("splitter/toggle", newValue);
      }
    }
  },
  components: { SideMenu, AppTabbar }
};
</script>

<style>
ons-splitter-side[animation="overlay"] {
  border-left: 1px solid #bbb;
}
</style>
