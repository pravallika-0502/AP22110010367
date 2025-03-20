import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getUsers, getPosts } from "../services/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const users = await getUsers();
      const allPosts = [];

      for (const user of users) {
        const userPosts = await getPosts(user.id);
        allPosts.push(...userPosts);
      }

      allPosts.sort((a, b) => b.id - a.id);
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="section-title">Feed</h2>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
