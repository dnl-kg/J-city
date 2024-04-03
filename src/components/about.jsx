import React from "react";

export const About = (props) => {
  return (
    <div id="about py-10 text-center">
      <div className="flex flex-col md:flex-row md:justify-around items-center py-4 md:py-0">
          <div className="md:py-10">
            {" "}
            <img src="img/bibleverse.jpg" className="img-responsive px-8 md:px-0 w-full md:w-[500px]" alt="" />{" "}
          </div>
          <div className=" flex items-center w-full md:w-[400px] px-8 md:px-0">
            <div className="about-text">
              <h2 className="text-3xl py-4">About Us</h2>
              <p className="text-2xl">{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
