import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Media</h2>
          <p>
            Significant media from Jesus-city Events, Articles and Publications
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items w-full grid grid-cols-1 md:grid-cols-3">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="flex justify-center mb-4"
                  >
                    <Image
                      title={d.title}
                      link={d.link}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
