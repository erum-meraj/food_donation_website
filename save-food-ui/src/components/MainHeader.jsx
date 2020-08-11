import React from "react";

const MainHeader = () => {
  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <h1 style ={{fontSize: "40px"}}>
                    Share Plates
                  </h1>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Our Partners</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn d-none d-lg-block ml-20">
                      <a href="contact.html" className="btn header-btn">
                        Donate
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
