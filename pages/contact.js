import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
          <Hero />
        <section className="ftco-section contact-section">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h3">Contact Information</h2>
              </div>
              <div className="w-100" />
              <div className="col-md-3">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>Website</span> <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
            <div className="row block-9 no-gutters">
              <div className="col-lg-6 order-md-last d-flex">
                <form action="#" className="bg-light p-4 p-md-5 contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name
                      id
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-6 d-flex">
                <div id="map" className="bg-white" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
