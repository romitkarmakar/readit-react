import React from "react";
import dynamic from "next/dynamic";
import Layout from "../components/layout";
import AOS from "aos";
import 'aos/dist/aos.css';
import $ from "jQuery";
import { Waypoint } from "react-waypoint";
import Hero from "../components/hero";
// const OwlCarousel = dynamic(import('react-owl-carousel'));

class IndexPage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      easing: "slide"
    });
  }

  render() {
    return (
      <Layout>
        <Hero />
        <section id="blogs" className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_1.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_2.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Application</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_3.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Design</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_4.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_5.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_6.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_7.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_8.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <a
                        href="blog-single.html"
                        className="img w-100 mb-3 mb-md-0"
                        style={{ backgroundImage: "url(images/image_9.jpg)" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <span className="subheading">Illustration</span>
                        <h2>
                          <a href="blog-single.html">
                            Build a website in minutes with Adobe Templates
                          </a>
                        </h2>
                        <ul className="media-social list-unstyled">
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-twitter" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-facebook" />
                            </a>
                          </li>
                          <li className="ftco-animate">
                            <a href="#">
                              <span className="icon-instagram" />
                            </a>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0">
                            <a href="#">11/13/2019</a> |{" "}
                            <a href="#">12 min read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li>
                      <a href="#">&lt;</a>
                    </li>
                    <li className="active">
                      <span>1</span>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;
