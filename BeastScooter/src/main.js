import './assets/main.css'

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router'
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';

createApp(App)
.use(router)
.use(ToastService)
.use(PrimeVue)
.component('Toast', Toast)
.mount('#app')