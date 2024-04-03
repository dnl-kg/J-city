import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro bg-[url(/public/img/Cover.jpg)] bg-cover">
        <div className="">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
