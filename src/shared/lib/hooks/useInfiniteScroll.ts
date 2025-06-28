export function useInfiniteScroll(
    targetRef: Ref<HTMLElement | null>,
    fetcher: () => void,
    currentPage: number,
    totalPage: number,
) {
    const options = {
        rootMargin: '5px',
        threshold: 0.5,
    };

    const callback = (
        entries: IntersectionObserverEntry[],
        _: IntersectionObserver,
    ) => {
        if (entries[0].isIntersecting && currentPage < totalPage) {
            fetcher();
        }
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.value) {
        observer.observe(targetRef.value);
    }
}
