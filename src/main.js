import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import { router } from "./routes/index.js";
import VideoBackground from "vue-responsive-video-background-player";

const head = createHead();

createApp(App)
  .component("video-background", VideoBackground)
  .use(head)
  .use(router)
  .mount("#app");
