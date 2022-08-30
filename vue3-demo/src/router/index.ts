import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { desc: 'Home' }
    },

    {
      path: "/globalComponent",
      name: "globalComponent",
      meta: { desc: 'Global Component' },

      component: () => import("../views/GlobalComps/index.vue"),
    },
    {
      path: "/article",
      name: "article",
      meta: { desc: 'Article' },

      component: () => import("../views/Article/index.vue"),
    },
    {
      path: "/propandemit",
      name: "propandemit",
      meta: { desc: 'Props and Emits' },

      component: () => import("../views/PropsEmits/index.vue"),
    },
    {
      path: "/slotscope",
      name: "slotscope",
      meta: { desc: 'Slot Scope' },

      component: () => import("../views/SlotScope/index.vue"),
    },
    {
      path: "/noneProps",
      name: "noneProps",
      meta: { desc: 'None Props' },

      component: () => import("../views/NoneProps/index.vue"),
    },
    {
      path: "/dynamicslot",
      name: "dynamicslot",
      meta: { desc: 'Dynamic Slot' },

      component: () => import("../views/DynamicSlot/index.vue"),
    },
    {
      path: "/asyncgallery",
      name: "asyncgallery",
      meta: { desc: 'Async Component' },

      component: () => import("../views/AsyncComponent/index.vue"),
    },
    {
      path: "/keepalive",
      name: "keepalive",
      meta: { desc: 'Keep Alive' },

      component: () => import("../views/KeepAlive/index.vue"),
    },
    {
      path: "/teleport",
      name: "teleport",
      meta: { desc: 'Teleport' },

      component: () => import("../views/Teleport/index.vue"),
    },
    {
      path: "/transition",
      name: "transition",
      meta: { desc: 'Transition' },

      component: () => import("../views/Transition/index.vue"),
    },
    {
      path: "/eventNested",
      name: "eventNested",
      meta: { desc: 'EventNested' },

      component: () => import("../views/EventNestedComps/index.vue"),
    },

  ],
});

export default router;
