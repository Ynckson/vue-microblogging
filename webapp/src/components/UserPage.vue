<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">{{ user.name }}</h1>
    <PostForm :userId="user.id" @postCreated="handlePostCreated" />
    <div v-if="loading" class="text-gray-500">Loading user posts...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else>
      <div
        v-for="post in userPosts"
        :key="post.id"
        class="bg-white p-4 shadow mb-4"
      >
        <div class="flex justify-between mb-2">
          <span class="text-gray-500">{{ post.created_at }}</span>
        </div>
        <div>{{ post.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUserPosts } from "../api.js";
import PostForm from "./PostForm.vue";

export default {
  name: "UserPage",
  components: {
    PostForm,
  },
  data() {
    return {
      user: {
        id: null,
        name: "",
      },
      userPosts: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchUserPosts() {
      this.loading = true;
      try {
        const userId = this.$route.params.id;
        const userPosts = await fetchUserPosts(userId);
        this.userPosts = userPosts;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching user posts:", error);
        this.error = "Failed to fetch user posts. Please try again later.";
        this.loading = false;
      }
    },
    async handlePostCreated() {
      await this.fetchUserPosts();
    },
  },
  async created() {
    await this.fetchUserPosts();
  },
};
</script>

<style scoped></style>
