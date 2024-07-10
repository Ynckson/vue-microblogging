<template>
  <div class="mb-4 p-4 bg-gray-100">
    <textarea v-model="body" class="w-full mb-2 p-2 border" placeholder="What's happening?"></textarea>
    <button @click="createPost" class="bg-blue-500 text-white px-4 py-2">Post</button>
  </div>
</template>

<script>
import { createPost } from '../api.js';

export default {
  name: 'PostForm',
  props: {
    userId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      body: '',
    };
  },
  methods: {
    async createPost() {
      if (this.body.trim()) {
        await createPost(this.userId, this.body);
        this.body = '';
        this.$emit('postCreated');
      }
    },
  },
};
</script>
