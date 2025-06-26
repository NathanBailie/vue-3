<script setup lang="ts">
import styles from './postList.module.scss';
import './postListTtansitions.scss';

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

onMounted(() => {
    postStore.fetchPosts();
});

const sortField = computed({
    get: () => postStore.sortField,
    set: val => postStore.setSortField(val),
});

const sortedPosts = computed(() => {
    if (!sortField.value) return postStore.posts;

    return [...postStore.posts].sort((a, b) =>
        a[sortField.value].localeCompare(b[sortField.value]),
    );
});
</script>

<template>
    <div :class="styles.postList">
        <h1 :class="styles.postList_title">Post page</h1>

        <div :class="styles.postList_createBrn">
            <ButtonUi @click="openModal">Create post</ButtonUi>
            <SelectUi
                v-model="sortField"
                :options="[
                    { value: 'title', label: 'title' },
                    { value: 'body', label: 'body' },
                ]"
                placeholder="Sort by..."
            />
        </div>

        <p :class="styles.postList_loadingMsg" v-if="postStore.arePostsLoading">
            Loading...
        </p>

        <h2
            :class="styles.postList_subtitle"
            v-else-if="sortedPosts.length > 0"
        >
            Post list
        </h2>

        <p v-else :class="styles.postList_message">There are no posts</p>

        <TransitionGroup name="post-list">
            <PostItem
                v-for="post in sortedPosts"
                :key="post.id"
                :post="post"
                @remove="emit('remove', $event)"
            />
        </TransitionGroup>
    </div>
</template>
