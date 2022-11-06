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
        <div class="avatar-initials">{{ getInitials(charName) }}</div>
    </div>
</template>

<style lang="sass">
@import "../assets/variables"
.avatar-frame 
    width: 70px
    height: 70px
    background-image: linear-gradient(145deg, $primary 0%, $accent 100%)
    display: flex
    align-items: center
    justify-content: center
.avatar-initials
    color: white
    font-size: 22px
    font-weight: 600
</style>