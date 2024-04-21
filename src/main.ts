import { createApp, reactive, provide  } from 'vue'
import { createPinia } from 'pinia'
import "./assets/index.css"

import App from './App.vue'
import router from './router'

import {  library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 


library.add(fas)
const app = createApp(App)

const globalState = reactive({
    isModalOpen: false,
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  });

app.use(createPinia())
app.use(router)
app.provide('globalState', globalState);
app.mount('#app')

app.component('fa',FontAwesomeIcon)