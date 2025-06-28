<script setup lang="ts">
import styles from './postListHeader.module.scss';

import { usePostStore } from '@/app/stores/post-store';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

const postStore = usePostStore();

function openModal() {
    postStore.toggleModal(true);
}

const { state: searchValue, debounced: debouncedSearch } = useDebounce('', 500);

watch(debouncedSearch, val => {
    postStore.searchQuery = val;
});

const sortField = computed({
    get: () => postStore.sortField,
    set: val => postStore.setSortField(val),
});
</script>

<template>
    <div :class="styles.postListHeader">
        <InputUi v-model="searchValue" placeholder="search by post title..." />

        <div :class="styles.createBrn">
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
    </div>
</template>
