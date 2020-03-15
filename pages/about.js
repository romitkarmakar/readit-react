import React from "react";
import dynamic from "next/dynamic";
import Layout from "../components/layout";
import Hero from "../components/hero";
const Clients = dynamic(import("../components/clients"));

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return (
      <Layout>
        <Hero />
        <div>
          <section className="ftco-section ftco-no-pt ftco-no-pb">
            <div className="container">
              <div className="row d-flex">
                <div className="col-md-6 d-flex">
                  <div
                    className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end"
                    style={{ backgroundImage: "url(images/about.jpg)" }}
                  >
                    <a
                      href="https://vimeo.com/45830194"
                      className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-play" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 pl-md-5 py-md-5">
                  <div className="row justify-content-start pt-3 pb-3">
                    <div className="col-md-12 heading-section ftco-animate">
                      <span className="subheading">Welcome to Readit</span>
                      <h2 className="mb-4">
                        We give you the best articles you want.
                      </h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia
                      </p>
                      <div className="tabulation-2 mt-4">
                        <ul className="nav nav-pills nav-fill d-md-flex d-block">
                          <li className="nav-item mb-md-0 mb-2">
                            <a
                              className="nav-link active py-2"
                              data-toggle="tab"
                              href="#home1"
                            >
                              Our Mission
                            </a>
                          </li>
                          <li className="nav-item px-lg-2 mb-md-0 mb-2">
                            <a
                              className="nav-link py-2"
                              data-toggle="tab"
                              href="#home2"
                            >
                              Our Vision
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link py-2 mb-md-0 mb-2"
                              data-toggle="tab"
                              href="#home3"
                            >
                              Our Value
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content bg-light rounded mt-2">
                          <div
                            className="tab-pane container p-0 active"
                            id="home1"
                          >
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                          <div
                            className="tab-pane container p-0 fade"
                            id="home2"
                          >
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                          <div
                            className="tab-pane container p-0 fade"
                            id="home3"
                          >
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {this.state.display ? <Clients /> : null}
        </div>
      </Layout>
    );
  }
}
