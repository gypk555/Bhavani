import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://192.168.1.28:5000/api/logout", {}, { withCredentials: true });
      setLoggedIn(false); // Update state immediately
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        MyWebsite
      </div>
      <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search..." className="search-input" />
        <button type="submit" className="search-button">🔍</button>
      </form>

      <button className="navbar-cart">🛒 <span className="cart-count">0</span></button>

      <div className="navbar-links">
        {loggedIn ? (
          <button className="navbar-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button className="navbar-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="navbar-btn" onClick={() => navigate("/register")}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
