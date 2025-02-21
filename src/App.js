import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import ProductGrid from "./components/Body/Product";
import Footer from "./components/Footer/Footer";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Admin from "./components/Admin/Admin";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // Store user role

  useEffect(() => {
    axios
      .get("http://192.168.1.28:5000/api/check-session", { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn) {
          setLoggedIn(true);
          setUserRole(response.data.user.role);
          localStorage.setItem("isLoggedIn", "true"); // Store login status
          localStorage.setItem("userRole", response.data.user.role);
        }
      })
      .catch(() => {
        setLoggedIn(false);
        setUserRole("");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");
      });
  }, []);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUserRole={setUserRole} />} />
        
        {/* Prevent registered users from accessing the Register page */}
        <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register />} />
        
        {/* Protect the Admin Route */}
        <Route path="/admin" element={userRole === "admin" ? <Admin /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
