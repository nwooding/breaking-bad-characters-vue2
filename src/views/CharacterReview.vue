<script setup lang="ts">
import CharacterReview from '@/components/CharacterReview.vue';
</script>
<template>
    <CharacterReview :character-id='$route.params.id' />
</template>