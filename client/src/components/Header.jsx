import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);

  const fetchData = async () => {
    await fetch("http://localhost:3000/profile", {
      credentials: "include",
    });
    setUserInfo(userInfo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

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
