import React from "react";
const Posts = ({ posts, loading }) => {
  if (loading) return <h2>Loading...</h2>;
  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li className="list-group-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
