<script setup lang="ts">
import styles from './inputUi.module.scss';

defineProps<{
    modelValue: string;
    placeholder?: string;
    className?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

function updateValue(e: Event) {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>

<template>
    <input
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        @input="updateValue"
        :class="[styles.inputUi, className]"
    />
</template>
