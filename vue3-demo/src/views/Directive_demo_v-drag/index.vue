<script setup lang="ts">
import MoveBox from "./MoveBox.vue";
import type { Directive, DirectiveBinding } from "vue";
const vDrag: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
  const { indicator } = binding.modifiers;
  let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement;
  const mouseDown = (e: MouseEvent) => {
    indicator && addPointerIndicator();
    let x = e.clientX - el.offsetLeft;
    let y = e.clientY - el.offsetTop;
    const move = (e: MouseEvent) => {
      indicator && updatePointerIndicator(e);
      el.style.left = e.clientX - x + "px";
      el.style.top = e.clientY - y + "px";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };
  moveElement.addEventListener("mousedown", mouseDown);
};
const addPointerIndicator = () => {
  const pointer: HTMLDivElement = document.querySelector(".pointer") || document.createElement("div");
  pointer.classList.add("box", "pointer");
  document.body.appendChild(pointer);
};
const updatePointerIndicator = (e: MouseEvent) => {
  const pointer: HTMLDivElement = document.querySelector(".pointer") || document.createElement("div");
  pointer.style.left = e.clientX + "px";
  pointer.style.top = e.clientY + "px";
};
</script>
<template>
  <div class="h-full bg-gray-200">
    <MoveBox v-drag.indicator></MoveBox>
  </div>
</template>
