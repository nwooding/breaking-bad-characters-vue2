import Vue from "vue";
import { store } from "./store"
import App from "./App.vue";
import router from "./router";

import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)

import "./assets/main.css";

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
