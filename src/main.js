import { createApp } from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/App";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
