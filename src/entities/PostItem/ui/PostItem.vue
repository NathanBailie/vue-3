<script setup lang="ts">
import styles from './postItem.module.scss';

import type { Post } from '@/app/stores/post-store';

defineProps<{ post: Post }>();
</script>

<template>
    <div :class="styles.post">
        <p><span>Post title:</span> {{ post.title }}</p>
        <p><span>Post description:</span> {{ post.body }}</p>
    </div>
</template>
