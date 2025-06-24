<script setup lang="ts">
import styles from './postForm.module.scss';

import type { Post } from '@/app/stores/post-store';

const title = ref('');
const body = ref('');

const emit = defineEmits<{
    (e: 'add', post: Post): void;
}>();

function submit() {
    if (!title.value || !body.value) return;
    emit('add', {
        id: Date.now(),
        title: title.value,
        body: body.value,
    });

    title.value = '';
    body.value = '';
}
</script>

<template>
    <div :class="styles.form">
        <input v-model="title" type="text" placeholder="title" />
        <input v-model="body" type="text" placeholder="body" />
        <button @click="submit">Add post</button>
    </div>
</template>
