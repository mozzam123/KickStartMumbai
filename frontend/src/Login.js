import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/user/login', { // Note: no http://localhost:3000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log('response status: ', response.status);
  
      if (!response.ok & response.status === 404) {
        console.log('User not found');
        setError("User not found");
      }
      else if (!response.ok & response.status === 400){
        console.log('password is not correct');
        setError('password is not correct')
      }
  
      // Handle successful login (e.g., redirect)
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <p className="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
