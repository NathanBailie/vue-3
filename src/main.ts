import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/app/styles/style.scss';

import App from '@/app/App.vue';
import { router } from '@/app/router/router.ts';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
