<template lang="pug">
  v-ons-page
    p.intro something here
    v-ons-card
      div.title Title here
      div.content desc here
</template>
<script>
import Calendar from "./Calendar/Calendar";

export default {
  components: { Calendar }
};
</script>
