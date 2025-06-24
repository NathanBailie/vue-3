<script setup lang="ts">
import styles from './buttonUi.module.scss';

defineProps<{
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}>();
</script>

<template>
    <button :type="type || 'button'" :class="[styles.buttonUi, className]">
        <slot />
    </button>
</template>
