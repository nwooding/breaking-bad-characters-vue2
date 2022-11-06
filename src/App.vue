<script setup lang="ts">
import router from './router';
import {ref} from "vue";

let menuVisible = ref(false);

const toggleMenu = () =>{
  menuVisible.value = !menuVisible.value
}
    
</script>

<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button hidden-desktop" @click="toggleMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <div class="title">Breaking Bad: The Characters App</div>
      </md-app-toolbar>
      <md-app-drawer md-permanent="clipped" :md-active.sync="menuVisible">
        <md-list>
          <md-list-item>
            <md-button class="md-accent" @click="router.push('/')">
              Characters >
            </md-button>
          </md-list-item>
          <md-list-item>
            <md-button class="md-accent" @click="router.push('/about')">
              About >
            </md-button>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="sass">
  #app
    height: 100vh
  .md-drawer
    width: 200px !important
  .md-app
    height: 100%
  .title
    font-size: 2em
    padding: 20px 20px
  .md-list-item
    .md-button
      font-size: 1.4em
  .hidden-desktop
    visibility: visible
  @media (min-width: 600px)
    .hidden-desktop
      visibility: hidden
</style>
