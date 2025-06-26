<script setup lang="ts">
import styles from './paginationUi.module.scss';

const props = defineProps<{
    totalPages: number;
    modelValue: number;
    className?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', page: number): void;
}>();

function selectPage(page: number) {
    if (page !== props.modelValue) {
        emit('update:modelValue', page);
    }
}
</script>

<template>
    <div :class="[styles.pagination, props.className]">
        <button
            v-for="page in props.totalPages"
            :key="page"
            :class="[
                styles.pagination_button,
                {
                    [styles.pagination_button_active]:
                        page === props.modelValue,
                },
            ]"
            @click="selectPage(page)"
        >
            {{ page }}
        </button>
    </div>
</template>
