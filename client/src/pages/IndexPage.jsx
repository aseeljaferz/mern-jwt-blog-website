import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/post")
    .then((response) => {
      response.json().then((posts) => {
        setPost(posts)
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map( post => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
};

export default IndexPage;