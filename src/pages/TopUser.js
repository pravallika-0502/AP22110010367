import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCards";  // Fixed import issue
import { getUsers, getUserPosts } from "../services/api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      const usersWithPostCount = await Promise.all(
        usersData.map(async (user) => {
          const posts = await getUserPosts(user.id);
          return { name: user.name, postsCount: posts.length };
        })
      );
      usersWithPostCount.sort((a, b) => b.postsCount - a.postsCount);
      setUsers(usersWithPostCount.slice(0, 5));
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="section-title">Top 5 Users</h2>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default TopUsers;
