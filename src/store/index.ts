import { getCharacter, listCharacters } from "@/api/characters";
import type CharacterDto from "@/api/characters/models/CharacterDto";
import { listQuotesForCharacter } from "@/api/quotes";
import type { QuoteDto } from "@/api/quotes/models/QuoteDto";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface RootState {
  message: string;
  characters: {
    items: CharacterDto[];
    isLoaded: boolean;
  }
  characterDetail: {
    character?: CharacterDto;
    quotes: QuoteDto[];
    isLoaded: boolean;
  }
  favouriteCharacters: number[],
}

const state: RootState = {
  message: "Basic message",
  characters: {
    items: [],
    isLoaded: false
  },
  characterDetail: {
    character: undefined,
    quotes: [],
    isLoaded: false,
  },
  favouriteCharacters: []
};

export const store = new Vuex.Store({
  state,
  mutations: {
    setCharacters (state, payload) {
      state.characters.items = payload;
      state.characters.isLoaded = true;
    },
    setCharacter (state, payload) {
      state.characterDetail = payload;
    },
    setFavourite (state, payload) {
      
    }
  },
  actions: {
    listCharactersAction (context) {
      listCharacters().then((response) => {      
        if(response.status === 200){
          context.commit("setCharacters", response.data)
        }}

      )
    },
    getCharacterDetailsAction (context, payload) {
      const character = context.state.characters.items.find((c) => c.char_id.toString() == payload.toString());
      if(!character){
        getCharacter(payload.toString()).then((charResponse) => {
          listQuotesForCharacter(charResponse.data[0].name).then((quotesResponse) => {
            context.commit("setCharacter", {character: charResponse.data[0], quotes: quotesResponse.data, isLoaded: true})
          });
        }) 
      } else {
        listQuotesForCharacter(character.name).then((response) => {
          context.commit("setCharacter", {character, quotes: response.data, isLoaded: true})
        });
      }
    },
    unloadCharacterDetailsAction (context) {
      context.commit("setCharacter", {isLoaded: false})
    },
  },
  modules: {},
});