import { defineStore } from 'pinia';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [
            { id: 1, title: 'Post 1', body: 'Post description 1' },
            { id: 2, title: 'Post 2', body: 'Post description 2' },
            { id: 3, title: 'Post 3', body: 'Post description 3' },
        ] as Post[],
    }),
    actions: {
        addPost(post: Post) {
            this.posts.push(post);
        },
        removePost(id: number) {
            this.posts = this.posts.filter(post => post.id !== id);
        },
    },
});
