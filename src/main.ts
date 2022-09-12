import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css\
import axios from "axios";

createApp(App).use(vue3videoPlay).use(ElementPlus).mount("#app");
axios.defaults.baseURL = "https://netease-cloud-music-api-smoky-one.vercel.app";
