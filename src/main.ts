import { createApp } from "vue"
import { createPinia } from "pinia"
import router from "./router"
import "./style.css"
import App from "./App.vue"
import "lib-flexible" // rem适配

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app")
