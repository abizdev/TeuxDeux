import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import draggable from "vuedraggable";

const app = createApp(App)

app.use(createPinia())
app.component('draggable', draggable)
app.mount('#app')
