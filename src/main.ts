import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/app/App.vue';
import '@/app/styles/style.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
