<script setup lang="ts">
import styles from './postListFooter.module.scss';

import { usePostStore } from '@/app/stores/post-store';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';

const postStore = usePostStore();
const observerRef = useTemplateRef('observer');

onMounted(() => {
    watch(
        () => postStore.totalPages,
        total => {
            if (total > 0 && observerRef.value) {
                useInfiniteScroll(
                    observerRef,
                    postStore.loadMorePosts,
                    postStore.page,
                    postStore.totalPages,
                );
            }
        },
        { immediate: true },
    );
});

const currentPage = computed({
    get: () => postStore.page,
    set: val => {
        postStore.setPage(val);
    },
});
</script>

<template>
    <div :class="styles.postListFooter">
        <div ref="observer" :class="styles.observer"></div>

        <PaginationUi
            v-model="currentPage"
            :totalPages="postStore.totalPages"
            v-if="postStore.posts.length > 0"
        />
    </div>
</template>
