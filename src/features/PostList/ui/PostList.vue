<script setup lang="ts">
import styles from './postList.module.scss';
</script>

<template>
    <div :class="styles.postList">
        <PostListHeader />
        <PostListMain />
        <PostListFooter />
    </div>
</template>
