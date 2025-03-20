const API_URL = "http://20.244.56.144/test";

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return Object.keys(data.users).map((id) => ({ id, name: data.users[id] }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/posts`);
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    return [];
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getPostComments = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`);
    const data = await response.json();
    return data.comments || [];
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return [];
  }
};
    