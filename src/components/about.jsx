import React from "react";

export const About = (props) => {
  return (
    <div id="about h-screen">
      <div className="h-full flex flex-row justify-around items-center">
          <div className="">
            {" "}
            <img src="img/bibleverse.jpg" className="img-responsive w-full md:w-[500px]" alt="" />{" "}
          </div>
          <div className=" flex items-center w-full md:w-[400px]">
            <div className="about-text">
              <h2 className="text-3xl py-4">About Us</h2>
              <p className="text-2xl">{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

 {/* <h3>Why Choose Us?</h3> */}
              {/* <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}