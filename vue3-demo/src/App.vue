<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import Layout from "./layout/index.vue"

const hide = ref<boolean>(true)
</script>

<template>
  <Layout />
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" v-if="hide" />
      <button @click="hide = !hide">Hide Toggle : {{ hide }}</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView /> -->
</template>

