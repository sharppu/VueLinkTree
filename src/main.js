import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Tree from "primevue/tree";
createApp(App).use(PrimeVue).component("Tree", Tree).mount("#app");
