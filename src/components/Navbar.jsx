import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);         
    navigate("/userportal/home"); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    navigate("/"); 
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="nav-center">
        <Link to="/userportal/home" className="nav-link">
          Home
        </Link>
        <Link to="/userportal/allproduct" className="nav-link">
          All Products
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/userportal/cart" className="cart-icon">
          <ShoppingCartIcon />
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogin
            
          } className="nav-link logout-btn">
            Login
          </button>
        ) : (
          <button onClick={handleLogout} className="nav-link login-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
