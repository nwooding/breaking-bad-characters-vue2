<script setup lang="ts">
import type CharacterDto from '@/api/characters/models/CharacterDto';
import type QuoteDto from '@/api/quotes/models/QuoteDto';
import router from '../router';
defineProps<{
  character: {
    character?: CharacterDto,
    isLoaded: boolean,
    quotes: QuoteDto[],
  }
}>();

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
      <md-button class="md-accent md-raised review-button" @click="router.push(`/characters/${character.character?.char_id}/review`)">Leave review</md-button>

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
  grid-area: image
.quotes-area
  grid-area: quotes
.attributes-area
  grid-area: attributes
.bold
  font-weight:800
.attribute-list
  list-style-type: none
  li
    margin-bottom: 8px
.profile-header
  font-family: Roboto Slab
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
  