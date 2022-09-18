import { createApp } from 'vue'
import axios from 'axios'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import App from './App.vue'
import 'vue3-video-play/dist/style.css' // 引入css\
import 'element-plus/dist/index.css'

createApp(App).use(vue3videoPlay).mount('#app')

axios.defaults.baseURL = 'https://api-netease-music.dustella.net'
