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
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;