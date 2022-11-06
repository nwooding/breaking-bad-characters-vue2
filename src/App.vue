<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="app">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!"/>

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style lang="sass">
@import "vue-material/dist/theme/engine" 

@include md-register-theme("default", (primary: md-get-palette-color(blue, A200), accent: md-get-palette-color(red, A200) ))

@import "vue-material/dist/theme/all" 
</style>
