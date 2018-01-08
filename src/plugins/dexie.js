import Dexie from "dexie";
import { get } from "lodash";

export default {
  install(Vue, options) {
    Vue.prototype.$dexie = new Dexie(options.db);
    Vue.prototype.$dexie.debug = true;

    // Build schema
    Vue.prototype.$dexie
      .version(get(options, "version", 1))
      .stores(get(options, "schema", {}));

    Vue.prototype.$dexie.open();
  }
};
