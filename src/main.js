import "font-awesome/css/font-awesome.css";
import "onsenui/css/onsenui-core.css";
import "onsenui/css/onsen-css-components.css";

import Vue from "vue";
import $ons from "vue-onsenui/esm";

// Plugins
import Dexie from "./plugins/dexie";

import * as VOns from "./vue-onsen-components";
import store from "./store";
import App from "./App";

let schema = {
  friends: "name, age",
  books: "++id, name, author, pages, scheduledEndDate"
};
Vue.config.productionTip = false;

Vue.use($ons);
Vue.use(Dexie, { db: "readplan", version: 2, schema });

Object.values(VOns).forEach(comp => Vue.component(comp.name, comp));

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
