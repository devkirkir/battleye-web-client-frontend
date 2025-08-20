import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import components from "./core/components/ui";

const app = createApp(App);

for (const comp of components) {
  if (!comp.name) continue;

  app.component(comp.name, comp);
}

app.mount("#app");
