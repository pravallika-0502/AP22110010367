import React from "react";

const UserCards = ({ user }) => {
  return (
    <div className="card">
      <h3 className="user-name">{user.name}</h3>
      <p className="user-posts">Total Posts: {user.postsCount}</p>
    </div>
  );
};

export default UserCards;
