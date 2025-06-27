<script setup lang="ts">
import styles from './postPage.module.scss';

import type { Post } from '@/app/stores/post-store';

import { usePostStore } from '@/app/stores/post-store';

const postStore = usePostStore();

function handleAdd(post: Post) {
    postStore.addPost(post);
    postStore.toggleModal(false);
}

function handleRemove(id: number) {
    postStore.removePost(id);
}
</script>

<template>
    <div :class="styles.postPage">
        <ModalUi v-model:flag="postStore.isModalOpen">
            <PostForm @add="handleAdd" />
        </ModalUi>
        <PostList :posts="postStore.posts" @remove="handleRemove" />
    </div>
</template>
