<script setup lang="ts">
import { useCounterStore } from '@/app/stores/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment, decrement, reset } = counterStore;
</script>

<template>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
        <p>Count: {{ count }}</p>
    </div>
</template>
