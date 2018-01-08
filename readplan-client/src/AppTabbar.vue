<template lang="pug">
  v-ons-page
    custom-toolbar
      | TETS
      v-ons-toolbar-button(slot="right")
        v-ons-icon(icon="ion-navicon")
    v-ons-tabbar(position="auto", :tabs="tabs")
</template>

<script>
import Dashboard from "./components/Dashboard";
import Books from "./components/Books";

export default {
  data() {
    return {
      tabs: [
        {
          page: Dashboard
        },
        {
          page: Books
        }
      ]
    };
  }
};
</script>
