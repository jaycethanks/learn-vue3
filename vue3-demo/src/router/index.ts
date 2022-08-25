import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/globalComponent",
      name: "globalComponent",
      component: () => import("../views/GlobalComps/index.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: () => import("../views/Article/index.vue"),
    },
    {
      path: "/propandemit",
      name: "propandemit",
      component: () => import("../views/PropsEmits/index.vue"),
    },
    {
      path: "/slotscope",
      name: "slotscope",
      component: () => import("../views/SlotScope/index.vue"),
    },
    {
      path: "/noneProps",
      name: "noneProps",
      component: () => import("../views/NoneProps/index.vue"),
    },
    {
      path: "/dynamicslot",
      name: "dynamicslot",
      component: () => import("../views/DynamicSlot/index.vue"),
    },
    {
      path: "/asyncgallery",
      name: "asyncgallery",
      component: () => import("../views/AsyncComponent/index.vue"),
    },
    {
      path: "/teleport",
      name: "teleport",
      component: () => import("../views/Teleport/index.vue"),
    },
    {
      path: "/transition",
      name: "transition",
      component: () => import("../views/Transition/index.vue"),
    },
  ],
});

export default router;
