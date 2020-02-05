import "./rich.carousel.image.style.scss";
import React from "react";

const RichCarouselImage = ({ image }) => {
  return (
    <div className="RichCarouselImageContainer">
      <img className="RichCarouselImage" src={image} alt="carousel" />
    </div>
  );
};

export default RichCarouselImage;
