import { listCharacters } from "@/api/characters";
import type CharacterDto from "@/api/characters/models/CharacterDto";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface RootState {
  message: string;
  characters: CharacterDto[]
}

const state: RootState = {
  message: "Basic message",
  characters: []
};

export const store = new Vuex.Store({
  state,
  mutations: {
    setCharacters (state, payload) {
      state.characters = payload
    }
  },
  actions: {
    listCharactersAction (context) {
      listCharacters().then((response) => context.commit("setCharacters", response.data))
    }
  },
  modules: {},
});