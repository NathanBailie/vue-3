<script setup lang="ts">
import type { Post } from '@/app/stores/post-store';

import { usePostStore } from '@/app/stores/post-store';

const postStore = usePostStore();

function handleAdd(post: Post) {
    postStore.addPost(post);
}

function handleRemove(id: number) {
    postStore.removePost(id);
}
</script>

<template>
    <div class="app">
        <PostForm @add="handleAdd" />
        <PostList :posts="postStore.posts" @remove="handleRemove" />
    </div>
</template>
