<template lang="pug">
  v-ons-page
    v-ons-toolbar(modifier="transparent")
    .header
      img(src="../assets/onsenui-logo.png", alt="onsenui-logo")
    v-ons-list
      v-ons-list-item(modifier="tappable")
        div.left: v-ons-icon(icon="fa-dashboard")
        div.center Dashboard
      v-ons-list-item(modifier="chevron", @click="goTo('books')")
        div.left: v-ons-icon(icon="fa-book")
        div.center My Books
</template>

<script>
export default {
  methods: {
    goTo(url) {
      this.$ons.notification.alert("Action happened");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-title {
  text-transform: none;
}

ons-list-item {
  cursor: pointer;
}
</style>


