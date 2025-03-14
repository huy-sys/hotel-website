import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'vue3-carousel/dist/carousel.css'
import vue3GoogleLogin from 'vue3-google-login'
import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPersist); // Sử dụng plugin để tự động lưu trạng thái
app.use(pinia);
app.use(router)
app.use(ElementPlus)
app.use(vue3GoogleLogin, {
  clientId: '1000000000000-00000000000000000000000000000000.apps.googleusercontent.com',
})
app.mount('#app')
