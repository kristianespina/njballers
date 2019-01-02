import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome,faFileWord } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faFileWord)
library.add(fab)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
