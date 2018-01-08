<template lang="pug">
  v-ons-splitter
    v-ons-splitter-side(swipeable, collapse="", :open="openSide"): v-ons-page
      v-ons-toolbar(modifier="transparent")
      div.header: img(src="./assets/onsenui-logo.png", alt="onsenui-logo")
      v-ons-list
        v-ons-list-item(modifier="chevron", @click="navigateTo('dashboard')")
          div.center Dashboard
        v-ons-list-item(modifier="chevron", @click="navigateTo('books') ")
          div.center Books
    v-ons-splitter-content: component(:is="currentPage")
</template>

<script>
import { mapState } from "vuex";
import { isNull } from "lodash";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";

export default {
  data() {
    return {
      currentPage: "dashboard"
    };
  },
  computed: mapState({
    openSide: state => state.splitter.open
  }),
  methods: {
    navigateTo(page) {
      this.currentPage = page;
      this.$store.commit("splitter/toggle");
    }
  },
  components: { Dashboard, Books }
};
</script>
