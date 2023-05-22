import React from "react";
import "../Component_StyleSheet/header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ className }) => {

  const navigate = useNavigate();

  return (
    <div className={className}>
      <div className="logo" onClick={() => navigate("/")}>
        <h1>Cks.</h1>
      </div>
      <nav className="header_navbar">
        <ul className="header_listbox">
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about">
              <i className="fa-solid fa-user-tie"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/project">
              <i className="fa-brands fa-hive"></i> Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/resume">
              <i className="fa-regular fa-rectangle-list"></i> Resume
            </NavLink>
          </li>
          <li className="git_navlink">
            <a
              href="https://github.com/31ChandanTech?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-branch"></i>
              <i className="fa-solid fa-star"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
