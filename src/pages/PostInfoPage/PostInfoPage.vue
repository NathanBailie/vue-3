<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import styles from './postInfoPage.module.scss';

const route = useRoute();
const router = useRouter();

function goBack() {
    router.push('/posts');
}
</script>

<template>
    <div :class="styles.postInfoPage">
        <ButtonUi @click="goBack" width="90px">Back</ButtonUi>
        <h2>Post info – {{ route.params.id }}</h2>
    </div>
</template>
