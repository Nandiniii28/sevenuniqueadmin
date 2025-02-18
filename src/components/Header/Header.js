import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import '../style/style.css';
import { Link } from "react-router-dom";
const Header = ({ toggleSidebar }) => {
  return (
    <header
      className="header bg-light d-flex align-items-center justify-content-between px-3"
      style={{
        height: "60px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="d-flex align-items-center">
        {/* Sidebar Toggle Button */}
        <i
          className="bi bi-list fs-3 text-primary me-3"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        ></i>
        <span className="fw-bold fs-5">Seven Unique</span>
      </div>

      {/* Right Icons */}
      <div className="d-flex align-items-center">
        {/* <i class="bi bi-cart fs-4 text-secondary me-3"></i>
        <i className="bi bi-bell fs-4 text-secondary me-3"></i> */}
        <Link to="/login_page" className="text-black text-decoration-none">
        <i className="bi bi-person-circle mt-4 fs-4 text-secondary me-2"></i>

        </Link>
      </div>
    </header>
  );
};

export default Header;
