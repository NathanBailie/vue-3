import { jsonApi } from '@/shared/const/api';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type sortFieldType = 'title' | 'body' | '';

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [] as Post[],
        isModalOpen: false,
        arePostsLoading: false,
        sortField: '' as sortFieldType,
        searchQuery: '' as string,
        page: 1,
        limit: 10,
        totalPages: 0,
    }),
    actions: {
        addPost(post: Post) {
            this.posts.push(post);
        },
        removePost(id: number) {
            this.posts = this.posts.filter(post => post.id !== id);
        },
        toggleModal(value: boolean) {
            this.isModalOpen = value;
        },
        async fetchPosts() {
            try {
                this.arePostsLoading = true;

                const response = await axios.get(jsonApi, {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    },
                });

                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / 10,
                );

                this.posts = response.data;
            } catch (error) {
                console.log('Error: ', error);
            } finally {
                this.arePostsLoading = false;
            }
        },
        setSortField(value: sortFieldType) {
            this.sortField = value;
        },
        setPage(value: number) {
            this.page = value;
        },
    },
});
