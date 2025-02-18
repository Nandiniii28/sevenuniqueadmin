import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Blog_Review.css";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { LuMessageCirclePlus } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

import { Link } from "react-router-dom";

const blogPost = {
  title: "Mark Wangar adipisicing elit, sed do eiusmodtempor",
  image: "../images/1.jpg",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
  likes: 122,
  comments: 13,
};

const comments = [
  {
    id: 1,
    name: "Leena Vectom",
    image: "../images/second.jpg",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content.ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "4th sept2023",
    email: "ram@gmail.com",
    phno:"9829114444",

  },
  {
    id: 2,
    name: "Leena Vectom",
    image: "../images/second.jpg",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content.ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "4th sept2023",
    email:  "ram@gmail.com" ,
    phno:"9829114444",

  },
  {
    id: 3,
    name: "Leena Vectom",
    image: "../images/second.jpg",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content.ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "4th sept2023",
    email: "ram@gmail.com" ,
    phno:"9829114444",
  },
];

export default function Blog_Review() {
  const [visibleBoxes, setVisibleBoxes] = useState({});
  const toggleBox = (id) => {
    setVisibleBoxes((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle visibility for the clicked box
    }));
  };
  return (
    <>
      <section>
        <div className="card">
          <img
            className="Image-Mark img-fluid"
            src={blogPost.image}
            alt="Blog"
          />
          <div className="card-body">
            <h3 className="Heads ms-2">{blogPost.title}</h3>
            <div className="gap-items-5 list-style-none p-2 fs-4">
              <span className="text-muted ms-3">
                <i className="bi bi-heart"></i> {blogPost.likes}{" "}
                <span className="fs-6">Likes</span>
              </span>
              <span className="text-muted ms-3">
                <i className="bi bi-chat-square-dots"></i> {blogPost.comments}{" "}
                <span className="fs-6">Comments</span>
              </span>
            </div>
            <p className="para-content p-2">{blogPost.content}</p>
            <button type="button" className="btn btn-light">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="comments-sec mt-5 py-4 rounded">
        <h2 className="ms-3">Comments</h2>
        <div className="px-3">
          {comments.map((comment, id) => (
            <div key={comment.id} className="card mb-3 mt-3">
              <div className="row g-0 px-2">
                <div className="col-lg-2 col-md-4">
                  <img
                    className="img-fluid h-50 mt-3 ms-4 rounded"
                    src={comment.image}
                    alt="User"
                  />
                </div>
                <div className="col-lg-10 col-md-8">
                  <div className="card-body">
                    <h5 className="Heads ms-4">{comment.name}</h5>
                    <span className=" fs-6 para-content ms-3"><MdEmail size={20} className="me-2 mb-2 ms-2 mt-2" />
{comment.email}
                      </span>
                      <span className=" fs-6 para-content ms-3"><FaPhoneAlt size={20} className="me-2 mb-2 ms-2 mt-2 p-1" />
{comment.phno}
                      </span>
                    <span className="float-end para-content">
                      <SlCalender size={20} className="me-2 mb-2 ms-2" />
                      4th Sept 2023
                      <br />


                    </span>

                    <div className="gap-items-5 list-style-none p-2 fs-4">

                    </div>
                    <p className="para-content ms-4">{comment.content}</p>

                    <button
                      type="button"
                      className="btn btn-light ms-4"
                      onClick={() => toggleBox(id)}
                    >
                      <HiArrowUturnLeft size={20} className="me-2" /> Reply
                    </button>
                    {visibleBoxes[id] && (
                      <section
                        className="add-comment border mt-3  mb-3 rounded shadow  ms-3"
                        id="admin"
                      >
                        <div className="card-header">
                          <h4>
                            <div className="fs-3 ms-4">
                              <LuMessageCirclePlus
                                size={36}
                                className="me-2 pb-1"
                              />{" "}
                              Add comment
                            </div>
                          </h4>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="form-group ">
                              {/* <div className="small-group">
                                <div>
                                  <div className="input-group w-50">
                                    <div className="input-group-text">
                                      <FaUser
                                        size={30}
                                        className="me-2 pb-1 ms-2"
                                      />
                                    </div>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Full Name"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="input-group w-50 mt-2">
                                    <div className="input-group-text">
                                      <MdEmail
                                        size={30}
                                        className="me-2 pb-1 ms-2"
                                      />
                                    </div>
                                    <input
                                      className="form-control"
                                      type="Email"
                                      placeholder="Email"
                                    />
                                  </div>
                                </div>
                              </div> */}
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                rows="5"
                                placeholder="write a comment"
                              ></textarea>
                            </div>
                            <button type="button" className="btn btn-light mt-4">
                              Post Comment
                            </button>
                          </form>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
