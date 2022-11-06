<script setup lang="ts">
import { store } from "@/store";
import { computed } from "vue";
let characters = computed(() => store.state.characters);
store.dispatch("listCharactersAction");
</script>

<template>
  <div class="greetings">
    <div v-for="character in characters">
      {{ character.name }}
    </div>
  </div>
</template>
