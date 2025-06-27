import { createWebHistory, createRouter } from 'vue-router';

import AboutPage from '@/pages/AboutPage/AboutPage.vue';
import MainPage from '@/pages/MainPage/MainPage.vue';
import PostsPage from '@/pages/PostsPage/PostsPage.vue';

const routes = [
    { path: '/', component: MainPage },
    { path: '/posts', component: PostsPage },
    { path: '/about', component: AboutPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
