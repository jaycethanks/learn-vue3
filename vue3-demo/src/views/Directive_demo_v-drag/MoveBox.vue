<script setup lang="ts"></script>
<template>
  <div class="box w-48 h-48 border-2 border-black flex flex-col top-[25%] left-[25%] select-none">
    <div class="header h-6 bg-black text-white cursor-pointer">header</div>
    <div class="content flex justify-center items-center flex-1">content</div>
  </div>
</template>
<style>
.box {
  position: absolute;
}
.box::before {
  content: "";
  width: 1px;
  border-top: 1px dashed;
  left: -100vw;
  width: 200vw;
  top: -2px;
  position: absolute;
}
.box::after {
  content: "";
  width: 1px;
  border-right: 1px dashed;
  left: -2px;
  height: 200vh;
  top: -100vh;
  position: absolute;
}
.pointer::before {
  border-top: 1px dashed red;
}
.pointer::after {
  border-right: 1px dashed red;
}
</style>
