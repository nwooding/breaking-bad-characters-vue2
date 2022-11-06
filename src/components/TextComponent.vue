<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
<template>
    <div class="breaking-bad">{{ label }}</div>
</template>
<style lang="sass">
  $breaking-bad-color: #487F5A
  .breaking-bad
    color: $breaking-bad-color

</style>