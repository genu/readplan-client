<template lang="pug">
  div.calendar
</template>
<script>
import moment from "moment";
import $ from "jquery";
import "fullcalendar";

export default {
  mounted() {
    $(this.$el).fullCalendar({
      weekends: true
    });
  }
};
</script>

<style lang="scss">
@import "../../../node_modules/fullcalendar/dist/fullcalendar.css";
</style>
