<script setup lang="ts">
import styles from './buttonUi.module.scss';

const props = defineProps<{
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    width?: string;
}>();
</script>

<template>
    <button
        :type="type || 'button'"
        :class="[styles.buttonUi, className]"
        :style="{ width: props.width || '' }"
    >
        <slot />
    </button>
</template>
