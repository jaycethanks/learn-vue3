<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav
      class="w-full text-xs flex gap-3 mx-5 my-3 underline underline-offset-2"
    >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/globalComponent">Global Component</RouterLink>
      <RouterLink to="/article">Article</RouterLink>
      <RouterLink to="/propandemit">Props and Emits</RouterLink>
      <RouterLink to="/slotscope">Slot Scope</RouterLink>
      <RouterLink to="/noneProps">None Props</RouterLink>
      <RouterLink to="/dynamicslot">Dynamic Slot</RouterLink>
      <RouterLink to="/asyncgallery">Async Component</RouterLink>
      <RouterLink to="/teleport">Teleport</RouterLink>
      <RouterLink to="/transition">Transition</RouterLink>
    </nav>
    <hr />
    <RouterView></RouterView>
  </div>
</template>
