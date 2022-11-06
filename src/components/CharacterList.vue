<script setup lang="ts">
import { store } from "@/store";
import { computed, onMounted } from "vue";
import CharacterListItem from "./CharacterListItem.vue";

let characters = computed(() => store.state.characters);

onMounted(() => {
  if (!characters.value.isLoaded) {
    store.dispatch("listCharactersAction");
  }
})

</script>

<template>
  <div>
    <div v-if="characters.isLoaded" v-for="character in characters.items">
      <CharacterListItem :character="character"/>
    </div>
    <md-progress-spinner v-else md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>
