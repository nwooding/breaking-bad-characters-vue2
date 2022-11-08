<script setup lang="ts">
import CharacterDetail from '@/components/CharacterDetail.vue';
import { store } from '@/store';
import router  from '@/router'
import { computed, onMounted, onUnmounted } from 'vue';

let character = computed(() => store.state.characterDetail);

onMounted(() => {
    store.dispatch("getCharacterDetailsAction", router.currentRoute.params.id);
})
onUnmounted(() => {
    store.dispatch("unloadCharacterDetailsAction");
})
</script>
<template>
    <CharacterDetail :character='character' />
</template>
  