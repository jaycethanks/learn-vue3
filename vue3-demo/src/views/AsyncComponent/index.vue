<script setup lang="ts">
// import Gallery from "./Gallery.vue"
import { defineAsyncComponent } from "vue";
/**
 * 
 */
const Gallery = defineAsyncComponent(() => import('./Gallery.vue'))
</script>

<template>
  <div class="m-5 flex flex-wrap gap-4">
    <Suspense>
      <template #default>
        <Gallery />
      </template>
      <template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
</template>

