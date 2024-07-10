<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Welcome to Vue Microblogging</h1>
    <router-link to="/posts" class="mb-2 text-blue-500">All Posts</router-link>
    <router-link to="/users" class="text-blue-500">User Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>