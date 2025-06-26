<script setup lang="ts">
import styles from './selectUi.module.scss';

defineProps<{
    modelValue: string;
    options: { value: string; label: string }[];
    placeholder?: string;
    className?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

function onChange(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    emit('update:modelValue', value);
}
</script>

<template>
    <select
        :value="modelValue"
        @change="onChange"
        :class="[styles.select, className]"
    >
        <option disabled value="">
            {{ placeholder || 'Choose sorting' }}
        </option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.label }}
        </option>
    </select>
</template>
