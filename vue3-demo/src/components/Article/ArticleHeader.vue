<template>
  <div>
    <h2 class="font-bold text-black-700">
      <slot name="title" :data="obj"></slot>
    </h2>
    <h3 class="text-sm text-black-700">
      <slot name="subtitle"></slot>
    </h3>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const obj = {
  site: 'www.example.com',
  email: 'jay@123.com',
  phone: '1312132134'
}
</script>