import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Blog() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/Blog_Review");
  };

  return (
    <>
      <span className="p-2">
        <button type="button" className="btn btn-light mb-3 shadow">
          <span className="fw-bold">
            {" "}
            <CiSquarePlus />{" "}
          </span>{" "}
          Add Blog
        </button>
      </span>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="content card-body">
                    <h4>
                      <a href="#">
                        Phasellus aliquet felis a odio pharetra vehicula.
                      </a>
                    </h4>
                    <p className="d-flex pt-3">
                      <span className="align-self-center">April 22, 2018</span>

                      <span  className="ms-auto ">
                        <Link to="">
                          <span className=" fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded " />
                          </span>
                        </Link>
                      </span>
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      hidden in the middle of text hidden in the
                    </p>

                    <div className=" d-flex align-items-center">
                      <button type="button" className="btn btn-light">
                        Read More
                      </button>

                      <div className="gap-items-5">
                        <a className="text-muted ms-3" href="#">
                          <i className="bi bi-heart"></i> 122
                        </a>
                        <a className="text-muted ms-3" href="#">
                          <i className="bi bi-chat-square-dots"></i> 13
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 bg-img d-none d-md-block sideimg"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="box " onClick={handleRedirect}>
              <div className="row no-gutters">
                <a
                  className="col-4 bg-img d-none d-md-block"
                  style={{ backgroundImage: "url(../images/2.jpg)" }}
                  href="#"
                ></a>

                <div className="col-md-8">
                  <div className="box-body">
                    <h4>
                      <a href="#">
                        Phasellus aliquet felis a odio pharetra vehicula.
                      </a>
                    </h4>
                    <span className="d-flex"><hr className="w-50 ml-0 bt-2 my-20 align-self-center" />
                     <span  className="ms-auto ">
                        <Link to="">
                          <span className="  mt-0 fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded" />
                          </span>
                        </Link>
                      </span>
                      </span>

                    <p className="pt-3">
                       There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <div className="flexbox align-items-center mt-3">
                      <a className="text-gray" href="#">
                        <img
                          className="avatar avatar-sm"
                          src="../images/av1.jpg"
                          alt="..."
                        />
                        <span className="ms-2 ">Isabella</span>
                      </a>

                      <a href="#">
                        <i className="ion-heart text-danger font-size-11"></i>
                        <span className="font-size-11 text-fade ml-1">234</span>
                      </a>
                      <a className="text-muted ms-3" href="#">
                        <i className="bi bi-heart"></i> 122
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <figure className="img-hov-zoomin">
                <img
                  className="img-fluid"
                  src="./images/laptop.jpg"
                  alt="Gallery Thumbnail"
                />
              </figure>

              <div className="box-body">
                <span className="d-flex">
                  <p className="text-success text-uppercase align-self-center mt-3">Pellentesque</p>
                <span  className="ms-auto ">
                        <Link to="">
                          <span className="  mt-0 fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded " />
                          </span>
                        </Link>
                      </span>
                      </span>



                <h4>
                  <a href="#">Maecenas congue lectus non dignissim luctus.</a>
                </h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <hr className="my-0" />

                <div className="d-flex justify-content-between pt-1 align-items-center mt-15">
                  <small>34 minutes ago</small>

                  <a className="text-muted" href="#">
                    <i className="bi bi-chat-square-dots me-2"></i>
                    <span>9</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <figure className="img-hov-zoomin">
                <img
                  className="img-fluid"
                  src="../images/second.jpg"
                  alt="Gallery Thumbnail"
                />
              </figure>

              <div className="box-body">
              <span className="d-flex">
                  <p className="text-success text-uppercase align-self-center mt-3">Pellentesque</p>
                <span  className="ms-auto ">
                        <Link to="">
                          <span className="  mt-0 fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded " />
                          </span>
                        </Link>
                      </span>
                      </span>
                <h4>
                  <a href="#">Maecenas congue lectus non dignissim luctus.</a>
                </h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <hr className="my-0" />

                <div className="d-flex justify-content-between pt-1 align-items-center mt-15">
                  <small>34 minutes ago</small>

                  <a className="text-muted" href="#">
                    <i className="bi bi-chat-square-dots me-2"></i>
                    <span>9</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <figure className="img-hov-zoomin">
                <img
                  className="img-fluid"
                  src="../images/laptop.jpg"
                  alt="Gallery Thumbnail"
                />
              </figure>

              <div className="box-body">
              <span className="d-flex">
                  <p className="text-success text-uppercase align-self-center mt-3">Pellentesque</p>
                <span  className="ms-auto ">
                        <Link to="">
                          <span className="  mt-0 fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded " />
                          </span>
                        </Link>
                      </span>
                      </span>
                <h4>
                  <a href="#">Maecenas congue lectus non dignissim luctus.</a>
                </h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <hr className="my-0" />

                <div className="d-flex justify-content-between pt-1 align-items-center mt-15">
                  <small>34 minutes ago</small>

                  <a className="text-muted" href="#">
                    <i className="bi bi-chat-square-dots me-2"></i>
                    <span>9</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="row px-4 gx-3">
            <div className=" col-lg-6 col-md-6 col-sm-12 card mb-3">
              <div className="row ">
                <div className="col-md-4">
                  <img
                    className="img-fluid h-100"
                    src="../images/second.jpg"
                    alt="Gallery Thumbnail"
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body">

                    <h5 className="card-title">
                      <a href="#">
                        Phasellus aliquet felis a odio pharetra vehicula.
                      </a>
                    </h5>
                    <Link to="">
                          <span className="  mt-0 fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded " />
                          </span>
                        </Link>


                    <p className="card-text pt-2">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <hr className="my-0" />

                    <div className="d-flex justify-content-between pt-1 align-items-center mt-15">
                      <small>34 minutes ago</small>

                      <a className="text-muted" href="#">
                        <i className="bi bi-chat-square-dots me-2"></i>
                        <span>9</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-12 card mb-3 ">
              <div className="row ">
                <div className="col-md-4">
                  <img
                    className="img-fluid h-100"
                    src="../images/laptop.jpg"
                    alt="Gallery Thumbnail"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="#">
                        Phasellus aliquet felis a odio pharetra vehicula.
                      </a>
                    </h5>
                    <Link to="">
                          <span className="  mt-0 fs-2">
                            <TbEdit className="edit border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete  border p-1 rounded " />
                          </span>
                        </Link>
                    <p className="card-text pt-2">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <hr className="my-0" />

                    <div className="d-flex justify-content-between pt-1 align-items-center mt-15">
                      <small>34 minutes ago</small>

                      <a className="text-muted" href="#">
                        <i className="bi bi-chat-square-dots me-2"></i>
                        <span>9</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div
              className="para box card-inverse bg-img  py-80"
              data-overlay="5"
            >
              <div className="card-body ms-3 text-white">
                <div className="col-lg-12 col-md-12">
                  {/* <img
                    className="big-img"
                    src="../images/second.jpg"
                    alt="Gallery Thumbnail"
                  /> */}
                </div>
                <h3 className="mb-0 mt-4">
                  Fusce vel nisi gravida, rhoncus erat in, aliquet dolor.
                </h3>
                <br />
                <p className="d-flex">
                      <span className="mt-3">April 22, 2018</span>

                      <span  className="ms-auto ">
                        <Link to="">
                          <span className=" fs-2">
                            <TbEdit className="edit-l  border p-1 rounded  me-2" />
                            <RiDeleteBin6Line className="delete-l   border p-1 rounded " />
                          </span>
                        </Link>
                      </span>
                    </p>
                <br />
                <p>
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <a
                  className="btn btn-outline no-radius btn-light btn-default mb-4"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
