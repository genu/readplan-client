<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.center Dashboard
      div.left: v-ons-toolbar-button(@click="toggleSideMenu()"): v-ons-icon(icon="fa-bars")
    Calendar
</template>
<script>
import Calendar from "../components/Calendar/Calendar";

export default {
  methods: {
    toggleSideMenu() {
      this.$store.commit("splitter/toggle");
    }
  },
  components: { Calendar }
};
</script>
