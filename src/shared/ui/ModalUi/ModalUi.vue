<script setup lang="ts">
import styles from './modalUi.module.scss';

defineProps<{
    flag: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:flag', value: boolean): void;
}>();

function onCLose() {
    emit('update:flag', false);
}
</script>
<template>
    <div :class="styles.overlay" @click.self="onCLose" v-if="flag">
        <div :class="styles.modal">
            <slot />
        </div>
    </div>
</template>
