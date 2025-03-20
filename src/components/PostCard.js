import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <p className="post-content">{post.content}</p>
      <p className="post-id">Post ID: {post.id}</p>
    </div>
  );
};

export default PostCard;
