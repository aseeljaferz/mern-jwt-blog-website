import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const DeletePostPage = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/post/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        return response.json();
      })
      .then((data) => {
        setPostInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://mern-jwt-blog-website.onrender.com/post/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    if (response.status === 200) {
        alert('Post deleted successfully');
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {postInfo && (
        <form onSubmit={handleDelete}>
          <p>Are you sure you want to delete "{postInfo.title}"?</p>
          <button>Delete</button>
        </form>
      )}
    </div>
  );
};

export default DeletePostPage;
