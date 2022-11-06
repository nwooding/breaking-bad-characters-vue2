<script setup lang="ts">
import type CharacterDto from "@/api/characters/models/CharacterDto";
import CharacterAvatar from "./CharacterAvatar.vue";
const props = defineProps<{
    character: CharacterDto
}>();
</script>

<template>
    <div>
        <router-link :to="`/character/${character.char_id}`">
        <md-card md-with-hover class="md-with-hover">
            <md-card-header>
                <md-card-media>
                    <CharacterAvatar :char-name="character.name" :char-id="character.char_id"/>
                </md-card-media>
                <md-card-header-text class="character-name">
                    {{ character.name }}
                </md-card-header-text>
            </md-card-header>
        </md-card>
    </router-link>
    </div>
</template>

<style lang="sass">
    .character-name
        font-family: Roboto Slab
        font-size: 1.5em
</style>