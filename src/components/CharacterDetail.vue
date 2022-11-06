<script setup lang="ts">
import { store } from '@/store';
import { computed, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
  characterId: string
}>();

let character = computed(() => store.state.characterDetail);

onMounted(() => {
    store.dispatch("getCharacterDetailsAction", props.characterId);
})
onUnmounted(() => {
    store.dispatch("unloadCharacterDetailsAction");
})
</script>

<template>
    <div v-if="character.isLoaded">
        <img :src="character.character?.img" :alt="character.character?.name"/>
      This is character {{character.character?.name}}
      <div v-for="quote in character.quotes">{{quote.quote}}</div>
    </div>
    <div v-else>
        Loading {{characterId}}
    </div>
</template>
  