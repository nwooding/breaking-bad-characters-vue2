import Vue from "vue";
import { store } from "./store"
import App from "./App.vue";
import router from "./router";

import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)

import "./assets/main.css";
import "./assets/theme.sass"

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
