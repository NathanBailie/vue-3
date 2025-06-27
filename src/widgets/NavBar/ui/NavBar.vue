<script setup lang="ts">
import styles from './navBar.module.scss';

const route = useRoute();
</script>

<template>
    <nav :class="styles.navBar">
        <RouterLink
            v-for="link in [
                { label: 'Main', path: '/' },
                { label: 'Posts', path: '/posts' },
                { label: 'About', path: '/about' },
            ]"
            :key="link.label"
            :to="link.path"
            :class="[
                styles.navBar_link,
                { [styles.active]: route.path === link.path },
            ]"
        >
            {{ link.label }}
        </RouterLink>
    </nav>
</template>
