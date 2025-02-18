import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Blog from "./components/Pages/Blog/Blog";
import AddPost from  "./components/Pages/Post/AddPost"
import User from "./components/Pages/SU_User/User";
import SU_lead from "./components/Pages/SU_lead/SU_lead";
import FR_User from "./components/Pages/FR_User/FR_User";
import FU_User from "./components/Pages/FU_User/FU_User";
import FU_Lead from "./components/Pages/FU_Lead/FU_Lead";
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="app d-flex h-100">
        {/* Sidebar */}
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

        <div
          className={`content-wrapper ${isSidebarCollapsed ? "collapsed" : ""}`}
          style={{
            width: isSidebarCollapsed ? "calc(100% - 0)" : "calc(100% - 106px)",
            transition: "margin-left 0.3s ease",
          }}
        >
          {/* Header */}
          <Header
            className={`header ${isSidebarCollapsed ? "collapsed" : ""}`}
            toggleSidebar={toggleSidebar}
          />

          {/* Main Content */}
          <main style={{marginTop: "67px", minHeight: "100vh"}}
            className={`main-content p-3 ${isSidebarCollapsed ? "collapsed" : ""}`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="/su-lead" element={<SU_lead/>} />
              <Route path="/su-user" element={<User/>} />
              <Route path="/fu-contact-form-data" element={<FU_Lead/>} />
              <Route path="/fu-user" element={<FU_User />} />
              <Route path="/fr-user-data" element={<FR_User />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;


