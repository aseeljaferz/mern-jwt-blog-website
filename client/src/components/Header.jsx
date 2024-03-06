import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState(null);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/profile", {
      credentials: "include",
    });

    const userInfo = await response.json();
    setUsername(userInfo.username);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null)
  };

  return (
    <header>
      <Link to="/" className="logo">
        Myblog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={handleLogout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
