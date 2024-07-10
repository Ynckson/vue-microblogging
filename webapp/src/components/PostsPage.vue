<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">All Posts</h1>
    <PostForm @postCreated="fetchPosts" />
    <div v-for="post in posts" :key="post.id" class="bg-white p-4 shadow mb-4">
      <div class="flex justify-between mb-2">
        <span class="font-bold">{{ getUser(post.user_id).name }}</span>
        <span class="text-gray-500">{{ post.created_at }}</span>
      </div>
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import { fetchPosts, fetchUsers } from '../api.js';
import PostForm from './PostForm.vue';

export default {
  name: 'PostsPage',
  components: {
    PostForm,
  },
  data() {
    return {
      posts: [],
      users: [],
    };
  },
  methods: {
    async fetchPosts() {
      this.posts = await fetchPosts();
    },
    async fetchUsers() {
      this.users = await fetchUsers();
    },
    getUser(userId) {
      return this.users.find(user => user.id === userId) || {};
    },
  },
  async created() {
    await this.fetchUsers();
    await this.fetchPosts();
  },
};
</script>
