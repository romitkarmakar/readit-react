import React from "react";
import dynamic from "next/dynamic";
import $ from "jQuery";
import { Waypoint } from "react-waypoint";
// const OwlCarousel = dynamic(import('react-owl-carousel'));

class Hero extends React.Component {
  componentDidMount() {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function() {
      $(".js-fullheight").css("height", $(window).height());
    });
  }

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
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />

        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
            data-scrollax-parent="true"
          >
            <Waypoint onEnter={() => this.onFTCOEnter()}>
              <div className="col-md-12 ftco-animate">
                <h2 className="subheading">Hello! Welcome to</h2>
                <h1 className="mb-4 mb-md-0">Readit blog</h1>
                <div className="row">
                  <div className="col-md-7">
                    <div className="text">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <div className="mouse">
                        <a href="#blogs" className="mouse-icon">
                          <div className="mouse-wheel">
                            <span className="ion-ios-arrow-round-down" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
