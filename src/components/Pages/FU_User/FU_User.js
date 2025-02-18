import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom"
import "../SU_User/User.css"

const FU_User = () => {
       const [hoveredMessage, setHoveredMessage] = useState(null);
        const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    
        const users = [
            { name: "John Doe", email: "john@example.com", number: "123-456-7890", service: "Web Dev", message: "Hello! Testing TestingTestingTestingTestingTestingTestingTestingTestingTesting", date: "2025-02-15" },
            { name: "Jane Smith", email: "jane@example.com", number: "987-654-3210", service: "App Dev", message: "How are you? TTestingTestingTestingTestingTestingTestingTestingTestingTesting", date: "2025-02-14" },
            { name: "Sam Johnson", email: "sam@example.com", number: "555-555-5555", service: "Game Dev", message: "Great job! TestingTestingTestingTestingTestingTestingTestingTestingTesting.", date: "2025-02-13" },
        ];
    
        const handleMouseEnter = (message, event) => {
            const rect = event.target.getBoundingClientRect();
            setPopupPosition({ top: rect.top + window.scrollY + 30, left: rect.left + window.scrollX });
            setHoveredMessage(message);
        };
    
        const handleMouseLeave = () => {
            setHoveredMessage(null);
        };
    
        const truncateMessage = (message, maxLength = 20) => {
            return message.length > maxLength ? message.substring(0, maxLength) + "..." : message;
        };
        
  return (
    <div className="container lead-table-container mt-4">
    <h1 className="mb-4 fs-4 fw-bold ps-1">User Details</h1>
    <div className="table-responsive">
        <table className="table table-bordered table-hover lead-table">
            <thead className="thead-dark ">
                <tr>
                    <th scope="col"><h2>Full Name</h2></th>
                    <th scope="col"><h2>Email</h2></th>
                    <th scope="col"><h2>Number</h2></th>
                    <th scope="col"><h2>Service</h2></th>
                    <th scope="col"><h2>Message</h2></th>
                    <th scope="col"><h2>Date</h2></th>
                    <th scope="col"><h2>Actions</h2></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.service}</td>
                        <td
                            onMouseEnter={(e) => handleMouseEnter(user.message, e)}
                            onMouseLeave={handleMouseLeave}
                            className="hoverable-message"
                        >
                            {truncateMessage(user.message)}
                        </td>
                        <td>{user.date}</td>
                        <td>
                            <Link to="" className=" fs-6 px-lg-2"><FaEdit /></Link>
                            <Link to="" className="fs-5 px-lg-2 text-danger"><MdOutlineDelete /></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>


    {hoveredMessage && (
        <div
            className="popup-message"
            style={{
                position: "absolute",
                top: popupPosition.top,
                left: popupPosition.left,
                backgroundColor: "#f8f9fa",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                pointerEvents: "none",
            }}
        >
            {hoveredMessage}
        </div>
    )}
</div>
  )
}

export default FU_User
