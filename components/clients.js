import React from "react";
import dynamic from "next/dynamic";
import { Waypoint } from "react-waypoint";
import $ from "jquery"
const OwlCarousel = dynamic(import("react-owl-carousel"));

export default class Clients extends React.Component {
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
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-4">Happy Clients</h2>
            </div>
          </div>
          <Waypoint onEnter={() => this.onFTCOEnter()}>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony ftco-owl">
                  <OwlCarousel
                    loop
                    margin={10}
                    center
                    margin={30}
                    items={1}
                    stagePadding={0}
                    navText={[
                      '<span class="ion-ios-arrow-back">',
                      '<span class="ion-ios-arrow-forward">'
                    ]}
                    responsive={{
                      0: {
                        items: 1
                      },
                      600: {
                        items: 2
                      },
                      1000: {
                        items: 3
                      }
                    }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: "url(images/person_1.jpg)"
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: "url(images/person_2.jpg)"
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: "url(images/person_3.jpg)"
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: "url(images/person_1.jpg)"
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4">
                        <div className="text">
                          <p className="mb-4">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: "url(images/person_2.jpg)"
                              }}
                            />
                            <div className="pl-3">
                              <p className="name">Roger Scott</p>
                              <span className="position">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    );
  }
}
