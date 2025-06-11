import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/userportal/home");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/userportal/home" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/userportal/allproduct" className="nav-link" onClick={() => setMenuOpen(false)}>
          All Products
        </Link>
        <Link to="/userportal/cart" className="nav-link cart-icon" onClick={() => setMenuOpen(false)}>
          <ShoppingCartIcon />
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-link login-btn">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="nav-link login-btn">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
