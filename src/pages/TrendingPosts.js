import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getUsers, getPosts, getPostComments } from "../services/api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      const users = await getUsers();
      const postsWithComments = [];

      for (const user of users) {
        const userPosts = await getPosts(user.id);
        for (const post of userPosts) {
          const comments = await getPostComments(post.id);
          postsWithComments.push({ ...post, commentsCount: comments.length });
        }
      }

      postsWithComments.sort((a, b) => b.commentsCount - a.commentsCount);
      const maxComments = postsWithComments[0]?.commentsCount;
      const trendingPosts = postsWithComments.filter(post => post.commentsCount === maxComments);

      setPosts(trendingPosts);
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div>
      <h2 className="section-title">Trending Posts</h2>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
