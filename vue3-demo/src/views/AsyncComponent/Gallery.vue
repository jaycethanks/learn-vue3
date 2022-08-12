

<script setup lang="ts">
import { ref } from "vue"
let url = ref('')
let list: any = ref([])

for (let i = 0; i < 10; i++) {
  fetch('https://picsum.photos/150').then(res => {
    list.value.push = res.url
  })
}
console.log(list.value)

//TODO:DSSD
//FIXME:asd


</script>

<template>
  <div class="w-32 h-32 border rounded-lg overflow-hidden shadow-lg ">
    <img :src="url" alt="">
  </div>
</template>

