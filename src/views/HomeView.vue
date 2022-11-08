<script setup lang="ts">
import CharacterList from "../components/CharacterList.vue";
import { store } from "@/store";
import { computed, onMounted } from "vue";

let characters = computed(() => store.state.characters);
let favourites = computed(() => store.state.favouriteCharacters);
onMounted(() => {
  if (!characters.value.isLoaded) {
    store.dispatch("listCharactersAction");
  }
  store.dispatch("loadFavouritesAction");
})
const setFavourites = (favourites: string[]) => {
  store.dispatch("saveFavouritesAction", favourites)
}
</script>

<template>
  <main>
    <h1 class="home-title">The Characters</h1>
    <CharacterList :characters="characters" :favourites="favourites" @setFavourites="(items) => setFavourites(items)"/>
  </main>
</template>

<style lang="sass">
@import "../assets/variables"
.home-title
  font-family: Roboto Slab
  margin-left: 38px
  margin-bottom: 12px
  font-weight: 800
  color: $accent
</style>