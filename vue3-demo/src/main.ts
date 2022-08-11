import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

import card from "@/components/GlobalComponents/Card.vue"
app.component('cus-card', card)

app.mount("#app");
