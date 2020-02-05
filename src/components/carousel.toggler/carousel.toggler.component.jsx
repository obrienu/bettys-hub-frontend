import React from "react";
import "./carousel.toggler.style.scss";

const CarouselToggler = ({ onClick, direction, code }) => {
  const style = { [direction]: 2 };
  return (
    <div style={style} className="CarouselToggler" onClick={onClick}>
      {code}
    </div>
  );
};

export default CarouselToggler;
