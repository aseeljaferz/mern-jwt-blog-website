import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',  //if we have any cookie it will be considered as credentials and it will be includeted to the browser in included in the next request
    });
    if (response.ok) {
      setRedirect(true);
    } else{
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'}/>
  }

  return (
    <form className='login' onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  )
}

export default LoginPage