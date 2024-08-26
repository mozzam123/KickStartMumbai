import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Register.css";

const Register = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      console.log("status response: ", response.status);

      if (response.ok) {
        navigate("/login"); // Redirect to login page
      } else if (response.status === 400) {
        setError("User already exists");
      }
    } catch (error) {
      console.log("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-success text-center">Registration Form</h1>
      <br />
      <br />
      <div className="col-lg-8 m-auto">
        <form id="myform" className="bg-light" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="txtusername"
              className="form-control"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=""
              name="username"
            />
            <span id="name" className="text-danger font-weight-bold"></span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="txtemail"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              name="email"
            />
            <span id="email" className="text-danger font-weight-bold"></span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="txtpassword"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              name="password"
            />
            <span id="password" className="text-danger font-weight-bold"></span>
            {error && <p className="text-danger">{error}</p>}
          </div>

          <br />
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
