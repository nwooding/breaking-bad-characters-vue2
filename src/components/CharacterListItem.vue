<script setup lang="ts">
import type CharacterDto from "@/api/characters/models/CharacterDto";
import { computed } from "vue";
import CharacterAvatar from "./CharacterAvatar.vue";
const props = defineProps<{
    character: CharacterDto,
    isFavourite: boolean
}>();
let favouriteClass = computed(() => props.isFavourite ? 'faved' : 'not-faved');
const emit = defineEmits<{
  (event: 'toggleFavourite', id: number) : void;
}>()
</script>

<template>
    <div>
        <md-card >
            <md-card-header>
                <md-card-media>
                    <CharacterAvatar :char-name="character.name" :char-id="character.char_id" />
                </md-card-media>
                <md-card-header-text class="character-name">
                    <router-link :to="`/characters/${character.char_id}`">{{ character.name }}</router-link>

                </md-card-header-text>
                <a @click="$emit('toggleFavourite', character.char_id)">
                    <md-icon :class="favouriteClass">favorite</md-icon>
                </a>
            </md-card-header>

        </md-card>

    </div>
</template>

<style lang="sass">
@import "../assets/variables"
.character-name
    font-family: Roboto Slab
    font-size: 1.5em
.faved
    color: $accent !important
.not-faved
    color: #ccc !important
</style>