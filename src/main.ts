import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { vAnimatedPlaceholder } from "./directives/vAnimatedPlaceholder";

const app = createApp(App);

app.directive("animated-placeholder", vAnimatedPlaceholder);

app.mount("#app");
