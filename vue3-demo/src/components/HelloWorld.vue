<script setup lang="ts">
import { watch, reactive } from "vue"
let name = reactive({
  inner: {
    fname: '',
    deepinner: {
      lname: ''
    }
  }
})
watch(name.inner, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})


</script>

<template>
  <form action="#">
    <div>
      <label for="fname">First Name:</label>
      <input v-model="name.inner.fname" type="text" name="fname">
    </div>
    <div>
      <label for="lname">Last Name:</label>
      <input v-model="name.inner.deepinner.lname" type="text" name="lname">
    </div>
  </form>
</template>