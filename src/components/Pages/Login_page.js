import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Login_page.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export default function Login_page() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div class="main">
        <div class="row g-0">
          <div class="col-md-6 d-flex justify-content-center overflow-x-hidden">
            <img className=" img-fluid image mt-5 " src="images/login.png" />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="Welcome-title mb-3 fs-2">Welcome back!</h5>
              <h2 className="tagline fs-5 mb-5">
                start managing your admin panel faster and better...
              </h2>

              <div className="small-group">
                <div className="input-group w-75">
                  <div className="input-group-text">
                    <MdEmail size={30} className="me-2 pb-1 ms-2" />
                  </div>
                  <input
                    className="form-control"
                    type="Email"
                    placeholder="Email"
                  />
                </div>

                <div className="input-group w-75 mt-2">
                  <div className="input-group-text">
                    <FaLock size={30} className="me-2 pb-1 ms-2" />
                  </div>
                  <input
                    className="form-control"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button onClick={() => setShowPassword(!showPassword)} className="btn border bg-white">
                    {showPassword ? (
                      <AiOutlineEye className="text-gray-500 text-xl " />
                    ) : (
                      <AiOutlineEyeInvisible className="text-gray-500 text-xl" />
                    )}
                  </button>
                </div>

              </div>
              <button type="button" class="btn btn-light w-75 mt-4 p-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
