import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  // const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const handleaAddactive = () => {
  //   setIsActive(!isActive);
  // };
  const handleClick = () => {
    return !true; // or false
  };
  return (
    <div
      className={`sidebar bg-light text-dark d-flex flex-column ${
        isCollapsed ? "collapsed" : ""
      }`}
      style={{
        width: isCollapsed ? "80px" : "250px",
        transition: "width 0.3s ease",
        // height: "100vh",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div class="flex-shrink-0 p-3 ">
        <ul class="list-unstyled ps-0">
          <li class="mb-1 mt-5">
            <Link
              to="/"
              className={`nav-link d-flex align-items-center px-3 pt-3 pb-4${
                isCollapsed ? "justify-content-center" : ""
              } ${handleClick() ? "active" : ""}`}
            >
              <i className="bi bi-house me-3 fs-5"></i>
              {!isCollapsed && <span className="">Dashboard</span>}
            </Link>
          </li>
          <li class="mb-1 ">
            <button
              class={`btn btn-toggle align-items-center rounded collapsed dropdown-toggle${
                isCollapsed ? "justify-content-center" : ""
              } ${handleClick() ? "active" : ""}`}
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <img
                src="/images/su_logo.png"
                alt="fin-unique-logo"
                width={20}
                className="me-2 "
              />
              {!isCollapsed && <span className=" ms-2">Seven Unique</span>}
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav  fw-normal pb-1 small">
                <li>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="Drop accordion-body py-0">
                      <ul className="list">
                        <li>
                          <div className="dropdown">
                            <button
                              data-mdb-button-init
                              data-mdb-ripple-init
                              data-mdb-dropdown-init
                              className="btn btn-light dropdown-toggle fs-6 "
                              type="button"
                              id="dropdownMenuButton"
                              data-mdb-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Blog
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <li>
                                <Link className="dropdown-item fs-6" to="/add-post">
                                  Blog Upload
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item fs-6" to="/Blog_Review">
                                  Blog Review
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to="/su-lead"
                    class="link-dark rounded ps-lg-5 text-decoration-none fs-6"
                  >
                    Lead
                  </Link>
                </li>
                <li>
                  <Link
                    to="/su-user"
                    class="link-dark rounded ps-lg-5 text-decoration-none fs-6"
                  >
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class={`btn btn-toggle align-items-center rounded collapsed dropdown-toggle${
                isCollapsed ? "justify-content-center" : ""
              } ${handleClick() ? "active" : ""}`}
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <img
                src="/images/logo.png"
                alt="fin-unique-logo"
                width={20}
                className="me-2"
              />
              {!isCollapsed && <span className="ms-2">FinUnique</span>}
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav  fw-normal pb-1 small">
                <li>
                  <Link
                    to="/fu-lead"
                    class="link-dark rounded ps-lg-5 text-decoration-none fs-6"
                  >
Lead
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1 ">
            <button
              class={`btn btn-toggle align-items-center rounded collapsed px-0 ps-2 dropdown-toggle ${
                isCollapsed ? "justify-content-center" : ""
              } ${handleClick() ? "active" : ""}`}
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              <img
                src="/images/rummylogo.jpg"
                alt="fin-unique-logo"
                width={20}
                className="me-2 ps-1"
              />
              {!isCollapsed && <span className="ms-2">FinUnique Rummy</span>}
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav  fw-normal pb-1 small">
                <li>
                  <Link
                    to="/fr-lead"
                    class="link-dark rounded ps-lg-5 text-decoration-none fs-6"
                  >
                    Lead
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fr-user"
                    class="link-dark rounded ps-lg-5 text-decoration-none fs-6"
                  >
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
