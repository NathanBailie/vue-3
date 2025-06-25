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
        <h2 :class="styles.form_title">Post creating</h2>

        <div :class="styles.form_inputs">
            <InputUi v-model="title" placeholder="title" />
            <InputUi v-model="body" placeholder="description" />
        </div>

        <div :class="styles.form_button">
            <ButtonUi @click="submit">Add post</ButtonUi>
        </div>
    </div>
</template>
