import Vue from "vue";
import { store } from "./store"
import App from "./App.vue";
import router from "./router";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueMaterial)
Vue.use(VueToast)

import "./assets/main.css";
import "./assets/theme.sass"

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
