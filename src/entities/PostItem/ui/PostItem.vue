<script setup lang="ts">
import styles from './postItem.module.scss';

import type { Post } from '@/app/stores/post-store';

const props = defineProps<{ post: Post }>();

const emit = defineEmits<{
    (e: 'remove', id: number): void;
}>();

function removePost() {
    emit('remove', props.post.id);
}

const router = useRouter();

function openPost() {
    router.push(`/posts/${props.post.id}`);
}
</script>

<template>
    <div :class="styles.postItem">
        <div :class="styles.post">
            <p><span>Post title:</span> {{ post.title }}</p>
            <p><span>Post description:</span> {{ post.body }}</p>
        </div>
        <div :class="styles.buttons">
            <ButtonUi :class="styles.deleteBtn" @click="openPost" width="75px"
                >Open</ButtonUi
            >
            <ButtonUi :class="styles.deleteBtn" @click="removePost" width="75px"
                >Delete</ButtonUi
            >
        </div>
    </div>
</template>
