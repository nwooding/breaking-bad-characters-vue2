<script setup lang="ts">
import stringUtilities from '@/utilities/stringUtilities';

const { getInitials } = stringUtilities;
const props = defineProps<{
    charName: string;
    charId: number;
}>();
</script>

<template>
    <div class="avatar-frame">
        <span class="avatar-initials">{{ getInitials(charName) }}</span>
    </div>
</template>

<style lang="sass">
@import "../assets/variables"
.avatar-frame 
    width: 70px
    height: 70px
    background-color: $primary
    justify-content: center
    text-align: center
    display: flex
.avatar-initials
    color: white
</style>