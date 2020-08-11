import React from "react";

const DailyStatistics = () => {
  return (
    <div
      class="count-down-area pt-25 section-bg"
    >
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12">
          <div className="count-down-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter color-green">500</span>
                  <p className="color-green">Plates Available</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter color-green">1000</span>
                  <p className="color-green">Plates Collected</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter color-green">256</span>
                  <p className="color-green">Leftover Available</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter color-green">150</span>
                  <span className="plus">+</span>
                  <p className="color-green">Leftover Collected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyStatistics;
