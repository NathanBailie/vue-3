import { createWebHistory, createRouter } from 'vue-router';

import MainPage from '@/pages/MainPage/MainPage.vue';

const PostsPage = () => import('@/pages/PostsPage/PostsPage.vue');
const AboutPage = () => import('@/pages/AboutPage/AboutPage.vue');
const PostInfoPage = () => import('@/pages/PostInfoPage/PostInfoPage.vue');

const routes = [
    { path: '/', component: MainPage },
    { path: '/posts', component: PostsPage },
    { path: '/about', component: AboutPage },
    { path: '/posts/:id', component: PostInfoPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
