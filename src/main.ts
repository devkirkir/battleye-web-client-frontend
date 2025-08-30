import "./style.css";

import { createApp } from "vue";

import App from "./App.vue";
import { vAnimatedPlaceholder } from "./directives/vAnimatedPlaceholder";
import router from "./router";

const app = createApp(App);

app.use(router);

app.directive("animated-placeholder", vAnimatedPlaceholder);

app.mount("#app");
