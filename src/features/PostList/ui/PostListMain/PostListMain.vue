<script setup lang="ts">
import styles from './postListMain.module.scss';
import './postListTransitions.scss';

import { usePostStore } from '@/app/stores/post-store';

const postStore = usePostStore();

const sortField = computed({
    get: () => postStore.sortField,
    set: val => postStore.setSortField(val),
});

const sortedPosts = computed(() => {
    let filtered = postStore.posts.filter(post =>
        post.title.toLowerCase().includes(postStore.searchQuery.toLowerCase()),
    );

    if (sortField.value) {
        filtered = [...filtered].sort((a, b) =>
            a[sortField.value].localeCompare(b[sortField.value]),
        );
    }

    return filtered;
});

onMounted(() => {
    if (postStore.posts.length === 0) {
        postStore.fetchPosts();
    }
});
</script>

<template>
    <div :class="styles.postListMain">
        <p :class="styles.loadingMsg" v-if="postStore.arePostsLoading">
            Loading...
        </p>

        <h2 :class="styles.subtitle" v-else-if="sortedPosts.length > 0">
            Post list
        </h2>

        <p v-else :class="styles.message">There are no posts</p>

        <TransitionGroup name="post-list">
            <PostItem
                v-for="post in sortedPosts"
                :key="post.id"
                :post="post"
                @remove="postStore.removePost"
            />
        </TransitionGroup>
    </div>
</template>
