import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  // const [isActive, setIsActive] = useState(false);

  // const handleaAddactive = () => {
  //   setIsActive(!isActive);
  // };
  const handleClick = () => {

    return (!true); // or false
  };
  return (
    <div
      className={`sidebar bg-light text-dark d-flex flex-column ${isCollapsed ? "collapsed" : ""
        }`}
      style={{
        width: isCollapsed ? "80px" : "250px",
        transition: "width 0.3s ease",
        // height: "100vh",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Sidebar Header */}
      <div className="sidebar-header p-3 d-flex align-items-center">
        <i
          className="bi bi-layout-sidebar-inset-reverse fs-4 toggle-btn"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        ></i>
        {!isCollapsed && (
          <span className="ms-2 fs-5 fw-bold">Seven Unique</span>
        )}
      </div>

      {/* Navigation Links */}
      <ul className="list-unstyled sidebarfixed mt-4">
        <li>
          <Link
            to="/"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-house me-3 fs-5"></i>
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-person-check me-3 fs-5"></i>
            {!isCollapsed && <span>Blog</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
