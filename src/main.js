// Imports
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";

// Styles
import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";

// Create and configure app
const app = createApp(App);

app.use(router);
app.use(Toast);

// Mount app to DOM
app.mount("#app");
