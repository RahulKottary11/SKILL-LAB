// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-size">
      <nav className="navbar navbar-expand-lg bg-dark">
        <Link className="navbar-brand" to="/">
          <img
            src="https://images.unsplash.com/photo-1633410189542-36d96e3762b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2ltcGxlJTIwbG9nb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="Logo"
            height="50px"
          />
          My Website
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/destination">Destinations</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
