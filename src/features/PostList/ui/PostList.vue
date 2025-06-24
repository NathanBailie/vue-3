<script setup lang="ts">
import styles from './postList.module.scss';

import type { Post } from '@/app/stores/post-store';

defineProps<{
    posts: Post[];
}>();
</script>

<template>
    <div :class="styles.post" v-for="post in posts" :key="post.id">
        <p><span>Post title:</span> {{ post.title }}</p>
        <p><span>Post description:</span> {{ post.body }}</p>
    </div>
</template>
