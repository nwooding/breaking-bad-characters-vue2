<script setup lang="ts">
import router from "@/router";
import { store } from "@/store";
import { computed, onMounted } from "vue";

let characters = computed(() => store.state.characters);

onMounted(() => {
  if (!characters.value.isLoaded) {
    store.dispatch("listCharactersAction");
  }
})

</script>

<template>
  <div>
    <div v-for="character in characters.items">
      <a @click="router.push(`/character/${character.char_id}`)">{{ character.name }}</a>
    </div>
  </div>
</template>
