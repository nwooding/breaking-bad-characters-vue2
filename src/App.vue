<script setup lang="ts">
import router from './router';
</script>

<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="title">Breaking Bad: The Characters App</div>
      </md-app-toolbar>
      <md-app-drawer md-permanent="clipped">
        <md-list>
          <md-list-item>
            <md-button class="md-accent" @click="router.push('/')">
              List of characters >
            </md-button>
          </md-list-item>
          <md-list-item>
            <md-button class="md-accent" @click="router.push('/about')">
              About this app >
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
</style>
