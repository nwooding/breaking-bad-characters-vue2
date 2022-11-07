<script setup lang="ts">
import { postCharacterReview } from '@/api/reviews';
import type CreateCharacterReviewRequestDto from '@/api/reviews/models/CreateCharacterReviewRequestDto';
import router from '../router';
import Vue from "vue"

const props = defineProps<{
  characterId: string
}>();
const formData: CreateCharacterReviewRequestDto = {
    char_id: props.characterId,
    name: '',
    date: '',
    review: '',
    rating: 0,
}
const submit = (e: Event) => {
    e.preventDefault();
    postCharacterReview(formData).then((response) => {
        if (response.status === 200) {
            Vue.$toast.open('Thanks for submitting your review')
        } 
    }).catch((error) => {
        Vue.$toast.open({message: 'Something went wrong while submitting your review', type: 'error'})
    })
}

</script>
<template>
    <div class="review-container">

        <div class="review-toolbar">
            <h2>Submit a review</h2><md-button  @click="router.push(`/characters/${characterId}`)"> &lt; Back </md-button>
        </div>
        <form class="md-layout review-form" @submit="submit">
            <md-field>
                <label>Name...</label>
                <md-input v-model="formData.name"></md-input>
            </md-field>
            <div>Date watched</div>
            <md-field>
                <md-input v-model="formData.date" type="date"></md-input>
            </md-field>
            <md-field>
                <label>Your Review</label>
                <md-textarea v-model="formData.review"></md-textarea>
            </md-field>
            <md-field>
                <label>Rating</label>
                <md-select v-model="formData.rating">
                    <md-option v-for="i in 10" :value="i" :key="i">{{i}}</md-option>
                </md-select>
            </md-field>
            <md-button type="submit" class="md-primary md-raised">Submit</md-button>
        </form>
    </div>
</template>

<style lang="sass">
@import "../assets/variables"
.review-form
    padding: 24px
    max-width: 700px
.review-toolbar
    padding: 12px 24px
    display: flex
    justify-content: space-between
</style>