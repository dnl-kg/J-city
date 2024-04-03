import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Jesus City International
          </a>{" "}
        </div>

        <div
          className=""
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" className="page-scroll">
                Ministries
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                Podcasts
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Events
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Media
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
              Contact Us
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Login/Sign up
              </a>
            </li>
            {/* <li>
              <a href="#contact" className="page-scroll">
                
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
