const API_BASE_URL = 'http://localhost:3000';

// api.js
export async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/users.json');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return await response.json();
    } catch (error) {
      //console.error('Error fetching users:', error);
      return []; 
    }
  }
  

export async function fetchPosts() {
  const response = await fetch(`${API_BASE_URL}/posts.json`);
  return await response.json();
}

export async function fetchUserPosts(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/posts.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    const userPosts = posts.filter(post => post.user_id === userId);
    return userPosts;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    throw error; 
  }
}

export async function createPost(userId, body) {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      body: body,
      commit: "Create Post"
    }),
  });
  return await response.json();
}