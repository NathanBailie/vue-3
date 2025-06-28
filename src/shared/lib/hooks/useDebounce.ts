import { ref, watch } from 'vue';

export function useDebounce<T>(initial: T, delay = 400) {
    const state = ref(initial);
    const debounced = ref(initial);

    let timeout: ReturnType<typeof setTimeout>;

    watch(state, newVal => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            debounced.value = newVal;
        }, delay);
    });

    return { state, debounced };
}
