import React from "react";
import { Waypoint } from "react-waypoint";
import $ from 'jquery'

export default class Footer extends React.Component {
  onFTCOEnter() {
    var i = 0;
    i++;

    $(".ftco-animate").addClass("item-animate");
    setTimeout(function() {
      $(".ftco-animate.item-animate").each(function(k) {
        var el = $(this);
        setTimeout(
          function() {
            var effect = el.data("animate-effect");
            if (effect === "fadeIn") {
              el.addClass("fadeIn ftco-animated");
            } else if (effect === "fadeInLeft") {
              el.addClass("fadeInLeft ftco-animated");
            } else if (effect === "fadeInRight") {
              el.addClass("fadeInRight ftco-animated");
            } else {
              el.addClass("fadeInUp ftco-animated");
            }
            el.removeClass("item-animate");
          },
          k * 50,
          "easeInOutExpo"
        );
      });
    }, 100);
  }

  render() {
    return (
      <Waypoint onEnter={() => this.onFTCOEnter()}>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="logo">
                  <a href="#">
                    Read<span>it</span>.
                  </a>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
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
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">latest News</h2>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="img mr-4 rounded"
                    style={{ backgroundImage: "url(images/image_1.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#"> Oct. 16, 2019</a>
                      </div>
                      <div>
                        <a href="#"> Admin</a>
                      </div>
                      <div>
                        <a href="#"> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="img mr-4 rounded"
                    style={{ backgroundImage: "url(images/image_2.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#"> Oct. 16, 2019</a>
                      </div>
                      <div>
                        <a href="#"> Admin</a>
                      </div>
                      <div>
                        <a href="#"> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Information</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-1 d-block">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-1 d-block">
                      <span className="ion-ios-arrow-forward mr-3" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-1 d-block">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-1 d-block">
                      <span className="ion-ios-arrow-forward mr-3" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone" />
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope" />
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright ©{new Date().getFullYear()}
                All rights reserved | This template is made with{" "}
                <i
                  className="icon-heart color-danger"
                  aria-hidden="true"
                /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      </Waypoint>
    );
  }
}
