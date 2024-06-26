import React from "react";

export const Image = ({ title, link, smallImage}) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={link} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive h-[400px] w-[400px]" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
