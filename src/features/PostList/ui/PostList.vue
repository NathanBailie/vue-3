<script setup lang="ts">
import styles from './postList.module.scss';

import type { Post } from '@/app/stores/post-store';

import { usePostStore } from '@/app/stores/post-store';

defineProps<{
    posts: Post[];
}>();

const emit = defineEmits<{
    (e: 'remove', id: number): void;
}>();

const postStore = usePostStore();

function openModal() {
    postStore.toggleModal(true);
}
</script>

<template>
    <div :class="styles.postList">
        <h1 :class="styles.postList_title">Post page</h1>
        <div :class="styles.postList_createBrn">
            <ButtonUi @click="openModal">Create post</ButtonUi>
        </div>

        <h2 :class="styles.postList_subtitle" v-if="posts.length > 0">
            Post list
        </h2>

        <PostItem
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="emit('remove', $event)"
        />

        <p v-if="posts.length === 0" :class="styles.postList_message">
            There are no posts
        </p>
    </div>
</template>
