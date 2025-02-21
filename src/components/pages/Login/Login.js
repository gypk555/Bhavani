import "./Login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn, setUserRole }) => {
  const Navigate = useNavigate();
  const [credentials, update_credentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://192.168.1.28:5000/api/check-session", { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn) {
          Navigate(response.data.user.role === "admin" ? "/admin" : "/");
        }
      })
      .catch((err) => console.error("Session check error:", err));
  }, []);

  function handle_logdetails(event) {
    const { name, value } = event.target;
    update_credentials((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    if (credentials.username !== "" && credentials.password !== "") {
      try {
        const response = await axios.post(
          "http://192.168.1.28:5000/api/login",
          credentials,
          { withCredentials: true }
        );

        setLoggedIn(true); // Update state immediately
        setUserRole(response.data.user.role); // Store role

        const role = response.data.user.role;
        Navigate(role === "admin" ? "/admin" : "/");
      } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        alert("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handle_logdetails}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handle_logdetails}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
