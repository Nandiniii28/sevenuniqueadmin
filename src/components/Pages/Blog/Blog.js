import React from 'react'
export default function Blog() {
    return (
        <>
            <div className='container'>
                <div className='row' >
                    <div class="col-md-6 mb-3">
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h4><a href="#">Phasellus aliquet felis a odio pharetra vehicula.</a></h4>
                                        <p><span>April 22, 2018</span></p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  hidden in the middle of text  hidden in the</p>
                                        <div className="d-flex align-items-center mt-3">
                                            <a className="btn readmore" href="#">Read more</a>

                                            <div className="gap-items-4">
                                                <a className="text-muted" href="#">
                                                    <i class="bi bi-heart"></i> 122
                                                </a>
                                                <a className="text-muted" href="#">
                                                    <i class="bi bi-chat-square-dots"></i> 13
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
                        <div className="box">
                            <div className="row no-gutters">
                                <a
                                    className="col-4 bg-img d-none d-md-block"
                                    style={{ backgroundImage: 'url(../images/2.jpg)' }}
                                    href="#"
                                ></a>

                                <div className="col-md-8">
                                    <div className="box-body">
                                        <h4><a href="#">Phasellus aliquet felis a odio pharetra vehicula.</a></h4>
                                        <hr className="w-50 ml-0 bt-2 my-20" />
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                                            hidden in the middle of text.
                                        </p>
                                        <div className="flexbox align-items-center mt-3">
                                            <a className="text-gray" href="#">
                                                <img
                                                    className="avatar avatar-sm"
                                                    src="../images/av1.jpg"
                                                    alt="..."
                                                />
                                                <span className="ml-2">Isabella</span>
                                            </a>
                                            <a href="#">
                                                <i className="ion-heart text-danger font-size-11"></i>
                                                <span className="font-size-11 text-fade ml-1">234</span>
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
                                <img className='img-fluid' src="../images/laptop.jpg" alt="Gallery Thumbnail" />
                            </figure>

                            <div className="box-body">
                                <p className="text-success text-uppercase">Pellentesque</p>
                                <h4><a href="#">Maecenas congue lectus non dignissim luctus.</a></h4>
                                <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration 
                        in some form, by injected humour, or randomised words which don't look even slightly believable. If you 
                        are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden 
                        in the middle of text.
                    </p>
                                <hr className="my-0" />

                                <div className="d-flex justify-content-between pt-1 align-items-center mt-15">
                                    <small>34 minutes ago</small>

                                    <a className="text-muted" href="#">
                                        <i class="bi bi-chat-square-dots me-2"></i>
                                        <span>9</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <figure className="img-hov-zoomin">
                                <img className='img-fluid' src="../images/second.jpg" alt="Gallery Thumbnail" />
                            </figure>

                            <div className="box-body">
                                <p className="text-purple text-uppercase">Pellentesque</p>
                                <h4><a href="#">Maecenas congue lectus non dignissim luctus.</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                                    in the middle of text.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
