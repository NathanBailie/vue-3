<script setup lang="ts">
import styles from './postList.module.scss';

import type { Post } from '@/app/stores/post-store';

defineProps<{
    posts: Post[];
}>();
</script>

<template>
    <div :class="styles.postList">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>
