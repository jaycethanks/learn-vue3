<script lang="ts" setup>
  import comp from "./";
  console.log('[comp]: ',comp)
</script>
<template>
<comp :user="{name:'jay',age:18}"/>
</template>