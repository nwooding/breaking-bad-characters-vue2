<script setup lang="ts">
import { store } from '@/store';
import { computed, onMounted, onUnmounted } from 'vue';
import router from '../router';
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
<div class="profile-container">
  <div class="image-area">
            <img :src="character.character?.img" :alt="character.character?.name" class="character-image"/>
    </div>
    <div class="attributes-area">
      <h2 class="profile-header">{{character.character?.name}}</h2>
      <h3 class="profile-subheader">a.k.a. {{character.character?.nickname}}</h3>
      <ul class="attribute-list">
        <li><span class="bold">Birthday: </span>{{character.character?.birthday}}</li>
        <li><span class="bold">Occupations: </span>{{character.character?.occupation.join(",")}}</li>
        <li><span class="bold">Status: </span>{{character.character?.status}}</li>
      </ul>
      <md-button class="md-accent md-raised review-button" @click="router.push(`/characters/${characterId}/review`)">Leave review</md-button>

        </div>
      <div class="quotes-area">
        <h2 class="profile-header">Classic Quotes</h2>
        <ul class="attribute-list">
        <li v-for="quote in character.quotes">{{quote.quote}}</li>
      </ul>
        </div>
    </div>
    </div>
    <md-progress-spinner v-else md-mode="indeterminate"></md-progress-spinner>
</template>

<style lang="sass">
@import "../assets/variables"
.profile-container
  display: grid
  grid-template-areas: "image attributes" "quotes quotes"
  grid-template-columns: 1fr 1fr
  margin-left: 5%
  margin-right: 5%
.character-image
  width:100%
  display: block
.image-area
  area: image
.quotes-area
  area: quotes
.bold
  font-weight:800
.attribute-list
  list-style-type: none
  li
    margin-bottom: 8px
.profile-header
  margin-left: 38px
  margin-bottom: 12px
  font-weight: 800
  color: $accent
.profile-subheader
  margin-left: 38px
  margin-bottom: 12px
  font-style: italic
.review-button
  margin-left: 38px !important
@media (min-width: 1200px)
  .profile-container
    display: grid
    grid-template-areas: "image attributes quotes"
    grid-template-columns: 1fr 1fr 2fr
</style>
  