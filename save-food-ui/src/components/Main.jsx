import React from "react";
import DailyStatistics from "./DailyStatistics";

const Main = () => {
  return (
    <main>
      <div className="slider-area">
      <DailyStatistics />
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInUp" data-delay=".6s">
                      Help to remove hunger
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".8s">
                      We are helping to remove hunger and save food
                    </p>
                    <div className="hero__btn">
                      <a
                        href="industries.html"
                        className="btn hero-btn mb-10"
                        data-animation="fadeInLeft"
                        data-delay=".8s"
                      >
                        Manage plate
                      </a>
                      <a
                        href="industries.html"
                        className="cal-btn ml-15"
                        data-animation="fadeInRight"
                        data-delay="1.0s"
                      >
                        <i className="flaticon-null"></i>
                        <p>98456xxxxx</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                    <div className="hunger-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area section-padding30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle text-center mb-80">
                <span>What we are doing</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-null-1"></span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Save Food</a>
                  </h5>
                  <p>
                  Save Food
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat active text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-think"></span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Remove Hunger</a>
                  </h5>
                  <p>
                  Remove Hunger
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-gear"></span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Humanity</a>
                  </h5>
                  <p>
                  Keep Humanity Alive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
