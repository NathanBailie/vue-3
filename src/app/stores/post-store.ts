import { jsonApi } from '@/shared/const/api';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [] as Post[],
        isModalOpen: false,
        arePostsLoading: false,
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
                const { data } = await axios.get<Post[]>(
                    `${jsonApi}?_limit=10`,
                );

                console.log(data);

                this.posts = data;
            } catch (error) {
                console.log('Error: ', error);
            } finally {
                this.arePostsLoading = false;
            }
        },
    },
});
