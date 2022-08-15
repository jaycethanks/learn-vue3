<script setup lang="ts">
import Gallery from "./Gallery.vue";
import { defineAsyncComponent, ref } from "vue";
let show = ref(false);

// const Gallery = defineAsyncComponent(() => import("./Gallery.vue"));
</script>

<template>
  <div class="m-5 flex flex-wrap gap-4">
    <button @click="show = true">SHOW Gallery</button>
    <Gallery v-if="show" />
    <!-- <Suspense>
      <template #default>
        <Gallery />
      </template>
      <template #fallback>
        loading...
      </template>
    </Suspense> -->
  </div>
</template>

