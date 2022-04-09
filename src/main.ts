import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import store from './store';
import 'amfe-flexible';

console.log(import.meta.env);

createApp(App).use(router).use(store).mount('#app');
