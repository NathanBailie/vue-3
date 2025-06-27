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
const observerRef = useTemplateRef('observer');

function openModal() {
    postStore.toggleModal(true);
}

onMounted(() => {
    postStore.fetchPosts();

    const options = {
        rootMargin: '5px',
        threshold: 0.5,
    };

    const callback = (
        entries: IntersectionObserverEntry[],
        _: IntersectionObserver,
    ) => {
        if (
            entries[0].isIntersecting &&
            postStore.page < postStore.totalPages
        ) {
            postStore.loadMorePosts();
        }
    };

    const observer = new IntersectionObserver(callback, options);
    if (observerRef.value) {
        observer.observe(observerRef.value);
    }
});

const sortField = computed({
    get: () => postStore.sortField,
    set: val => postStore.setSortField(val),
});

const currentPage = computed({
    get: () => postStore.page,
    set: val => {
        postStore.setPage(val);
        postStore.fetchPosts();
    },
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
</script>

<template>
    <div :class="styles.postList">
        <h1 :class="styles.postList_title">Post page</h1>
        <InputUi
            v-model="postStore.searchQuery"
            placeholder="search by post title..."
        />

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

        <div ref="observer" :class="styles.postList_observer"></div>

        <PaginationUi
            v-model="currentPage"
            :totalPages="postStore.totalPages"
        />
    </div>
</template>
