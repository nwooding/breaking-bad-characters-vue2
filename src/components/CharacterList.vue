<script setup lang="ts">
import type CharacterDto from '@/api/characters/models/CharacterDto';
import { computed} from 'vue';
import CharacterListItem from "./CharacterListItem.vue";
const props = defineProps<{
  characters: {
    items: CharacterDto[],
    isLoaded: boolean
  },
  favourites: string[]
}>();

const isAFavorite = computed(() =>(char_id: string) => {
  return props.favourites.some((f) => f === char_id)
});

const emit = defineEmits<{
  (event: 'setFavourites', favourites: string[]) : void;
}>()

const updateFavourites = (id: number) => {
  let updatedFavourites: string[] = [];

  if (props.favourites.some((f) => f === id.toString())) {
       updatedFavourites = props.favourites.filter((f) => f !== id.toString())
  } else {
       updatedFavourites = [...props.favourites, id.toString()]
  }
  return updatedFavourites;
}
</script>

<template>
  <div>
    <div v-if="characters.isLoaded" v-for="character in characters.items">
      <CharacterListItem 
        :character="character" 
        :is-favourite="isAFavorite(character.char_id.toString())" 
        @toggleFavourite="(id) => $emit('setFavourites', updateFavourites(id))"/>
    </div>
    <md-progress-spinner v-else md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>
