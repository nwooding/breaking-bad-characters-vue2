<script setup lang="ts">
import CharacterDetail from '@/components/CharacterDetail.vue';
</script>
<template>
    <CharacterDetail :character-id='$route.params.id' />
</template>
  