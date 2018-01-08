<template lang="pug">
  v-ons-page
    v-ons-toolbar.home-toolbar
      .left: v-ons-toolbar-button(@click="$store.commit('splitter/toggle')"): v-ons-icon(icon="fa-bars")
      .center Books
    div
      custom-toolbar
        v-ons-segment
          button Load More
          button saomn
    v-ons-list
      v-ons-list-item(v-for="item in essentialLinks", @click="goTo(item.link)", :key="item.link")
        .left
          v-ons-icon(fixed-width="", :icon="item.icon")
        |
        .center {{ item.label }}
        |
        .right
          v-ons-icon(icon="fa-external-link")
    |
    v-ons-list-title Vue.js Ecosystem
    |
    v-ons-row
      v-ons-col
        v-ons-card(@click="goTo('http://router.vuejs.org/')") vue-router
      |
      v-ons-col
        v-ons-card(@click="goTo('http://vuex.vuejs.org/')") vuex
    |
    v-ons-row
      v-ons-col
        v-ons-card(@click="goTo('http://vue-loader.vuejs.org/')") vue-loader
      |
      v-ons-col
        v-ons-card(@click="goTo('https://github.com/vuejs/awesome-vue')") awesome-vue

</template>

<script>
export default {
  data() {
    return {
      essentialLinks: [
        {
          label: "Core Docs",
          link: "https://vuejs.org",
          icon: "fa-book"
        },
        {
          label: "Community Chat",
          link: "https://chat.vuejs.org",
          icon: "fa-commenting"
        },
        {
          label: "Forum",
          link: "https://forum.vuejs.org",
          icon: "fa-comments"
        },
        {
          label: "Twitter",
          link: "https://twitter.com/vuejs",
          icon: "fa-twitter"
        },
        {
          label: "Docs for this template",
          link: "http://vuejs-templates.github.io/webpack/",
          icon: "fa-file-text"
        }
      ]
    };
  },
  methods: {
    goTo(url) {
      const newWindow = window.open(url, "_blank");
      newWindow.opener = null;
      newWindow.location = url;
    }
  },
  components: { FullCalendar: require("vue-fullcalendar") }
};
</script>

<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title {
  text-transform: none;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item,
ons-card {
  cursor: pointer;
}
</style>
