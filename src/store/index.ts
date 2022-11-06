import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface RootState {
  message: string;
}

const state: RootState = {
  message: "Basic message",
};

export const store = new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});